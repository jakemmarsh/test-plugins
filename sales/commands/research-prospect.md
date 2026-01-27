# /research-prospect

Research a company or contact to build a comprehensive prospect brief.

## Usage

```
/research-prospect <company name or contact name>
```

## Workflow

1. **Determine research target**: Parse the argument to identify whether this is a company or individual contact.

2. **Check CRM for existing data** (if CRM MCP is connected):
   - Search for existing account by company name
   - If found: Pull full account context including:
     - Account details (industry, size, location, owner)
     - All contacts on the account with roles and titles
     - Open opportunities (stage, amount, close date, next steps)
     - Closed-won and closed-lost history
     - Recent activity (last touch, last meeting, last email)
     - Any notes or account plans
   - If contact name provided: Search contacts, pull their activity and engagement history
   - Present existing CRM data first, then supplement with external research

   If CRM is **not** connected:
   > "Connect a CRM MCP server to see existing account data and engagement history. Proceeding with external research."

3. **External research**: Use web search to gather:
   - **Company overview**: What they do, founding year, headquarters, employee count, funding/revenue
   - **Recent news**: Last 90 days of press releases, product launches, leadership changes, funding rounds
   - **Key contacts**: Leadership team, likely decision-makers for your product area
   - **Technology signals**: Job postings that indicate relevant tech stack or initiatives
   - **Pain signals**: Hiring patterns, growth indicators, market pressures, competitive dynamics
   - **Social presence**: LinkedIn company page insights, recent posts from key executives

4. **Check email history** (if Gmail MCP is connected):
   - Search for any prior email threads with the company domain or contact
   - Summarize any existing communication

5. **Check chat history** (if Slack MCP is connected):
   - Search for internal mentions of the company
   - Surface any colleague context or prior discussions

6. **Synthesize research brief**:

## Output Format

```
## Prospect Research: [Company Name]

### Company Overview
- **What they do**: [one-line description]
- **Industry**: [industry]
- **Size**: [employee count, revenue if public]
- **HQ**: [location]
- **Founded**: [year]
- **Funding**: [if applicable]

### CRM Status
[Existing account data or "No existing account found"]

### Key Contacts
| Name | Title | Relevance | LinkedIn |
|---|---|---|---|
| [name] | [title] | [why they matter] | [link if found] |

### Recent News & Signals
- [Signal 1 — what happened and why it matters]
- [Signal 2]
- [Signal 3]

### Pain Signals & Opportunities
- [Pain point 1 — evidence and relevance to your product]
- [Pain point 2]

### Competitive Landscape
- [What solutions they likely use today]
- [Competitive considerations]

### Recommended Approach
- **Angle**: [suggested positioning based on research]
- **Entry point**: [suggested first contact and channel]
- **Timing**: [any urgency or trigger events]

### Prior Internal Context
[Email history, Slack mentions, or "No prior context found"]
```

7. **Offer next steps**:
   - "Would you like me to draft outreach based on this research?"
   - "Would you like me to prep for a call with anyone at this company?"
   - If CRM connected: "Would you like me to create/update the account in your CRM?"
