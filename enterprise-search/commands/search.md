---
description: Search across all connected sources in one query
allowed-tools: ["Bash", "Read", "Write", "Edit", "Grep", "Glob", "WebSearch", "WebFetch", "mcp__claude_ai_Slack__*", "mcp__claude_ai_Gmail__*", "mcp__claude_ai_Google_Drive_2__*", "mcp__claude_ai_Asana__*", "mcp__claude_ai_Salesforce__*", "mcp__claude_ai_Outline__*", "mcp__claude_ai_PubMed__*"]
---

# Search Command

Search across all connected MCP sources in a single query. Decompose the user's question, run parallel searches, and synthesize results.

## Instructions

### 1. Check Available Sources

Before searching, determine which MCP sources are available. Attempt to identify connected tools from the available tool list. Common sources:

- **Slack** — `mcp__claude_ai_Slack__*` tools
- **Gmail** — `mcp__claude_ai_Gmail__*` tools
- **Google Drive** — `mcp__claude_ai_Google_Drive_2__*` tools
- **Asana** — `mcp__claude_ai_Asana__*` tools
- **Salesforce** — `mcp__claude_ai_Salesforce__*` tools
- **Outline** — `mcp__claude_ai_Outline__*` tools

If no MCP sources are connected:
```
To search across your tools, you'll need to connect at least one source.
Check your MCP settings to add Slack, Gmail, Google Drive, or other tools.

Supported sources: Slack, Gmail, Google Drive, Asana, Salesforce, Outline,
and any other MCP-connected service.
```

### 2. Parse the User's Query

Analyze the search query to understand:

- **Intent**: What is the user looking for? (a decision, a document, a person, a status update, a conversation)
- **Entities**: People, projects, teams, tools mentioned
- **Time constraints**: Recency signals ("this week", "last month", specific dates)
- **Source hints**: References to specific tools ("in Slack", "that email", "the doc")
- **Filters**: Extract explicit filters from the query:
  - `from:` — Filter by sender/author
  - `in:` — Filter by channel, folder, or location
  - `after:` — Only results after this date
  - `before:` — Only results before this date
  - `type:` — Filter by content type (message, email, doc, thread, file)

### 3. Decompose into Sub-Queries

For each available source, create a targeted sub-query using that source's native search syntax:

**Slack:**
- Use `slack_search_public` or `slack_search_public_and_private`
- Translate filters: `from:` maps to `from:`, `in:` maps to `in:`, dates map to `after:`/`before:`
- Use natural language queries for semantic search when appropriate
- Use keyword queries for exact matches

**Gmail:**
- Use `gmail_search_messages`
- Translate filters: `from:` maps to `from:`, dates map to `after:`/`before:` in YYYY/M/D format
- Map `type:` to `has:attachment` or subject-line searches as appropriate

**Google Drive:**
- Use `gdrive_query_search`
- Translate to Drive query syntax: `name contains`, `fullText contains`, `modifiedTime >`, `mimeType =`
- Consider both file names and content

**Asana:**
- Use `asana_search_tasks` or `asana_typeahead_search`
- Map to task text search, assignee filters, date filters, project filters

**Salesforce:**
- Use `salesforce_query` with SOQL
- Search across Account, Contact, Opportunity, and other relevant objects

**Outline:**
- Use `semantic_search_outline_documents` for conceptual questions
- Use `search_outline_documents` for keyword matches

### 4. Execute Searches in Parallel

Run all sub-queries simultaneously across available sources. Do not wait for one source before searching another.

For each source:
- Execute the translated query
- Capture results with metadata (timestamps, authors, links, source type)
- Note any sources that fail or return errors — do not let one failure block others

### 5. Rank and Deduplicate Results

**Deduplication:**
- Identify the same information appearing across sources (e.g., a decision discussed in Slack AND confirmed via email)
- Group related results together rather than showing duplicates
- Prefer the most authoritative or complete version

**Ranking factors:**
- **Relevance**: How well does the result match the query intent?
- **Freshness**: More recent results rank higher for status/decision queries
- **Authority**: Official docs > wiki > chat messages for factual questions; conversations > docs for "what did we discuss" queries
- **Completeness**: Results with more context rank higher

### 6. Present Unified Results

Format the response as a synthesized answer, not a raw list of results:

**For factual/decision queries:**
```
[Direct answer to the question]

Sources:
- [Source 1: brief description] (Slack, #channel, date)
- [Source 2: brief description] (Gmail, from person, date)
- [Source 3: brief description] (GDrive, doc name, last modified)
```

**For exploratory queries ("what do we know about X"):**
```
[Synthesized summary combining information from all sources]

Found across:
- Slack: X relevant messages in Y channels
- Gmail: X relevant threads
- GDrive: X related documents
- [Other sources as applicable]

Key sources:
- [Most important source with link/reference]
- [Second most important source]
```

**For "find" queries (looking for a specific thing):**
```
[The thing they're looking for, with direct reference]

Also found:
- [Related items from other sources]
```

### 7. Handle Edge Cases

**Ambiguous queries:**
If the query could mean multiple things, ask one clarifying question before searching:
```
"API redesign" could refer to a few things. Are you looking for:
1. The REST API v2 redesign (Project Aurora)
2. The internal SDK API changes
3. Something else?
```

**No results:**
```
I couldn't find anything matching "[query]" across [list of sources searched].

Try:
- Broader terms (e.g., "database" instead of "PostgreSQL migration")
- Different time range (currently searching [time range])
- Checking if the relevant source is connected (currently searching: [sources])
```

**Partial results (some sources failed):**
```
[Results from successful sources]

Note: I couldn't reach [failed source(s)] during this search.
Results above are from [successful sources] only.
```

## Notes

- Always search multiple sources in parallel — never sequentially
- Synthesize results into answers, do not just list raw search results
- Include source attribution so users can dig deeper
- Respect the user's filter syntax and apply it appropriately per source
- When a query mentions a specific person, search for their messages/docs/mentions across all sources
- For time-sensitive queries, prioritize recency in ranking
- If only one source is connected, still provide useful results from that source
