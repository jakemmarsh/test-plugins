# Customer Context

Framework for aggregating and synthesizing a 360-degree customer view from multiple data sources.

## Purpose

Before any customer interaction — call, email, meeting, or deal review — you need a comprehensive understanding of the relationship. This skill defines how to pull, prioritize, and synthesize context from all available sources into an actionable customer view.

## Data Sources and Priority

Pull context from available sources in this priority order. If a source is not connected, note it gracefully and continue with what's available.

### 1. CRM (Highest Priority)
**What to pull**:
- **Account details**: Name, industry, size, location, account tier/segment, owner, parent account
- **Contacts**: All contacts with titles, roles, email, phone, last activity date
- **Opportunities**: Open and closed (last 12 months) — stage, amount, close date, win/loss reason
- **Activity history**: Last 20 activities — calls, emails, meetings, tasks with dates and summaries
- **Account notes**: Any strategic notes, account plans, or internal commentary
- **Custom fields**: Industry-specific or process-specific data points

**If not connected**:
> "Connect a CRM MCP server (Salesforce, HubSpot, Pipedrive, etc.) to pull account and opportunity data automatically."

### 2. Email
**What to pull**:
- Recent threads with the company domain (last 30-60 days)
- Key topics discussed, open questions, unresolved issues
- Commitments made by either side
- Tone and sentiment of recent communication
- Attachments shared (proposals, contracts, decks)

**If not connected**:
> "Connect an email MCP server to include recent email context."

### 3. Calendar
**What to pull**:
- Upcoming meetings with the customer (next 30 days)
- Recent past meetings (last 30 days) — attendees, agendas
- Meeting frequency and pattern

**If not connected**:
> "Connect a calendar MCP server to include meeting context."

### 4. Chat / Internal Communication
**What to pull**:
- Recent internal mentions of the customer (last 30 days)
- Deal-related discussions between team members
- Escalations, support issues, or concerns raised internally
- Insights from colleagues who have interacted with the customer

**If not connected**:
> "Connect a chat MCP server to include internal discussion context."

### 5. Documents
**What to pull**:
- Proposals, SOWs, contracts shared with or about the customer
- Meeting notes, call summaries
- Mutual action plans or success plans
- Internal strategy documents about the account

**If not connected**:
> "Connect a documents MCP server (Google Drive, etc.) to include shared document context."

### 6. Conversation Intelligence
**What to pull**:
- Recent call recordings and transcripts
- Key moments flagged by the platform (objections, competitor mentions, pricing discussions)
- Talk-to-listen ratios, engagement scores
- Topics and themes across multiple calls

**If not connected**:
> "Connect a conversation intelligence MCP server (Gong, Chorus, etc.) to include call analytics."

### 7. External Research (Always Available)
**What to pull**:
- Recent company news (last 30 days)
- Leadership changes, funding events, product launches
- Industry developments affecting the customer
- Competitive moves in their market

## Key Data Points for the 360 View

When synthesizing context, prioritize these data points:

### Relationship Health
- **Last touch**: When was the last meaningful interaction? Who initiated it?
- **Engagement trend**: Is communication increasing or decreasing?
- **Stakeholder coverage**: How many contacts are engaged? Is there a champion?
- **Sentiment**: Based on recent communication, is the relationship positive, neutral, or strained?

### Commercial Context
- **Open opportunities**: What deals are in play? What stage? What's the next step?
- **Historical business**: What have they bought before? What's the lifetime value?
- **Win/loss history**: Have we lost deals here before? Why?
- **Contract status**: When does the current contract expire? Any renewal risk?

### Strategic Context
- **Account plan**: Is there a strategic account plan? What are the objectives?
- **Executive relationships**: Do we have executive-level engagement?
- **Competitive landscape**: What other vendors are they evaluating or using?
- **Expansion opportunities**: What additional products/services could they use?

### Operational Context
- **Support history**: Any open support tickets? Recent escalations?
- **Product usage**: Are they actively using what they've bought? (if usage data available)
- **Implementation status**: Are they fully onboarded? Any blockers?

## Graceful Degradation

When sources are missing, the customer context should still be useful. Follow this approach:

1. **Start with what you have**: Even one source provides value. A CRM record alone gives you account basics and opportunity context.
2. **Note gaps explicitly**: Tell the user what sources aren't connected and what context they would provide.
3. **Ask the user to fill gaps**: For critical missing context (especially before important calls), ask the user if they can provide it manually.
4. **Prioritize recommendations**: Suggest which MCP connections would add the most value for their workflow.

### Minimum Viable Context
At minimum, you need:
- Company name and what they do
- Who you're talking to and their role
- What the conversation is about (new deal, existing relationship, etc.)

If none of the above is available from connected sources, ask the user to provide it.

## Output Structure

When presenting customer context, use this structure:

```
## Customer Context: [Company Name]

### Relationship Snapshot
- **Status**: [prospect / active deal / customer / churned]
- **Account owner**: [name]
- **Last interaction**: [date, channel, summary]
- **Relationship health**: [healthy / needs attention / at risk]

### Key Contacts
| Name | Title | Role | Last Contact | Engagement |
|---|---|---|---|---|
| [name] | [title] | [champion/exec sponsor/etc.] | [date] | [active/cold] |

### Commercial Summary
- **Open opportunities**: [list with stage and amount]
- **Historical revenue**: $[amount] over [period]
- **Next renewal**: [date if applicable]

### Recent Activity
- [Activity 1 — date, type, summary]
- [Activity 2]
- [Activity 3]

### Open Items
- [Commitment or action item 1 — owner, due date]
- [Commitment or action item 2]

### Context from [Sources Used]
- [Key insight from email/chat/docs/calls]

### Missing Context
- [Source not connected — what it would add]
```
