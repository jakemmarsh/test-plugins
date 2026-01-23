#!/usr/bin/env node

const fs = require('fs');
const readline = require('readline');

const LOG_FILE = '/tmp/test-plugin-mcp.log';

function log(message) {
  const timestamp = new Date().toISOString();
  fs.appendFileSync(LOG_FILE, `[${timestamp}] ${message}\n`);
}

function sendResponse(response) {
  const responseStr = JSON.stringify(response);
  process.stdout.write(responseStr + '\n');
  log(`Sent response: ${responseStr}`);
}

log('MCP server starting...');

// Debug: check stdin state
console.error(`[test-plugin] stdin isTTY: ${process.stdin.isTTY}, readable: ${process.stdin.readable}`);
process.stdin.on('data', (chunk) => {
  console.error(`[test-plugin] raw stdin data (${chunk.length} bytes): ${chunk.toString().substring(0, 200)}`);
  log(`Raw stdin data: ${chunk.toString().substring(0, 200)}`);
});
process.stdin.on('end', () => {
  console.error('[test-plugin] stdin ended');
  log('stdin ended');
});
process.stdin.on('error', (err) => {
  console.error(`[test-plugin] stdin error: ${err.message}`);
  log(`stdin error: ${err.message}`);
});

// Handle JSON-RPC messages over stdio (newline-delimited JSON)
const rl = readline.createInterface({ input: process.stdin });

rl.on('line', (line) => {
  const trimmed = line.trim();
  if (!trimmed) return;

  try {
    const message = JSON.parse(trimmed);
    log(`Received: ${JSON.stringify(message)}`);
    handleMessage(message);
  } catch (e) {
    log(`Parse error: ${e.message}`);
  }
});

function handleMessage(message) {
  const { id, method, params } = message;

  switch (method) {
    case 'initialize':
      sendResponse({
        jsonrpc: '2.0',
        id,
        result: {
          protocolVersion: '2024-11-05',
          capabilities: {
            tools: {}
          },
          serverInfo: {
            name: 'test-plugin',
            version: '1.0.0'
          }
        }
      });
      break;

    case 'notifications/initialized':
      // No response needed for notifications
      log('Initialization complete');
      break;

    case 'tools/list':
      sendResponse({
        jsonrpc: '2.0',
        id,
        result: {
          tools: [
            {
              name: 'test_echo',
              description: 'Echoes back the provided message. Use this to test that the MCP server is working.',
              inputSchema: {
                type: 'object',
                properties: {
                  message: {
                    type: 'string',
                    description: 'The message to echo back'
                  }
                },
                required: ['message']
              }
            }
          ]
        }
      });
      break;

    case 'tools/call':
      const { name, arguments: args } = params;
      log(`Tool call: ${name} with args: ${JSON.stringify(args)}`);

      if (name === 'test_echo') {
        const echoMessage = args?.message || 'No message provided';
        sendResponse({
          jsonrpc: '2.0',
          id,
          result: {
            content: [
              {
                type: 'text',
                text: `Echo from test-plugin MCP server: "${echoMessage}"`
              }
            ]
          }
        });
      } else {
        sendResponse({
          jsonrpc: '2.0',
          id,
          error: {
            code: -32601,
            message: `Unknown tool: ${name}`
          }
        });
      }
      break;

    default:
      if (id !== undefined) {
        sendResponse({
          jsonrpc: '2.0',
          id,
          error: {
            code: -32601,
            message: `Method not found: ${method}`
          }
        });
      }
  }
}

rl.on('close', () => {
  log('MCP server shutting down');
  process.exit(0);
});

process.on('SIGTERM', () => {
  log('Received SIGTERM');
  process.exit(0);
});

log('MCP server ready');
