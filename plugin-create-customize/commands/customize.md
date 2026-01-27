---
description: Adapt an existing plugin to your organization's tools and workflows
allowed-tools: ["Bash", "Read", "Write", "Edit", "Glob"]
---

# Customize Command

Take an existing plugin and tailor it to your organization — swap tools, add workflows, adjust for how your team actually works.

## Instructions

### 1. Identify the Target Plugin

Ask the user:

```
Which plugin do you want to customize?

This can be:
- A plugin you've already installed (e.g., "productivity", "sales")
- A plugin directory path on your machine
```

Locate the plugin directory. Read its structure:
- `.claude-plugin/plugin.json` — name, description
- `.mcp.json` — current MCP server configuration
- `commands/` — list all command files
- `skills/` — list all skill directories
- `README.md` — overview

Present a summary:

```
Found plugin: [name]
Description: [description]

Commands:
  /[name]:command-1  — [description from frontmatter]
  /[name]:command-2  — [description from frontmatter]

Skills:
  [skill-1]  — [description from frontmatter]

MCP Servers configured:
  [server-1] → [url]
  [server-2] → [url]

Recommended categories: [list]
```

### 2. Discover What to Change

Ask the user:

```
What do you want to customize? Common changes include:

1. **Swap tools** — Use HubSpot instead of Salesforce, Jira instead of Linear, etc.
2. **Add workflows** — New commands for processes specific to your team
3. **Modify existing workflows** — Adjust commands to match how your org actually does things
4. **Add org-specific context** — Your terminology, team structure, custom fields
5. **Connect your tool instances** — Configure MCP servers with your specific URLs/credentials

What would you like to change?
```

Let the user describe all their changes before acting. Group changes by type.

### 3. Handle Tool Swaps

For each tool swap:

**Identify what the old tool was used for** — Read through commands and skills that reference the old tool. Understand the data model (e.g., "deals" in Salesforce vs. "deals" in HubSpot).

**Update .mcp.json:**
- Remove or replace the old MCP server entry
- If you know the new tool's MCP server URL, add it directly
- If not, add the tool's category to `recommendedCategories` and note it for the user

**Update commands that reference the old tool:**
- Replace tool-specific terminology (e.g., "Opportunity" → "Deal")
- Update any field names or data model references
- Adjust workflows if the new tool works differently

**Update skills that reference the old tool:**
- Replace tool-specific guidance
- Update any templates that reference tool-specific concepts

Present each change for confirmation:

```
Tool swap: Salesforce → HubSpot

Changes I'll make:
1. .mcp.json: Replace Salesforce MCP server with HubSpot category
2. commands/pipeline-review.md: Change "Opportunity" to "Deal", update field names
3. skills/crm-guide/SKILL.md: Rewrite CRM guidance for HubSpot data model

Proceed?
```

### 4. Handle New Workflows

For each new workflow the user wants to add:

**Probe for details** (same as the create command):
- Trigger: When does this happen?
- Steps: Walk through what you do
- Output: What's the deliverable?
- Tools involved: What do you read from / write to?

**Generate the new command file** following the same format as existing commands in the plugin.

**Create supporting skills** if the new workflow needs domain knowledge not already covered.

**Update README.md** to include the new command in the commands table.

### 5. Handle Workflow Modifications

For each workflow the user wants to modify:

**Read the existing command file.** Show the user the current flow:

```
Current flow for /[name]:command-1:

1. [Step 1 description]
2. [Step 2 description]
3. [Step 3 description]

What would you change?
```

**Make targeted edits** based on the user's feedback. Options:
- Add steps
- Remove steps
- Reorder steps
- Change the output format
- Add conditional logic (e.g., "if the deal is over $100k, also notify the VP")
- Change tool references within steps

### 6. Handle Org-Specific Context

If the user wants to add terminology, team structure, or custom concepts:

**Create a local settings skill** at `skills/org-context/SKILL.md`:

```markdown
---
name: org-context
description: >
  Organization-specific context including team structure, terminology,
  custom processes, and tool configurations unique to this org.
---

# Organization Context

## Team Structure
[User's team/org details]

## Terminology
| Term | Meaning |
|------|---------|
| [term] | [definition] |

## Custom Processes
[Org-specific workflows or rules]

## Tool Configuration
[Custom fields, deal stages, ticket types, etc.]
```

Update commands to reference this skill where relevant.

### 7. Configure MCP Servers

For tools the user wants to connect:

**Walk through each tool:**

```
Let's connect [tool name]. I need:

1. The MCP server URL for your instance
   (This is usually provided by your admin or found in the tool's MCP integration docs)

2. The server type: "http", "sse", or "command"
   (Most cloud tools use "http")
```

**If the user doesn't have the URL:**

```
No problem. I'll add [tool-category] to your recommended categories.
When you install this plugin, Claude will suggest relevant MCP servers
from the marketplace that you can connect.
```

**Update .mcp.json** with the configured servers.

### 8. Create Local Settings File

If the user has org-specific configuration that shouldn't be checked into the plugin itself (API keys, instance URLs, team-specific overrides):

**Create `settings.local.json.example`** as a template:

```json
{
  "mcpServers": {
    "[tool-name]": {
      "type": "http",
      "url": "YOUR_INSTANCE_URL_HERE"
    }
  }
}
```

Tell the user:

```
I've created settings.local.json.example as a template.

To use it:
1. Copy it to settings.local.json
2. Fill in your actual URLs and configuration
3. settings.local.json is gitignored — your config stays private
```

### 9. Validate and Report

After all changes, verify:
- .mcp.json is valid JSON
- All command files have valid frontmatter
- All skills referenced by commands exist
- README reflects the current state

Present a summary:

```
Customization complete for [plugin-name]:

Changes made:
- [Tool swap summary]
- [New commands added]
- [Workflows modified]
- [Org context added]
- [MCP servers configured]

Files modified:
  [list of files changed]

Files created:
  [list of new files]

Next steps:
- Review the changes — especially any modified commands
- Copy settings.local.json.example to settings.local.json and fill in your config
- Try your customized commands to verify they work with your tools
```

## Notes

- Always show changes before applying them — never modify files without confirmation
- Preserve the original plugin's structure and conventions when adding to it
- Tool swaps should be thorough — check all commands and skills for references to the old tool
- When in doubt about a tool's data model, ask the user rather than guessing
- Local settings files keep org-specific config separate from the shareable plugin
- If the user wants changes that would break the plugin for others, suggest forking rather than modifying in place
