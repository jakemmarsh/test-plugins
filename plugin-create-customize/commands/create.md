---
description: Scaffold a new plugin from scratch based on your role, workflows, and tools
allowed-tools: ["Bash", "Read", "Write", "Edit", "Glob"]
---

# Create Command

Build a complete plugin tailored to a specific role or function. Walks through discovery, then generates the full plugin directory.

## Instructions

### 1. Discover the Role

Ask the user:

```
What role or function is this plugin for?

Examples: recruiter, product manager, customer success, data analyst, marketing ops,
account executive, solutions engineer, support lead, DevOps engineer
```

Capture the role name. This becomes the plugin directory name (lowercase, hyphenated).

### 2. Discover Key Workflows

Ask the user:

```
What are the 3-5 things you do repeatedly in this role?

Think about your weekly rhythm — the tasks that eat most of your time.
Be specific about what you do, not just what area it's in.

Examples:
- "Screen incoming candidates and update their status in our ATS"
- "Prepare weekly pipeline reports from CRM data"
- "Triage support tickets and route to the right team"
- "Review PRs and update project status in standup notes"
```

For each workflow, probe for:
- **Trigger:** When does this happen? (daily, when something comes in, weekly)
- **Steps:** What do you actually do? Walk through it.
- **Output:** What's the deliverable? (email, report, status update, message)
- **Pain point:** What's slow or annoying about this today?

### 3. Discover Tools

Ask the user:

```
What tools and systems do you use day-to-day?

Include everything — communication, project management, CRM, data tools,
documentation, specialized systems for your role.

For each tool, tell me:
1. The tool name (e.g., Salesforce, Jira, Notion)
2. What you use it for
3. Whether you'd want Claude to read from it, write to it, or both
```

Categorize tools by type:
- **Communication:** Slack, email, Teams
- **Project management:** Asana, Linear, Jira, Monday
- **CRM/Sales:** Salesforce, HubSpot, Pipedrive
- **Data:** BigQuery, Snowflake, Postgres, Hex
- **Docs/Wiki:** Notion, Confluence, Google Docs
- **Specialized:** ATS (Greenhouse, Lever), Support (Zendesk, Intercom), etc.

### 4. Design the Plugin Structure

Based on what you've learned, plan:

**Commands** — One per major workflow. Each command should:
- Map to a single repeatable workflow the user described
- Have a clear trigger and output
- Be named as a verb (e.g., `triage`, `review`, `prepare-report`, `sync`)

**Skills** — Supporting knowledge that commands reference:
- Domain knowledge for the role (terminology, frameworks, best practices)
- Tool-specific guidance (how to interpret data from their systems)
- Templates and formats (report templates, message templates, review checklists)

Present the plan to the user:

```
Here's what I'll create for your [role] plugin:

Plugin: [role-name]/
Commands:
  /[role]:command-1  — [what it does]
  /[role]:command-2  — [what it does]
  /[role]:command-3  — [what it does]

Skills:
  [skill-1]  — [what knowledge it encodes]
  [skill-2]  — [what knowledge it encodes]

MCP Connections:
  [tool-1]  — [read/write, what for]
  [tool-2]  — [read/write, what for]

Does this look right? Anything to add or change?
```

### 5. Generate Plugin Files

Once confirmed, create the complete plugin directory:

**`[role-name]/.claude-plugin/plugin.json`:**
```json
{
  "name": "[role-name]",
  "version": "1.0.0",
  "description": "[one-line description of what this plugin does]",
  "author": {
    "name": "[user's name or org]"
  }
}
```

**`[role-name]/.mcp.json`:**
Configure based on discovered tools. Use `recommendedCategories` for tools where the user wants a connection but you don't know their specific MCP server URL:

```json
{
  "mcpServers": {},
  "recommendedCategories": ["crm", "project-management", "communication"]
}
```

For well-known public MCP servers (Gmail, Google Calendar, Google Drive, Slack via Claude MCP endpoints), include them directly:
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

**`[role-name]/README.md`:**
Marketing-oriented overview following the same style as other plugins in this repo:
- What it does (one sentence)
- The workflows it covers
- Commands table
- Skills table
- Getting started instructions
- Philosophy section

**`[role-name]/commands/[command-name].md`:**
For each command, generate a file with:

```markdown
---
description: [one-line description]
allowed-tools: ["Bash", "Read", "Write", "Edit"]
---

# [Command Name] Command

[What this command does and when to use it.]

## Instructions

### 1. [First Step]
[Detailed instructions for what Claude should do]

### 2. [Second Step]
[Continue with clear, actionable steps]

...

## Notes
- [Failure modes and fallbacks]
- [What to do when a tool isn't available]
```

Each command should:
- Have a clear step-by-step flow
- Reference relevant skills for domain knowledge
- Handle the case where MCP sources aren't available (ask user for input instead)
- End with a summary of what was done

**`[role-name]/skills/[skill-name]/SKILL.md`:**
For each skill, generate:

```markdown
---
name: [skill-name]
description: >
  [Multi-line description of what this skill covers and when to reference it.]
---

# [Skill Name]

[Detailed knowledge, templates, frameworks, and guidance for this domain.]
```

### 6. Validate and Report

After generating all files, verify the structure:
- plugin.json is valid JSON
- All commands referenced in README exist as files
- All skills referenced in commands exist as directories with SKILL.md
- .mcp.json is valid JSON

Report to the user:

```
Plugin created: [role-name]/

Structure:
  [role-name]/
  ├── .claude-plugin/plugin.json
  ├── .mcp.json
  ├── README.md
  ├── commands/
  │   ├── [command-1].md
  │   ├── [command-2].md
  │   └── [command-3].md
  └── skills/
      ├── [skill-1]/SKILL.md
      └── [skill-2]/SKILL.md

To install: claude plugins add [path-to-plugin]

Next steps:
- Review the generated commands and skills — edit anything that doesn't match your workflow
- Run /plugin-create-customize:customize to connect your specific tool instances
- Try your first command: /[role]:[command-1]
```

## Notes

- Always confirm the plan before generating files — never auto-generate without user review
- Keep commands focused on one workflow each; split complex workflows into multiple commands
- Skills should contain reusable knowledge, not workflow steps (that's what commands are for)
- If the user isn't sure about their workflows, help them brainstorm by asking about their typical day
- Prefer `recommendedCategories` over hardcoded MCP URLs when you don't know their specific instance
- Generated plugins should work even with zero MCP servers connected — degrade gracefully
