# QBR Prep

Prepare comprehensive content and strategy for a Quarterly Business Review with a customer. Generates structured QBR materials from available data sources.

## Usage

```
/qbr-prep <customer_name> [, <qbr_date>]
```

If the QBR date is not provided, assume it is within the next 2-4 weeks.

## Workflow

### 1. Gather QBR Inputs

Collect data from all available sources:

**CRM (if connected):**
- Contract details: plan, ARR, contract dates, renewal timeline
- Account history: expansions, upsells, downgrades
- Key contacts and stakeholders
- Account health scores and flags
- Opportunity pipeline (expansions, renewals)

**Usage/Analytics (if connected):**
- Usage metrics for the current quarter and prior quarter
- Adoption trends: active users, feature utilization, engagement
- Usage vs. entitlement (are they using what they're paying for?)
- Growth metrics: new users, new use cases, increased consumption
- Any usage milestones hit during the quarter

**Support (if connected):**
- Ticket volume and trends for the quarter
- Open issues and their status
- Resolution times and CSAT scores
- Any escalations or critical incidents
- Feature requests submitted

**Email & Calendar:**
- Meeting history during the quarter
- Key discussion topics and decisions
- Outstanding action items from previous meetings
- Previous QBR notes if available

**Slack:**
- Internal team discussions about this account
- Any risks, wins, or concerns flagged
- Cross-functional updates (product, engineering, support)

**Documents (Google Drive):**
- Previous QBR decks or notes
- Account/success plans
- Shared project plans or implementation docs

### 2. Generate QBR Content

Produce structured QBR materials:

```
## QBR Preparation: [Customer Name]
**QBR Date:** [date]
**Prepared:** [today's date]
**Account Team:** [names if known]

---

### Executive Summary
[2-3 paragraph summary: relationship health, quarter highlights,
key themes for discussion, strategic recommendation]

---

### Account Overview
- **Plan/Tier:** [details]
- **Contract Value:** [ARR]
- **Contract Period:** [start] — [end]
- **Renewal Date:** [date] ([X days/months away])
- **Health Score:** [score] ([trend vs. last quarter])

---

### Quarter in Review

#### Usage & Adoption
| Metric | Last Quarter | This Quarter | Change |
|--------|-------------|--------------|--------|
| [Metric 1] | [value] | [value] | [+/-] |
| [Metric 2] | [value] | [value] | [+/-] |
| [Metric 3] | [value] | [value] | [+/-] |

**Key Trends:**
- [Trend 1 with context]
- [Trend 2 with context]

#### Value Delivered
- [Specific value outcome 1 with metric if possible]
- [Specific value outcome 2 with metric if possible]
- [Specific value outcome 3 with metric if possible]

#### Support & Engagement
- Tickets: [count] ([trend])
- Avg Resolution Time: [time]
- CSAT: [score]
- Meetings: [count] during quarter
- Key Topics Discussed: [topics]

---

### Wins & Milestones
1. [Win/milestone with impact]
2. [Win/milestone with impact]
3. [Win/milestone with impact]

### Challenges & Issues
1. [Challenge with current status and plan]
2. [Challenge with current status and plan]

---

### Recommendations
1. **[Recommendation]** — [Rationale and expected impact]
2. **[Recommendation]** — [Rationale and expected impact]
3. **[Recommendation]** — [Rationale and expected impact]

---

### Renewal / Expansion Strategy
- **Renewal Risk Level:** [Low / Medium / High]
- **Expansion Opportunity:** [description]
- **Key Actions Before Renewal:**
  1. [Action with timeline]
  2. [Action with timeline]
  3. [Action with timeline]

---

### Discussion Agenda (Suggested)
1. [Topic] — [time allocation] — [objective]
2. [Topic] — [time allocation] — [objective]
3. [Topic] — [time allocation] — [objective]
4. [Topic] — [time allocation] — [objective]
5. Next steps and action items — 10 min

---

### Appendix: Data Points to Verify
[List any data that needs confirmation or updating before the QBR]
```

### 3. Handle Missing Data

If data sources are not connected, provide a QBR template with guidance:

- Generate the full structure above with placeholder prompts:
  - "[Enter current ARR — check your CRM]"
  - "[Pull usage metrics from your analytics dashboard]"
  - "[Review support ticket trends for the quarter]"
- Ask the user to fill in specific data points:
  - "Can you share their current usage numbers?"
  - "What's their ARR and renewal date?"
  - "Any major support issues this quarter?"
- Offer to regenerate once the user provides data
- Still populate what IS available (email history, calendar, Slack, Drive)

### 4. QBR Logistics

Offer to help with QBR logistics:
- "Want me to draft the QBR meeting invite with the agenda?"
- "Should I check if there's a QBR deck template in your Drive I should use?"
- "Want me to schedule a pre-QBR internal sync with your team?"
- "Should I draft prep notes to share with the customer's team before the meeting?"

### 5. Post-QBR

After the QBR happens, offer follow-up support:
- "Want me to draft follow-up notes and action items from the QBR?"
- "Should I update the account plan based on what was discussed?"
- "Want me to set reminders for the action items?"
