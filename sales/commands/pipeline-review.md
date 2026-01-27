# /pipeline-review

Analyze pipeline health, flag at-risk deals, and summarize coverage against targets.

## Usage

```
/pipeline-review
```

Optional flags:
- `/pipeline-review this-quarter` — Focus on current quarter close dates
- `/pipeline-review next-quarter` — Focus on next quarter
- `/pipeline-review all` — Full pipeline regardless of close date

## Workflow

1. **Get pipeline data**:

   **If CRM is connected**:
   - Pull all open opportunities owned by the user (or the user's team if specified)
   - For each opportunity, get: name, account, amount, stage, close date, next step, last activity date, days in current stage, primary contact
   - Sort by close date

   **If CRM is NOT connected**:
   > "Connect a CRM MCP server to pull your pipeline automatically. You can also paste your pipeline data (deal name, amount, stage, close date) and I'll analyze it."

   Wait for the user to paste data or provide it, then parse it into a structured format.

2. **Pipeline health analysis**:

### Coverage Summary
```
## Pipeline Summary — [Quarter/Period]

| Metric | Value |
|---|---|
| **Target** | $[quota] |
| **Committed (Stage X+)** | $[amount] |
| **Pipeline total** | $[amount] |
| **Weighted pipeline** | $[amount] |
| **Coverage ratio** | [X]x |
| **Gap to target** | $[amount] or "On track" |
```

### Stage Distribution
Show deal count and total value by stage:
```
| Stage | Deals | Total Value | Avg Deal Size | Avg Days in Stage |
|---|---|---|---|---|
| [stage] | [count] | $[total] | $[avg] | [days] |
```

### At-Risk Deals
Flag deals that match any risk criteria:

- **Stale deals**: No activity in 14+ days
- **Past close date**: Close date has passed without advancing
- **Missing next steps**: No next step defined
- **Single-threaded**: Only one contact engaged
- **Understaged**: Large deal sitting in early stage past expected timeline
- **Slipping**: Close date pushed more than once

For each at-risk deal:
```
### [Deal Name] — $[amount] — [stage]
- **Risk**: [what's wrong]
- **Last activity**: [date and what it was]
- **Recommended action**: [specific suggestion]
```

### Pipeline Movement
If historical data is available, show:
- Deals added this period
- Deals advanced (stage changes)
- Deals pushed (close date moved out)
- Deals lost

3. **Recommendations**:
   - Top 3 deals to focus on this week and why
   - Deals that should be downstaged or removed
   - Pipeline generation needed to hit target
   - Suggested next actions for each at-risk deal

4. **Offer next steps**:
   - "Would you like me to prep for any of these deals?"
   - "Would you like me to draft re-engagement outreach for stale deals?"
   - If CRM connected: "Would you like me to update any close dates or stages?"
