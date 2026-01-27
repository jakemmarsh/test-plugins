# Customer Snapshot

Generate a quick 360-degree overview of a customer account by pulling together data from all available sources.

## Usage

```
/customer-snapshot <customer_name>
```

## Workflow

### 1. Identify the Customer

Accept the customer or account name from the user. Normalize the name to handle variations (e.g., "Acme" vs "Acme Corp" vs "Acme Corporation").

### 2. Gather Data from Available Sources

Pull from every connected source to build a complete picture:

**CRM (if connected):**
- Account details: plan/tier, ARR/contract value, contract dates, renewal timeline
- Key contacts: names, roles, last activity
- Opportunity history: upsells, expansions, at-risk flags
- Account owner and team assignments

**Support Tickets (if connected):**
- Open tickets: count, priority, age
- Recent closed tickets: last 30-90 days
- Ticket trends: volume over time, categories
- CSAT/NPS scores if available

**Email (Gmail):**
- Search for recent email threads with the customer domain
- Identify last contact date and topic
- Note any unanswered emails or pending action items

**Chat (Slack):**
- Search for recent mentions of the customer name in team channels
- Identify any internal discussions, escalations, or FYIs
- Note any action items or concerns raised by the team

**Calendar (Google Calendar):**
- Recent meetings with the customer
- Upcoming scheduled meetings or reviews
- Meeting cadence and regularity

**Usage/Analytics (if connected):**
- Current usage levels and trends (weekly/monthly)
- Feature adoption metrics
- Active users vs. licensed seats
- Last activity timestamp

**Documents (Google Drive):**
- Account plans, success plans, or strategy docs
- Meeting notes from recent interactions
- Shared documents or proposals

### 3. Generate the Snapshot

Compile findings into a structured snapshot:

```
## [Customer Name] — Account Snapshot
Generated: [date]

### Health Score: [X/100] ([Level])
[Brief explanation of score drivers]

### Account Overview
- **Plan/Tier:** [plan details]
- **Contract Value:** [ARR or contract amount]
- **Contract Period:** [start] — [end]
- **Renewal:** [date] ([X days away])
- **Account Owner:** [name/team]

### Key Contacts
- [Name], [Title] — [last interaction date]
- [Name], [Title] — [last interaction date]

### Recent Activity (Last 30 Days)
- **Emails:** [count] threads, last on [date] re: [topic]
- **Meetings:** [count], last on [date]
- **Support Tickets:** [open count] open, [closed count] closed
- **Internal Mentions:** [summary of team discussions]

### Usage Highlights
- [Key metric 1]: [value] ([trend])
- [Key metric 2]: [value] ([trend])
- [Key metric 3]: [value] ([trend])

### Attention Items
[Prioritized list of items needing action, using indicators:]
🔴 Critical — [item]
⚠️ Warning — [item]
✅ Positive — [item]
ℹ️ FYI — [item]

### Recommended Actions
1. [Action with rationale]
2. [Action with rationale]
3. [Action with rationale]
```

### 4. Handle Missing Data

If sources are not connected, be transparent about gaps:

- Note which data sources are not available
- Ask the user to provide key details manually if needed:
  - "I don't have CRM access. Can you tell me their plan, ARR, and renewal date?"
  - "No support ticketing connected. Are there any open issues I should know about?"
  - "No usage analytics available. Can you share their recent usage trends?"
- Indicate what additional data would be available with each connection type
- Still generate the snapshot with whatever data IS available — partial snapshots are still valuable

### 5. Offer Follow-ups

After presenting the snapshot, offer:
- "Want me to draft a check-in email based on this?"
- "Should I start QBR prep for this account?"
- "Want me to dig deeper into any of these areas?"
- "Should I set up a health monitoring cadence for this account?"
