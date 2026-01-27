# Analyze

Analyze customer data to answer questions about usage, adoption, health, and trends. Works with connected analytics sources or user-provided data.

## Usage

```
/analyze <question about customer metrics>
```

Examples:
- `/analyze Which accounts have declining usage this month?`
- `/analyze What's the adoption rate for Acme Corp's team?`
- `/analyze Show me support ticket trends across my portfolio`
- `/analyze Which customers are at risk of churning?`

## Workflow

### 1. Parse the Analysis Question

Identify what the user is asking about:

- **Usage metrics**: API calls, logins, feature usage, consumption volumes
- **Adoption metrics**: active users vs. seats, feature adoption, onboarding completion
- **Health metrics**: health scores, engagement frequency, support patterns
- **Trend analysis**: changes over time, comparisons across periods
- **Portfolio analysis**: cross-account patterns, segment comparisons
- **Risk analysis**: churn indicators, declining engagement, support escalations

### 2. Identify Data Sources

**If data warehouse / analytics tool is connected:**
- Determine what tables or dashboards are relevant
- Formulate appropriate queries
- Pull the data directly

**If CRM is connected:**
- Pull relevant account and opportunity data
- Check for health scores, activity logs, and pipeline data

**If support ticketing is connected:**
- Pull ticket volumes, categories, resolution times
- Identify patterns across accounts or time periods

**If no analytics sources are connected:**
- Ask the user to provide data:
  - "Can you paste the usage metrics you'd like me to analyze?"
  - "Do you have a spreadsheet or CSV with this data? You can share it."
  - "Can you share a screenshot of your analytics dashboard?"
  - "What metrics do you have access to? I can work with what you have."
- Offer to work with whatever format they can provide (tables, CSVs, screenshots, verbal descriptions)

### 3. Perform the Analysis

Based on the data available, provide:

**Quantitative Analysis:**
```
## Analysis: [Question]

### Summary
[Direct answer to the question — bottom line up front]

### Key Metrics
| Metric | Value | Period | Trend |
|--------|-------|--------|-------|
| [Metric] | [Value] | [Period] | [↑/↓/→ %] |

### Findings
1. **[Finding]** — [Supporting data and context]
2. **[Finding]** — [Supporting data and context]
3. **[Finding]** — [Supporting data and context]

### Visualizations
[Where helpful, present data visually:]
- Bar charts for comparisons across accounts or categories
- Line charts for trends over time
- Tables for detailed breakdowns
- Heatmaps for portfolio-level views

### Drivers & Root Causes
- [What's driving the patterns observed]
- [Contributing factors]
- [Correlations worth noting]

### Recommendations
1. [Action based on findings]
2. [Action based on findings]
3. [Action based on findings]

### Data Sources & Caveats
- Data from: [sources used]
- Time period: [period analyzed]
- Caveats: [any limitations or gaps in the data]
```

### 4. Common Analysis Patterns

**Usage trend analysis:**
- Compare current period to prior period (week-over-week, month-over-month, quarter-over-quarter)
- Identify inflection points and their timing
- Correlate usage changes with known events (launches, incidents, holidays)

**Adoption analysis:**
- Active users / total licensed seats = seat utilization
- Features used / total features available = feature adoption breadth
- Frequency of use = engagement depth
- Time to first value = onboarding effectiveness

**Health scoring:**
- Combine usage, support, engagement, and contract signals
- Weight factors by their predictive value for your business
- Compare to healthy benchmarks from your portfolio

**Churn risk identification:**
- Declining usage trend (especially >20% month-over-month)
- Increasing support ticket volume or severity
- Decreasing stakeholder engagement
- Contract renewal approaching with unresolved issues
- Champion departure or organizational changes

**Expansion signals:**
- Usage approaching or exceeding plan limits
- New teams or use cases emerging
- Requests for additional features or capabilities
- Positive ROI metrics that support business case for expansion

### 5. Iterative Analysis

After presenting initial findings:
- "Want me to dig deeper into any of these findings?"
- "Should I break this down by [segment/team/time period]?"
- "Want me to run this same analysis for other accounts?"
- "Should I set up a recurring analysis cadence for this metric?"
- "Want me to draft a summary to share with your team or leadership?"
