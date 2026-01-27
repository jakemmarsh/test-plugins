# Call Follow-Up

Framework for processing sales calls and executing post-call workflows efficiently.

## Post-Call Workflow

After every sales call, execute these steps in order:

### 1. Extract Action Items

Parse call notes or transcript to identify:

**Our action items** (things we committed to doing):
- What was promised?
- Who on our team owns it?
- What is the deadline (explicit or implied)?
- Priority: Is this blocking the deal from progressing?

**Their action items** (things the prospect/customer committed to):
- What did they agree to do?
- Who specifically committed?
- What is the expected timeline?
- Is there a way to hold them accountable without being pushy?

**Shared action items** (things to do together):
- Meetings to schedule
- Documents to co-create
- Introductions to facilitate

### Identifying Action Items in Unstructured Notes

Look for these signals in notes/transcripts:
- Direct commitments: "I'll send you...", "We'll have that by...", "Let me loop in..."
- Requests: "Can you send...", "Would you be able to...", "We'd need to see..."
- Agreements: "That works", "Let's plan on...", "We can do that"
- Timeline mentions: "By end of week", "Next Tuesday", "Before our next call"
- Conditional commitments: "If you can show us X, we'll do Y" — track both sides

### 2. Draft Follow-Up Email

Every sales call should be followed by an email within 2-4 hours. The email should:

**Structure**:
1. **Thank you** (1 sentence): Brief, genuine, reference something specific from the call
2. **Summary of key points** (3-5 bullets): What was discussed, from the customer's perspective. Don't include internal notes or strategy. Focus on what matters to them.
3. **Action items with owners and dates**: Clear table or list of who is doing what by when. Include both sides' commitments.
4. **Next steps**: Confirm the next meeting or milestone. If not scheduled, propose specific times.
5. **Resources** (optional): Attach or link anything discussed — case studies, technical docs, pricing proposals.

**Tone guidelines**:
- Professional but warm — match the tone of the call
- Concise — the email should take 60 seconds to read
- Customer-centric — frame everything in terms of their goals, not your sales process
- Confident but not presumptuous — "Looking forward to next steps" not "Looking forward to closing this deal"

**What NOT to include in the customer-facing email**:
- Internal deal strategy or next actions for your team
- Competitive positioning or objection-handling notes
- Probability assessments or forecast categorization
- Anything that would be awkward if forwarded internally at the customer's company

### 3. Internal Summary

Separate from the customer email, create an internal summary for your team and CRM:

**Include**:
- Call date, attendees, duration
- Call type (discovery, demo, negotiation, check-in, etc.)
- Key takeaways (3-5 points)
- New information learned (pain points, timeline, budget, decision process)
- Objections raised and how they were handled
- Competitive intel gathered
- Deal stage recommendation (should it move forward, stay, or go backward?)
- Risk flags (single-threaded, vague timeline, budget uncertainty, etc.)
- Next steps with dates

### 4. CRM Updates

After the call, update these CRM fields (if CRM is connected):

| Field | Update |
|---|---|
| **Last activity** | Log the call with date and brief summary |
| **Next step** | Set the specific next action with date |
| **Stage** | Move forward if exit criteria met, move back if new concerns emerged |
| **Close date** | Adjust if timeline shifted during the call |
| **Amount** | Update if deal size changed based on discussion |
| **Contacts** | Add any new contacts mentioned or introduced |
| **Notes** | Add internal summary to account/opportunity notes |
| **Tasks** | Create follow-up tasks for action items with due dates |

If CRM is not connected:
> "Connect a CRM MCP server to update your opportunity records automatically after calls."

### 5. Research Open Questions

Often a call surfaces questions you couldn't answer in the moment:
- Technical questions that need engineering input
- Case studies or references for their specific industry/use case
- Pricing or packaging questions that need approval
- Competitive comparisons they asked about
- Integration or compatibility questions

For each open question:
1. Note who asked it and why it matters to the deal
2. Identify who internally can answer it
3. Set a deadline to get the answer (before next interaction)
4. Plan how to deliver the answer (email, next call, document)

## Follow-Up Timing

| Call Type | Follow-Up Timing | Priority |
|---|---|---|
| Discovery call | Same day, within 2-4 hours | High — sets the tone |
| Demo / presentation | Same day or next morning | High — they're evaluating |
| Negotiation | Same day, within 2 hours | Critical — momentum matters |
| Check-in / QBR | Within 24 hours | Medium |
| Internal debrief | Immediately after call | Internal only |

## Handling Missed Follow-Ups

If a follow-up wasn't sent on time:
- **1 day late**: Send it with no acknowledgment of the delay. Just send it.
- **2-3 days late**: Brief acknowledgment: "Apologies for the delayed follow-up — wanted to make sure I captured everything accurately."
- **4+ days late**: Consider calling instead. A late email looks unprofessional. Call, reference the conversation, and confirm next steps verbally. Then follow up in writing.

## Templates to Avoid

Never use these in follow-up emails:
- "Per our conversation..." (stiff and formal)
- "Just circling back..." (overused and vague)
- "Hope this finds you well..." (filler)
- "Please find attached..." (robotic)
- "Don't hesitate to reach out..." (cliche)

Instead, be direct and specific:
- "Great discussion today about [specific topic]..."
- "Following up on the [integration/pricing/timeline] question you raised..."
- "Here's the [resource] we discussed..."
- "Confirming our next steps from today's call..."
