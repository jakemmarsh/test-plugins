# Test Plugins

## What This Is

Open-source version of Anthropic's internal `job-function-packages` repo (at ~/Desktop/job-function-packages). Named "test-plugins". Published at `jakemmarsh/test-plugins` on GitHub.

## Source Repo

The internal repo lives at `~/Desktop/job-function-packages`. It contains 9+ plugin packages (productivity, sales, legal, finance, data-analyst, coder, engineering-manager, investment-banker, csm) plus an exploratory/ directory with 14+ more verticals.

## What's Been Published So Far

- `README.md` — Marketing-oriented overview explaining the "why"
- `.claude-plugin/marketplace.json` — Marketplace manifest (currently just productivity)
- `productivity/` — Full plugin: commands (start, update), skills (memory-management, task-management), dashboard.html, plugin.json, .mcp.json

## Key Decisions

- **Named:** "test-plugins"
- **Owner:** Jake Marsh in marketplace.json and plugin.json
- **Version:** Reset to 1.0.0 (internal was 1.0.1)
- **MCP servers stripped:** Removed Anthropic-internal URLs (ant.dev, forge.black.ant.dev, antmcp). Kept public Claude MCP endpoints (api.anthropic.com/mcp/gdrive, gmail.mcp.claude.com, gcal.mcp.claude.com). Added generic slack.mcp.claude.com.
- **Internal references removed:** Stripped `mcp__plugin_employee_*` tool names from commands, replaced with generic descriptions. Removed outline and org-chart (internal-only services). Removed all Slack-specific ant.dev URLs.
- **Local settings skipped:** User chose not to include .claude/ directory with settings.local.json and productivity.local.md.example

## What Still Needs Publishing

Other plugins from the source repo that could be open-sourced (after stripping internal references):
- sales
- legal (heavily Anthropic-specific — legal risk code framework, Anthropic Legal references)
- finance (has Anthropic-specific variance analysis data)
- data-analyst (references anthropic.hex.tech, BigQuery datasets)
- coder
- engineering-manager
- investment-banker (contains Anthropic market analysis)
- csm (entirely Anthropic customer data focused)

Some of these (legal, finance, csm, data-analyst) are very Anthropic-specific and may need significant rewriting rather than just stripping references.

## Anthropic-Internal Things to Never Publish

- Any `ant.dev` or `forge.black.ant.dev` URLs
- BigQuery dataset references (`anthropic.*`)
- `artifactory.infra.ant.dev` (internal PyPI)
- `anthropic.hex.tech` (internal Hex notebooks)
- Specific internal tool names like `bq-mcp-ant`
- Anthropic Legal Risk Code framework details
- Internal financial data or customer data references
- Org chart or internal team structure
- References to specific Anthropic employees by name in functional contexts

## Repo Structure

```
test-plugins/
├── .claude-plugin/marketplace.json
├── CLAUDE.md (this file)
├── README.md
└── productivity/
    ├── .claude-plugin/plugin.json
    ├── .mcp.json
    ├── README.md
    ├── commands/
    │   ├── start.md
    │   └── update.md
    └── skills/
        ├── dashboard.html
        ├── memory-management/SKILL.md
        └── task-management/SKILL.md
```

## Context About Jake (the author)

Jake Marsh maintains this repo. The strategic goal is "tiling the economy" with AI coworkers customized per role, and open-sourcing plugins is the scalable way to seed that ecosystem.
