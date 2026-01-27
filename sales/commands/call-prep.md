# /call-prep

Prepare for a sales call by aggregating context from all available sources.

## Usage

```
/call-prep <company or contact name>
```

Optionally include meeting context:
```
/call-prep Acme Corp — discovery call with VP Engineering
```

## Workflow

1. **Identify the meeting**:
   - If Google Calendar MCP is connected: Search for upcoming meetings matching the company/contact name. Pull meeting title, attendees, description, and any attached documents.
   - If not connected: Use the company/contact name provided. Ask user for attendee details if not given.

2. **Pull context from available sources**:

   **CRM** (if connected):
   - Account details: industry, size, owner, account tier
   - All contacts at the account with titles and roles
   - Open opportunities: stage, amount, close date, next steps
   - Historical opportunities: closed-won, closed-lost, key learnings
   - Recent activity: last 10 activities (calls, emails, meetings, tasks)
   - Any account notes or plans

   **Email** (if Gmail connected):
   - Recent email threads with the company domain (last 30 days)
   - Key topics discussed, any open questions or commitments
   - Attachments shared (proposals, decks, documents)

   **Chat** (if Slack connected):
   - Recent internal mentions of the company (last 30 days)
   - Any colleague insights, competitive intel, or deal context
   - Internal stakeholders who have discussed this account

   **Documents** (if Google Drive connected):
   - Proposals, SOWs, or decks shared with or about this account
   - Any meeting notes from prior calls

   **Conversation Intelligence** (if connected):
   - Previous call recordings and key moments
   - Talk-to-listen ratio, questions asked, topics covered
   - Competitor mentions from prior calls

   For any source that is NOT connected, note it:
   > "[Source] is not connected. Add a [category] MCP server to include this context automatically."

3. **Research supplement**: Run a quick web search for:
   - Recent company news (last 30 days)
   - Any new executive announcements
   - Relevant industry developments

4. **Generate prep brief**:

## Output Format

```
## Call Prep: [Company Name]
**Meeting**: [title] — [date/time]
**Attendees**: [list with titles]

### Account Snapshot
- **Status**: [new prospect / active opportunity / existing customer]
- **Opportunity**: [stage, amount, close date if applicable]
- **Relationship tenure**: [how long you've been engaged]
- **Last touch**: [date, channel, summary]

### Key Contacts on This Call
| Name | Title | Role in Deal | Last Interaction |
|---|---|---|---|
| [name] | [title] | [champion/evaluator/etc.] | [summary] |

### Context & History
- [Key point 1 from email/call/CRM history]
- [Key point 2]
- [Key point 3]
- [Any open commitments or action items from last interaction]

### Recent News & Signals
- [Relevant recent development]

### Suggested Agenda
1. [Opening — reference last conversation or trigger]
2. [Topic 1 — discovery question or value discussion]
3. [Topic 2]
4. [Next steps — propose clear follow-up]

### Discovery Questions
- [Question 1 — tied to a gap in your understanding]
- [Question 2 — explore pain or priority]
- [Question 3 — understand decision process]
- [Question 4 — timeline and urgency]

### Potential Objections & Responses
- **[Likely objection 1]**: [suggested response]
- **[Likely objection 2]**: [suggested response]

### Internal Notes
- [Any relevant Slack context or colleague insights]
- [Competitive intel if available]
```

5. **Offer next steps**:
   - "Would you like me to draft a pre-meeting email to the attendees?"
   - "Would you like me to research any of these contacts in more depth?"
   - "After the call, run `/call-summary` to process your notes."
