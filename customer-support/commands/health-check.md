# Health Check

Assess account health for a single customer or across your portfolio. Identifies risk factors, flags accounts needing attention, and recommends interventions.

## Usage

```
/health-check [customer_name]
```

If no customer name is provided, run a portfolio-level health assessment across all known accounts.

## Workflow

### 1. Determine Scope

- **Single account**: Deep health assessment for the named customer
- **Portfolio-wide**: Scan across all accounts for health patterns and priority attention items

### 2. Gather Health Indicators

For each account, check available signals across these dimensions:

**Usage Health (if analytics connected):**
- Usage trend: growing, stable, or declining
- Usage vs. entitlement: are they using what they pay for?
- Active users vs. licensed seats
- Feature adoption breadth and depth
- Last activity recency

**Engagement Health:**
- Meeting cadence: regular, sporadic, or absent
- Email responsiveness: quick replies, delays, or silence
- Stakeholder access: do you have executive sponsors, champions?
- Event participation: webinars, user groups, conferences

**Support Health (if ticketing connected):**
- Ticket volume trend: increasing, stable, decreasing
- Open ticket age and severity
- Escalation frequency
- CSAT/NPS scores and trends
- Unresolved critical issues

**Contract Health (if CRM connected):**
- Days to renewal
- Contract value trend (growing or flat)
- Expansion pipeline
- Competitor mentions or RFP activity
- Multi-year vs. annual commitment

**Relationship Health:**
- Champion status: active, departed, weakening
- Stakeholder changes: new leadership, reorgs
- Internal sentiment from team discussions (Slack)
- Responsiveness to outreach

### 3. Calculate Health Score

Score each dimension on a 0-100 scale:

| Dimension | Weight | Score | Weighted |
|-----------|--------|-------|----------|
| Usage | 30% | [0-100] | [score] |
| Engagement | 25% | [0-100] | [score] |
| Support | 20% | [0-100] | [score] |
| Contract | 15% | [0-100] | [score] |
| Relationship | 10% | [0-100] | [score] |
| **Overall** | **100%** | | **[total]** |

**Health Levels:**
- **90-100 — Thriving**: Strong across all dimensions. Focus on expansion.
- **75-89 — Healthy**: Good shape with minor areas to monitor.
- **60-74 — Moderate**: Some concerning signals. Proactive attention needed.
- **40-59 — At Risk**: Multiple warning signs. Intervention required.
- **0-39 — Critical**: Serious risk of churn. Immediate action needed.

### 4. Generate Health Report

**Single Account:**
```
## Health Check: [Customer Name]
**Date:** [today]
**Overall Score:** [X/100] — [Level]
**Trend:** [Improving / Stable / Declining] vs. last assessment

### Dimension Scores
| Dimension | Score | Trend | Key Signal |
|-----------|-------|-------|------------|
| Usage | [score] | [↑↓→] | [one-line summary] |
| Engagement | [score] | [↑↓→] | [one-line summary] |
| Support | [score] | [↑↓→] | [one-line summary] |
| Contract | [score] | [↑↓→] | [one-line summary] |
| Relationship | [score] | [↑↓→] | [one-line summary] |

### Risk Factors
🔴 [Critical risk with detail]
⚠️ [Warning with detail]
ℹ️ [Item to monitor]

### Positive Signals
✅ [Positive indicator with detail]
✅ [Positive indicator with detail]

### Recommended Interventions
1. **[Action]** — Priority: [High/Medium/Low] — Timeline: [when]
   [Rationale and expected impact]
2. **[Action]** — Priority: [High/Medium/Low] — Timeline: [when]
   [Rationale and expected impact]
3. **[Action]** — Priority: [High/Medium/Low] — Timeline: [when]
   [Rationale and expected impact]
```

**Portfolio-Wide:**
```
## Portfolio Health Check
**Date:** [today]
**Accounts Assessed:** [count]

### Portfolio Summary
- Thriving (90-100): [count] accounts ([% of ARR])
- Healthy (75-89): [count] accounts ([% of ARR])
- Moderate (60-74): [count] accounts ([% of ARR])
- At Risk (40-59): [count] accounts ([% of ARR])
- Critical (0-39): [count] accounts ([% of ARR])

### Accounts Needing Immediate Attention
| Account | Score | Trend | Top Risk | ARR | Renewal |
|---------|-------|-------|----------|-----|---------|
| [Name] | [score] | [↓] | [risk] | [$] | [date] |

### Top Portfolio Risks
1. [Risk pattern across multiple accounts]
2. [Risk pattern across multiple accounts]

### Positive Trends
1. [Good pattern worth celebrating]
2. [Good pattern worth celebrating]

### Recommended Actions
1. [Portfolio-level action]
2. [Specific account action]
3. [Specific account action]
```

### 5. Handle Missing Data

If data sources are not available:

- Provide the health assessment framework (dimensions, weights, scoring rubric) for manual evaluation
- Ask the user to rate each dimension based on their knowledge:
  - "On a scale of 0-100, how would you rate their usage health?"
  - "Any recent changes in their engagement patterns?"
  - "What does their support history look like?"
- Calculate scores based on user-provided ratings
- Note which dimensions have low confidence due to missing data
- Recommend connecting specific data sources to improve future assessments

### 6. Follow-Up Offers

After the health check:
- "Want me to draft an outreach plan for the at-risk accounts?"
- "Should I prepare a customer snapshot for any of these accounts?"
- "Want me to schedule check-in meetings for the accounts needing attention?"
- "Should I set up a recurring health check cadence (weekly/monthly)?"
- "Want me to draft an executive summary of portfolio health for your leadership?"
