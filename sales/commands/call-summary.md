# /call-summary

Process call notes or a transcript to extract key information, generate follow-up, and update records.

## Usage

```
/call-summary
```

Then paste your call notes, transcript, or provide a file path.

If a conversation intelligence MCP is connected, you can also:
```
/call-summary <call URL or identifier>
```

## Workflow

1. **Get call content**:

   **If conversation intelligence MCP is connected**:
   - If a call URL or identifier is provided, pull the transcript and metadata automatically
   - Pull: attendees, duration, talk-to-listen ratio, key topics, action items (if the tool extracts them)

   **If not connected**:
   - Ask the user to paste their call notes or transcript
   - Accept raw notes, structured notes, or full transcripts
   > "Paste your call notes or transcript below. For richer analysis, connect a conversation intelligence MCP server to pull call data automatically."

2. **Extract key information**:

### Discussion Points
- Identify the main topics discussed with brief summaries
- Note any decisions made during the call

### Commitments & Action Items
- **Our commitments**: Things we promised to do, with owners if mentioned
- **Their commitments**: Things the prospect/customer agreed to do
- Flag any commitments without clear timelines

### Objections & Concerns
- Objections raised during the call
- How they were addressed (or not)
- Unresolved concerns that need follow-up

### Discovery Insights
- New information learned about their needs, priorities, or situation
- Budget signals
- Timeline signals
- Decision process insights
- Competitive mentions

### Deal Impact
- How this call affects the deal stage and probability
- Any changes to expected close date or deal size
- Risk flags (new competitor, budget concerns, champion leaving, etc.)

3. **Generate outputs**:

### Internal Summary
```
## Call Summary: [Company] — [Date]
**Attendees**: [list]
**Duration**: [if known]
**Call Type**: [discovery / demo / negotiation / check-in / etc.]

### Key Takeaways
1. [Most important insight or outcome]
2. [Second key point]
3. [Third key point]

### Action Items
| Action | Owner | Due Date |
|---|---|---|
| [action] | [person] | [date] |

### Deal Update
- **Stage**: [current → recommended]
- **Next step**: [specific next action]
- **Risk level**: [low/medium/high — why]
```

### Customer-Facing Follow-Up Email
Draft a follow-up email that:
- Thanks them for their time
- Summarizes key discussion points (from the customer's perspective, not internal notes)
- Confirms action items and next steps with dates
- Attaches or references any materials discussed
- Proposes next meeting if appropriate

4. **CRM updates** (if CRM connected):
   - Suggest specific field updates: stage, next step, close date, amount
   - Offer to log the call activity with summary
   - Offer to create follow-up tasks for action items
   > "Would you like me to update the opportunity in your CRM with these details?"

5. **Offer next steps**:
   - "Would you like me to send this follow-up email?" (if email MCP connected)
   - "Would you like me to create calendar invites for the next steps?"
   - "Would you like me to research any open questions from the call?"
   - "Would you like me to adjust the follow-up email?"
