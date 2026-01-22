# Test Plugins Marketplace

A test marketplace containing a single plugin that demonstrates all Claude Code plugin component types.

## Installation

Add this marketplace to Claude Code:

```bash
claude /plugins add /path/to/test-plugins
```

Or if published to a git repository:

```bash
claude /plugins add https://github.com/username/test-plugins
```

## Contents

### test-plugin

A comprehensive test plugin that includes one of each component type:

| Component | Description |
|-----------|-------------|
| **MCP Server** | Provides a `test_echo` tool that echoes messages |
| **Hook** | Logs all user prompt submissions to `/tmp/test-plugin-hook.log` |
| **Agent** | A simple agent (`test-agent`) for codebase exploration |
| **Skill** | A greeting skill triggered by "use the test skill" |
| **Command** | `/greet` command for quick greeting |

## Verification

After installing, verify each component works:

### 1. Check Plugin Installation

```bash
claude /plugins
```

Should show `test-plugins` marketplace with `test-plugin`.

### 2. Verify MCP Server

```bash
claude /mcp
```

Should show `test-plugin` server with `test_echo` tool available.

Test it by asking Claude: "Use the test_echo tool to echo 'hello world'"

Check logs: `cat /tmp/test-plugin-mcp.log`

### 3. Verify Hook

Submit any prompt to Claude, then check:

```bash
cat /tmp/test-plugin-hook.log
```

Should show log entries for each prompt submitted.

### 4. Verify Agent

Ask Claude: "Use the test-agent to list files in the current directory"

The test-agent should respond and complete the task.

### 5. Verify Skill

Ask Claude: "Use the test skill"

Should receive a greeting with the current time.

### 6. Verify Command

Type in Claude:

```
/test-plugin:greet
```

Should display a greeting message.

## File Structure

```
test-plugins/
├── .claude-plugin/
│   └── marketplace.json        # Marketplace manifest
├── README.md                   # This file
└── test-plugin/
    ├── .claude-plugin/
    │   └── plugin.json         # Plugin manifest
    ├── .mcp.json               # MCP server configuration
    ├── mcp-server.js           # MCP server implementation
    ├── hooks/
    │   └── hooks.json          # Hook definitions
    ├── hooks-handlers/
    │   └── echo-logger.sh      # Hook handler script
    ├── agents/
    │   └── test-agent.md       # Agent definition
    ├── skills/
    │   └── test-skill/
    │       └── SKILL.md        # Skill definition
    └── commands/
        └── greet.md            # Slash command
```

## Troubleshooting

### MCP Server Not Starting

Check the log file:
```bash
cat /tmp/test-plugin-mcp.log
```

Ensure Node.js is installed and accessible.

### Hook Not Firing

1. Verify the hook handler is executable: `chmod +x test-plugin/hooks-handlers/echo-logger.sh`
2. Check the log file exists and is writable

### Agent/Skill Not Found

Ensure the plugin is properly installed by running `claude /plugins` and checking that test-plugin appears in the list.
