# /draft-outreach

Draft personalized outreach for a prospect across different channels.

## Usage

```
/draft-outreach <prospect name> <channel>
```

**Channels**: `email`, `linkedin`, `call-script`

If channel is omitted, default to `email`.

## Workflow

1. **Gather prospect context**:
   - Check if `/research-prospect` was run recently for this prospect in the conversation
   - If yes: Use that research as the foundation
   - If no: Ask the user for key context:
     - What does the prospect's company do?
     - What is the prospect's role?
     - What pain points or triggers are you targeting?
     - What is your product/solution?

2. **Check for user settings**: Look for configured product value props, target personas, and company info in local settings. If not configured, ask:
   > "I don't have your product value props configured. What are the 2-3 key benefits of your product for someone in [prospect's role]?"

3. **Generate outreach based on channel**:

### Email
Generate 3 variations with different angles:

**Variation 1 — Pain-point-led**: Lead with a specific challenge the prospect likely faces based on research.

**Variation 2 — Value-led**: Lead with a relevant outcome or result your product delivers.

**Variation 3 — Trigger-event-led**: Lead with a recent event at their company (news, hiring, product launch) and connect it to your value.

Each email should include:
- Subject line (under 50 characters, no spam trigger words)
- Opening line that references something specific about them (NOT generic)
- 2-3 sentences of relevant value connection
- Clear, low-friction call to action
- Professional signature

### LinkedIn
Generate 2 variations:
- **Connection request message** (under 300 characters): Brief, personalized, references shared context
- **InMail** (if no connection): Slightly longer, includes a hook and clear ask

### Call Script
Generate a cold call framework:
- **Opening** (10 seconds): Name, company, permission-based opener
- **Hook** (15 seconds): Relevant trigger or pain point
- **Qualify**: 2-3 discovery questions to confirm fit
- **Value statement**: One concise sentence on what you do
- **Ask**: Specific next step (meeting, intro to colleague, send info)
- **Objection responses**: Top 3 likely objections with responses

4. **Personalization quality check**: Verify each draft references at least one specific detail about the prospect — their company, role, recent news, or industry challenge. Flag any draft that feels generic.

5. **Offer next steps**:
   - If Gmail is connected: "Would you like me to create an email draft to [prospect]?"
   - "Would you like me to adjust the tone or try a different angle?"
   - "Would you like me to generate follow-up messages for a sequence?"

## Follow-Up Sequence

If the user asks for a follow-up sequence, generate 3-4 follow-up messages spaced according to configured cadence (default: Day 3, Day 7, Day 14):

- **Follow-up 1** (Day 3): Brief bump, add new value (share a relevant resource)
- **Follow-up 2** (Day 7): Different angle or pain point, new subject line
- **Follow-up 3** (Day 14): Break-up email — acknowledge they're busy, leave the door open
