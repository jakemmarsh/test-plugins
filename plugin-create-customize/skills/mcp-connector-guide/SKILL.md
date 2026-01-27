---
name: mcp-connector-guide
description: >
  Guide to MCP (Model Context Protocol) servers — what they are, how they connect
  Claude to external tools, how to configure .mcp.json, and how to handle cases
  where a recommended server isn't connected. Reference this when setting up tool
  connections for any plugin.
---

# MCP Connector Guide

MCP servers are the bridge between Claude and external tools. They let Claude read from and write to systems like CRMs, project management tools, email, calendars, and databases — without needing API keys, custom code, or middleware in the plugin itself.

## What MCP Servers Are

An MCP server exposes a tool's capabilities to Claude through a standardized protocol. When a plugin declares an MCP server in its `.mcp.json`, Claude gains the ability to call that tool's functions — querying data, creating records, sending messages, reading documents.

**Example:** An MCP server for a CRM might expose functions like:
- `search_contacts` — find contacts by name or email
- `get_opportunity` — retrieve deal details
- `update_deal_stage` — move a deal to a new stage
- `create_task` — add a follow-up task

The plugin author doesn't need to know the CRM's API. The MCP server handles authentication, API calls, pagination, and error handling. The plugin just declares "I need a CRM connection" and uses the functions it provides.

## How MCP Servers Connect to Plugins

The connection is declared in `.mcp.json` at the plugin root:

```json
{
  "mcpServers": {
    "server-name": {
      "type": "http",
      "url": "https://example.mcp.service.com/mcp"
    }
  },
  "recommendedCategories": []
}
```

When a user installs the plugin, Claude connects to the declared MCP servers. The user may need to authenticate with their tool (OAuth, API key, etc.) through the MCP server's setup flow.

## Server Types

MCP servers come in three types, configured via the `type` field:

### HTTP Servers

The most common type. A hosted service that Claude communicates with over HTTPS.

```json
{
  "mcpServers": {
    "gmail": {
      "type": "http",
      "url": "https://gmail.mcp.claude.com/mcp"
    }
  }
}
```

**Use for:** Cloud-hosted tools (SaaS products, APIs, hosted services). Most public MCP servers are this type.

### SSE Servers (Server-Sent Events)

Similar to HTTP but uses a persistent connection for real-time updates.

```json
{
  "mcpServers": {
    "live-data": {
      "type": "sse",
      "url": "https://example.com/mcp/sse"
    }
  }
}
```

**Use for:** Tools that push real-time updates (live dashboards, streaming data, event-driven systems).

### Command Servers

A local process that Claude spawns and communicates with via stdin/stdout.

```json
{
  "mcpServers": {
    "local-db": {
      "type": "command",
      "command": ["npx", "@example/mcp-postgres"],
      "env": {
        "DATABASE_URL": "${DATABASE_URL}"
      }
    }
  }
}
```

**Use for:** Local tools, databases, file systems, CLI tools. Runs on the user's machine. Useful when data shouldn't leave the local environment.

**Fields for command servers:**
- `command` — Array of command and arguments to spawn the process
- `env` — Optional environment variables. Use `${VAR_NAME}` for values from the user's environment
- `cwd` — Optional working directory for the process

## Common MCP Server Categories

Categories group tools by function. Use these in `recommendedCategories` to help users discover relevant MCP servers without hardcoding specific URLs.

| Category | What it covers | Example tools |
|----------|---------------|---------------|
| `crm` | Customer relationship management | Salesforce, HubSpot, Pipedrive, Close |
| `project-management` | Task and project tracking | Asana, Linear, Jira, Monday, ClickUp |
| `communication` | Messaging and chat | Slack, Teams, Discord |
| `email` | Email access | Gmail, Outlook |
| `calendar` | Calendar and scheduling | Google Calendar, Outlook Calendar |
| `documents` | Document storage and editing | Google Drive, Notion, Confluence, Dropbox |
| `data-warehouse` | Analytical databases | BigQuery, Snowflake, Redshift, Databricks |
| `database` | Operational databases | PostgreSQL, MySQL, MongoDB |
| `version-control` | Code repositories | GitHub, GitLab, Bitbucket |
| `support` | Customer support platforms | Zendesk, Intercom, Freshdesk |
| `ats` | Applicant tracking systems | Greenhouse, Lever, Workday Recruiting |
| `analytics` | Analytics and BI tools | Amplitude, Mixpanel, Looker, Tableau |
| `design` | Design tools | Figma, Canva |
| `marketing` | Marketing automation | Marketo, Mailchimp, HubSpot Marketing |
| `finance` | Financial systems | QuickBooks, Xero, Stripe, NetSuite |
| `wiki` | Internal knowledge bases | Notion, Confluence, Outline |

## Configuring .mcp.json

### Minimal Configuration (No Servers Required)

A plugin that works without any tool connections:

```json
{
  "mcpServers": {},
  "recommendedCategories": []
}
```

### With Known Public Servers

For well-known public MCP endpoints (Claude-hosted services), include them directly:

```json
{
  "mcpServers": {
    "gdrive": {
      "type": "http",
      "url": "https://api.anthropic.com/mcp/gdrive/mcp"
    },
    "gmail": {
      "type": "http",
      "url": "https://gmail.mcp.claude.com/mcp"
    },
    "gcal": {
      "type": "http",
      "url": "https://gcal.mcp.claude.com/mcp"
    },
    "slack": {
      "type": "http",
      "url": "https://slack.mcp.claude.com/mcp"
    }
  }
}
```

### With Recommendations Only

When a plugin needs tools but specific instances vary by organization:

```json
{
  "mcpServers": {},
  "recommendedCategories": ["crm", "project-management", "communication"]
}
```

This tells the marketplace: "This plugin works best with a CRM, project management tool, and communication tool. Suggest relevant MCP servers when the user installs it."

### Mixed Configuration

Combine known servers with recommendations:

```json
{
  "mcpServers": {
    "gmail": {
      "type": "http",
      "url": "https://gmail.mcp.claude.com/mcp"
    }
  },
  "recommendedCategories": ["crm", "project-management"]
}
```

### With Local/Command Servers

For plugins that use local tools:

```json
{
  "mcpServers": {
    "local-postgres": {
      "type": "command",
      "command": ["npx", "@example/mcp-postgres"],
      "env": {
        "DATABASE_URL": "${DATABASE_URL}"
      }
    }
  }
}
```

### With Environment Variable Substitution

Use `${VAR_NAME}` syntax for values that should come from the user's environment:

```json
{
  "mcpServers": {
    "custom-api": {
      "type": "http",
      "url": "${MY_TOOL_MCP_URL}"
    }
  }
}
```

This lets users set the URL in their environment without modifying the plugin files.

## recommendedCategories

The `recommendedCategories` array in `.mcp.json` serves two purposes:

1. **Discovery:** When a user installs the plugin, the marketplace can suggest MCP servers from these categories that the user hasn't connected yet.

2. **Documentation:** It signals to the user and to other developers what kind of tools this plugin is designed to work with.

**How to choose categories:**
- Include categories for tools the plugin actively uses in its commands
- Don't include categories for tools that are merely mentioned or optional
- Order by importance — most critical category first

**Example reasoning:**
A sales plugin that queries the CRM, sends emails, and optionally checks calendar availability:
```json
{
  "recommendedCategories": ["crm", "email", "calendar"]
}
```
CRM is essential (commands won't work well without it), email is important (used for outreach), calendar is nice-to-have (only used for scheduling).

## Handling Missing MCP Connections

Plugins must work even when recommended MCP servers aren't connected. This is the most important design principle for robust plugins.

### In Commands: Graceful Fallback

Always check if a server is available before using it, and provide alternatives:

```markdown
### 2. Gather Pipeline Data

**If CRM MCP is available:**
Query open opportunities closing this quarter. Include deal name, amount,
stage, owner, and close date.

**If CRM MCP is not available:**
Ask the user:
"I don't have access to your CRM. You can:
1. Paste your pipeline data here
2. Point me to a spreadsheet or CSV with your pipeline
3. Tell me your open deals and I'll work from that

Which works best?"
```

### In Skills: Note the Dependency

Document what MCP connections enhance the skill:

```markdown
## Data Sources

This skill works best with a connected CRM (recommended category: crm).
Without a CRM connection, you'll need to provide deal data manually.
```

### Progressive Enhancement Pattern

Design commands with layers of capability:

| MCP servers connected | Capability level |
|----------------------|-----------------|
| None | Manual input only — user provides all data |
| Communication (Slack/email) | Can read messages and send updates |
| + CRM | Can also query deals, contacts, accounts |
| + Calendar | Full capability — can also check availability and schedule |

Each layer adds capability but the plugin is useful at every level.

### User-Friendly Fallback Messages

When an MCP server isn't available, don't just say "server not connected." Help the user:

**Bad:**
```
Error: CRM MCP server not connected. Cannot proceed.
```

**Good:**
```
I don't have access to your CRM right now. A few options:

1. Connect your CRM: Run /plugin-create-customize:customize to set up
   the MCP server for your CRM
2. Paste the data: Copy your pipeline/deals list here and I'll work from that
3. Skip this step: I can continue without CRM data and you can add it later

What would you prefer?
```

## Choosing Between mcpServers and recommendedCategories

| Situation | Use mcpServers | Use recommendedCategories |
|-----------|---------------|--------------------------|
| Known public endpoint (Gmail, GCal, GDrive, Slack via Claude) | Yes | No |
| Tool where every org has a different instance (Salesforce, Jira) | No | Yes |
| Local/command server with standard package | Yes | No |
| Tool where you don't know the MCP server URL | No | Yes |
| Mix: some known, some org-specific | Both | Both |

**Rule of thumb:** If the MCP server URL is the same for everyone, put it in `mcpServers`. If it varies by organization, put the category in `recommendedCategories` and let the user or marketplace handle the specific connection.

## Security Considerations

- Never hardcode API keys, tokens, or credentials in `.mcp.json`
- Use environment variable substitution (`${VAR_NAME}`) for sensitive values
- MCP servers handle their own authentication — plugins don't manage credentials
- When creating `settings.local.json` for org-specific config, remind users to gitignore it
- Command servers run locally and have access to the user's filesystem — document what access they need
