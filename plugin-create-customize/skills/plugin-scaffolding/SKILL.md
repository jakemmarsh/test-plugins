---
name: plugin-scaffolding
description: >
  Complete reference for plugin directory structure, file formats, and conventions.
  Covers how to write commands (frontmatter format, instruction structure), skills
  (SKILL.md format, references/ subdirectory), plugin.json, .mcp.json, and README files.
  Use this when creating or modifying any plugin file.
---

# Plugin Scaffolding

Everything you need to know about plugin structure, file formats, and best practices.

## Directory Structure

Every plugin follows this layout:

```
[plugin-name]/
├── .claude-plugin/
│   └── plugin.json          ← Plugin metadata (name, version, description)
├── .mcp.json                ← MCP server configuration
├── README.md                ← Marketing-oriented overview
├── commands/
│   ├── command-one.md       ← One file per command
│   └── command-two.md
└── skills/
    ├── skill-one/
    │   ├── SKILL.md          ← Skill definition
    │   └── references/       ← Optional: supporting files
    │       └── template.md
    └── skill-two/
        └── SKILL.md
```

### Naming Conventions

- **Plugin directory:** lowercase, hyphenated (e.g., `customer-success`, `data-analyst`)
- **Command files:** lowercase, hyphenated, verb-first (e.g., `triage-tickets.md`, `prepare-report.md`, `sync.md`)
- **Skill directories:** lowercase, hyphenated, noun-phrase (e.g., `crm-guide`, `report-templates`, `domain-knowledge`)
- **Skill files:** Always `SKILL.md` (uppercase)

## plugin.json

Located at `.claude-plugin/plugin.json`. Defines plugin identity.

```json
{
  "name": "plugin-name",
  "version": "1.0.0",
  "description": "One-line description of what this plugin does for the user",
  "author": {
    "name": "Author or Organization Name"
  }
}
```

**Rules:**
- `name` must match the plugin directory name
- `version` follows semver (major.minor.patch)
- `description` should be user-facing — what value does this plugin provide?
- Keep it short — one sentence

## .mcp.json

Located at the plugin root. Configures tool connections.

```json
{
  "mcpServers": {
    "server-name": {
      "type": "http",
      "url": "https://example.mcp.service.com/mcp"
    }
  },
  "recommendedCategories": ["crm", "project-management"]
}
```

See the **mcp-connector-guide** skill for detailed MCP configuration guidance.

## README.md

Marketing-oriented overview. This is what users see when browsing plugins.

**Structure:**

```markdown
# Plugin Name

[One-line tagline — what it does, with personality.]

---

## How It Works / What It Does

[2-3 paragraphs explaining the value proposition. What problem does it solve?
What does the user's life look like after installing this?]

---

## Commands

| Command | What it does |
|---------|--------------|
| `/plugin:command-1` | [Brief description] |
| `/plugin:command-2` | [Brief description] |

---

## Skills

| Skill | What it covers |
|-------|----------------|
| **skill-name** | [Brief description] |

---

## Getting Started

[Installation and first-run instructions]

---

## Philosophy

[Why this plugin exists. What principles guide its design.]
```

**Tone:** Conversational, practical. Not corporate. Show, don't tell — use examples.

## Command Files

Located in `commands/`. One file per command.

### Format

```markdown
---
description: One-line description shown in command listings
allowed-tools: ["Bash", "Read", "Write", "Edit"]
---

# Command Name Command

[One paragraph: what this command does and when to use it.]

## Usage

[If the command has flags or arguments, show them here]

## Instructions

### 1. First Step Name

[Clear, actionable instructions for what Claude should do.
Be specific about what to check, what to read, what to ask the user.]

### 2. Second Step Name

[Continue with numbered steps. Each step should be self-contained
enough that Claude can execute it without ambiguity.]

### 3. Output / Report

[What to show the user when done.]

## Notes

- [Edge cases and how to handle them]
- [What to do when a tool/source isn't available]
- [Things to never do without user confirmation]
```

### Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `description` | Yes | One-line description, shown in command listings |
| `allowed-tools` | Yes | Array of tool names the command can use |

**Common allowed-tools values:** `"Bash"`, `"Read"`, `"Write"`, `"Edit"`, `"Glob"`, `"Grep"`

### Best Practices for Commands

**Do:**
- Start with checking what already exists before creating anything
- Ask the user for input rather than guessing
- Handle missing MCP sources gracefully — offer manual alternatives
- Confirm before making changes (especially writes and deletes)
- End with a clear summary of what was done
- Reference skills for domain knowledge rather than inlining it

**Don't:**
- Auto-generate files without user review
- Assume MCP servers are connected — always check and fallback
- Put reusable domain knowledge in commands (that belongs in skills)
- Make a single command do too many things — split into focused commands
- Hard-code organization-specific values

### Referencing Skills from Commands

Commands should reference skills for domain knowledge:

```markdown
### 2. Apply Scoring Criteria

Use the lead-scoring skill to evaluate each lead against the qualification framework.
```

### Referencing Plugin Root

Use `${CLAUDE_PLUGIN_ROOT}` to reference files within the plugin directory:

```markdown
Copy the template from `${CLAUDE_PLUGIN_ROOT}/skills/templates/report-template.md`
```

## Skill Files

Located in `skills/[skill-name]/SKILL.md`.

### Format

```markdown
---
name: skill-name
description: >
  Multi-line description of what this skill covers. Include when this skill
  should be referenced and what kind of knowledge it provides. This helps
  Claude decide when to load this skill.
---

# Skill Name

[Opening paragraph: what this skill is about and why it matters.]

## [Section 1]

[Knowledge, frameworks, templates, or guidance organized by topic.]

## [Section 2]

[Continue with clear sections. Use tables, code blocks, and examples.]

## How to Interact

[Optional but recommended: guidance for Claude on how to use this knowledge.
When to apply it, how to present it to users, when to ask for more context.]

## Conventions

[Rules and patterns to follow when using this skill's knowledge.]
```

### Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `name` | Yes | Skill name, matches directory name |
| `description` | Yes | Multi-line description. Include enough context for Claude to know when to load this skill |

### The references/ Subdirectory

Skills can include a `references/` subdirectory for supporting files:

```
skills/
└── report-templates/
    ├── SKILL.md              ← Main skill file
    └── references/
        ├── weekly-report.md   ← Template file
        ├── quarterly-review.md
        └── executive-summary.md
```

**When to use references/:**
- Templates that commands should copy or fill in
- Example files that demonstrate a format
- Data files (lookup tables, scoring matrices)
- Large reference material that would bloat SKILL.md

**Reference from SKILL.md:**
```markdown
## Templates

Weekly report template: `references/weekly-report.md`
Quarterly review template: `references/quarterly-review.md`
```

**Reference from commands:**
```markdown
Copy the template from `${CLAUDE_PLUGIN_ROOT}/skills/report-templates/references/weekly-report.md`
```

### Best Practices for Skills

**Do:**
- Encode reusable domain knowledge — things that apply across multiple commands
- Use tables for structured information (terminology, scoring criteria, lookup data)
- Include examples that show the knowledge applied
- Keep SKILL.md focused — one coherent domain per skill
- Use references/ for large templates or supporting files

**Don't:**
- Put workflow steps in skills (that belongs in commands)
- Include organization-specific data in shared skills (use a separate org-context skill)
- Make skills too broad — "everything about sales" is too much; "lead qualification framework" is right
- Duplicate knowledge across skills — reference the canonical location

### Skill Scope Guidelines

| Good skill scope | Too broad | Too narrow |
|-----------------|-----------|------------|
| lead-qualification | sales-everything | scoring-step-3 |
| report-templates | all-documents | weekly-report-header |
| crm-data-model | all-tools | opportunity-field-list |
| interview-rubric | hiring-process | question-7-scoring |

## Graceful Degradation

Plugins should work even when MCP sources aren't available.

**In commands:**
```markdown
### 2. Gather Pipeline Data

Check if the CRM MCP server is available.

**If CRM is connected:** Query open opportunities with close dates this quarter.

**If CRM is not connected:** Ask the user:
"I don't have access to your CRM right now. Can you paste or describe
your current pipeline? Or point me to a file/spreadsheet with the data."
```

**In .mcp.json:**
Use `recommendedCategories` to signal what tools would enhance the plugin without requiring them:
```json
{
  "mcpServers": {},
  "recommendedCategories": ["crm"]
}
```

## Template: Minimal Plugin

The smallest valid plugin:

```
my-plugin/
├── .claude-plugin/
│   └── plugin.json
├── .mcp.json
├── README.md
└── commands/
    └── start.md
```

With one command and no skills, this is enough to be installable and useful.

## Template: Full Plugin

A complete plugin with all file types:

```
my-plugin/
├── .claude-plugin/
│   └── plugin.json
├── .mcp.json
├── README.md
├── commands/
│   ├── start.md
│   ├── sync.md
│   └── review.md
└── skills/
    ├── domain-knowledge/
    │   ├── SKILL.md
    │   └── references/
    │       ├── template-a.md
    │       └── template-b.md
    ├── tool-guide/
    │   └── SKILL.md
    └── org-context/
        └── SKILL.md
```
