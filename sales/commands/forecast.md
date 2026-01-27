# /forecast

Generate a weighted sales forecast from pipeline data with risk analysis.

## Usage

```
/forecast
```

Optional flags:
- `/forecast this-quarter` — Current quarter forecast (default)
- `/forecast next-quarter` — Next quarter projection
- `/forecast this-year` — Full year view

## Workflow

1. **Get pipeline data**:

   **If CRM is connected**:
   - Pull all open opportunities with close dates in the target period
   - For each deal: name, account, amount, stage, close date, last activity, days in stage, next step, owner
   - Also pull: closed-won deals in the period (for actuals), recently lost deals (for context)

   **If CRM is NOT connected**:
   > "Connect a CRM MCP server to generate forecasts automatically. Or describe your pipeline — list your deals with amount, stage, and expected close date — and I'll help you forecast."

   Wait for user input, then parse into structured format.

2. **Check for quota/target**:
   - Look for configured quota in local settings
   - If not configured, ask: "What is your target for [period]?"

3. **Apply stage-based probability weighting**:

   Use these default weights (or user-configured weights if available):

   | Stage | Default Probability |
   |---|---|
   | Prospecting / Lead | 10% |
   | Qualification / Discovery | 20% |
   | Needs Analysis / Demo | 40% |
   | Proposal / Pricing | 60% |
   | Negotiation / Contract | 80% |
   | Verbal Commit / Closed-Pending | 90% |
   | Closed Won | 100% |

   Let the user know these are defaults:
   > "Using default stage probabilities. Adjust these in your local settings to match your actual conversion rates."

4. **Generate forecast**:

## Output Format

```
## Sales Forecast — [Period]

### Summary
| Metric | Value |
|---|---|
| **Target** | $[quota] |
| **Closed won (actuals)** | $[amount] |
| **Committed (80%+ probability)** | $[amount] |
| **Best case (40%+ probability)** | $[amount] |
| **Weighted pipeline total** | $[amount] |
| **Gap to target (from committed)** | $[amount] |

### Forecast by Category
| Category | Deals | Unweighted | Weighted |
|---|---|---|---|
| **Closed Won** | [n] | $[amount] | $[amount] |
| **Commit** (80%+) | [n] | $[amount] | $[amount] |
| **Upside** (40-79%) | [n] | $[amount] | $[amount] |
| **Pipeline** (<40%) | [n] | $[amount] | $[amount] |
| **Total** | [n] | $[amount] | $[amount] |

### Commit Deals (High Confidence)
| Deal | Account | Amount | Stage | Close Date | Risk |
|---|---|---|---|---|---|
| [name] | [account] | $[amount] | [stage] | [date] | [flag] |

### Upside Deals (Moderate Confidence)
| Deal | Account | Amount | Stage | Close Date | Risk |
|---|---|---|---|---|---|
| [name] | [account] | $[amount] | [stage] | [date] | [flag] |

### Deals Needing Attention
[List deals with risk flags — see below]
```

5. **Risk analysis**: Flag deals with issues:
   - **Overdue**: Close date is in the past
   - **Stale**: No activity in 14+ days
   - **No next step**: Missing defined next action
   - **Pushed**: Close date moved out 2+ times
   - **Stuck**: In current stage longer than average for that stage
   - **Single-threaded**: Only one contact engaged (if data available)

   For each flagged deal, suggest a specific action.

6. **Forecast commentary**:
   - Are you on track to hit target? By how much over/under?
   - What percentage of target is covered by commit deals?
   - How much upside needs to convert to close the gap?
   - What pipeline generation is needed if upside falls short?
   - Historical context if available: what % of upside typically converts?

7. **Offer next steps**:
   - "Would you like me to drill into any specific deals?"
   - "Would you like me to run call-prep for your commit deals?"
   - "Would you like me to draft re-engagement outreach for stale deals?"
   - "Would you like me to review pipeline generation sources?"
