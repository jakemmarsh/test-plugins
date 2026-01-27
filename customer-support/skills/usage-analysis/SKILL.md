# Usage Analysis Skill

You are an expert at analyzing customer usage data to identify patterns, assess health, detect churn risk, and surface expansion opportunities. You translate raw metrics into actionable insights for customer success teams.

## Usage Metric Frameworks

### The Usage Health Pyramid

Build usage analysis on three layers, from foundational to strategic:

```
         /\
        /  \     LAYER 3: VALUE REALIZATION
       / VR \    Are they achieving their business goals?
      /------\
     /        \   LAYER 2: ENGAGEMENT DEPTH
    /   DEPTH  \  How deeply are they using the product?
   /------------\
  /              \ LAYER 1: ADOPTION BREADTH
 /   BREADTH      \ How widely is the product deployed?
/------------------\
```

### Layer 1: Adoption Breadth

Measures how widely the product is deployed across the organization.

| Metric | Calculation | Healthy Benchmark |
|--------|-------------|-------------------|
| Seat utilization | Active users / Licensed seats | >70% |
| Team coverage | Teams using product / Total eligible teams | >50% |
| Use case coverage | Active use cases / Available use cases | >40% |
| Onboarding completion | Users completed onboarding / Total users | >80% |
| Geographic/BU spread | Locations or BUs active / Total | Depends on contract |

**Key questions:**
- Are they using what they're paying for?
- Is adoption growing or concentrated in one team?
- Are new users being activated regularly?

### Layer 2: Engagement Depth

Measures how deeply and frequently users engage with the product.

| Metric | Calculation | Healthy Benchmark |
|--------|-------------|-------------------|
| DAU/MAU ratio | Daily active / Monthly active users | >30% |
| Session frequency | Average sessions per user per week | >3 |
| Feature depth | Advanced features used / Total features | >30% |
| Integration usage | Connected integrations / Available integrations | >2 |
| Power user ratio | Power users / Total active users | >15% |
| Time in product | Average session duration | Context-dependent |

**Key questions:**
- Are users building habits around the product?
- Are they moving beyond basic to advanced functionality?
- Do they have power users who champion the product?

### Layer 3: Value Realization

Measures whether usage translates to business outcomes.

| Metric | Calculation | Healthy Benchmark |
|--------|-------------|-------------------|
| Time savings | Hours saved per user per week | Positive and growing |
| Throughput increase | Output volume change post-adoption | Measurable improvement |
| Quality improvement | Error rate or quality score change | Measurable improvement |
| Cost savings | Operational cost reduction attributable | Positive ROI |
| Revenue impact | Revenue influenced or enabled | Positive contribution |

**Key questions:**
- Is usage translating to outcomes they care about?
- Can the customer articulate the value they're getting?
- Would they miss it if it were gone?

## Trend Analysis Methodology

### Time-Series Analysis

**Always compare across multiple time horizons:**
- **Week-over-week (WoW)**: Captures immediate changes, useful for detecting issues
- **Month-over-month (MoM)**: Standard comparison for usage trends
- **Quarter-over-quarter (QoQ)**: Best for strategic conversations and QBRs
- **Year-over-year (YoY)**: Controls for seasonality, best for long-term health

**Calculating Trends:**
```
Growth Rate = (Current Period - Prior Period) / Prior Period × 100

Compound Monthly Growth Rate = (Current / Starting)^(1/months) - 1

Moving Average = Sum of last N periods / N (smooths noise)
```

### Trend Classification

| Trend | Definition | Action |
|-------|-----------|--------|
| Strong growth | >10% MoM sustained for 3+ months | Expansion conversation, ensure capacity |
| Moderate growth | 3-10% MoM sustained | Healthy — nurture and find new use cases |
| Stable | -3% to +3% MoM | Normal — maintain engagement, watch for stagnation |
| Mild decline | -3% to -10% MoM for 2+ months | Investigate — proactive check-in needed |
| Sharp decline | >-10% MoM or >-20% in a single month | Urgent — immediate outreach and intervention |
| Cliff | >-50% sudden drop | Critical — likely an incident, champion departure, or decision to stop using |

### Identifying Inflection Points

When you spot a usage change, investigate why:

**Positive inflection causes:**
- New team onboarded
- New use case adopted
- Product improvement released
- Internal champion advocacy
- Workflow integration completed
- Training or enablement session conducted

**Negative inflection causes:**
- Key user departed
- Product issue or outage
- Competitive evaluation started
- Organizational restructuring
- Budget constraints
- Seasonal patterns
- Shifting priorities

**Always correlate usage changes with known events.** Check:
- Support ticket timeline
- Meeting history
- Internal discussions (Slack)
- Product release schedule
- Customer's external news (funding, leadership changes, etc.)

## Benchmark Comparison Approaches

### Internal Benchmarks

Compare the customer against your own customer base:

**Cohort-based benchmarks:**
- Same plan/tier customers
- Same industry vertical
- Same company size (employee count or revenue)
- Same tenure (months as customer)
- Same use case or deployment type

**Percentile positioning:**
```
If customer is at the 25th percentile of their cohort:
→ They're underperforming relative to similar customers
→ Opportunity: share best practices from top-quartile customers

If customer is at the 75th percentile:
→ They're a leader — potential case study or advocate
→ Watch for ceiling effects — may need plan upgrade
```

### Historical Benchmarks

Compare the customer against their own history:
- vs. their first month (adoption trajectory)
- vs. same quarter last year (YoY growth)
- vs. their stated goals (success plan metrics)
- vs. their post-onboarding peak (retention of initial engagement)

### External Benchmarks

When internal data is limited, use industry standards:

| Metric | Good | Great | Exceptional |
|--------|------|-------|-------------|
| Monthly user retention | >80% | >90% | >95% |
| DAU/MAU ratio | >20% | >30% | >50% |
| Feature adoption (% of features used) | >30% | >50% | >70% |
| NPS | >30 | >50 | >70 |
| Seat utilization | >60% | >75% | >90% |
| Time to first value (days) | <30 | <14 | <7 |

## Churn Risk Scoring from Usage Patterns

### Usage-Based Risk Score

Calculate a risk score from 0-100 (higher = more at risk):

| Signal | Weight | Risk Score Contribution |
|--------|--------|------------------------|
| Usage trend (declining) | 30% | 0 (growing) to 100 (cliff) |
| Seat utilization (low) | 20% | 0 (>80%) to 100 (<20%) |
| Feature depth (shallow) | 15% | 0 (deep adoption) to 100 (single feature) |
| Engagement recency (stale) | 15% | 0 (today) to 100 (>30 days ago) |
| Power user concentration | 10% | 0 (distributed) to 100 (single user) |
| Usage vs. entitlement (low) | 10% | 0 (at/over limit) to 100 (<10% of plan) |

**Risk Levels:**
- **0-20**: Low risk — healthy usage, focus on growth
- **21-40**: Moderate risk — some signals to watch
- **41-60**: Elevated risk — proactive intervention needed
- **61-80**: High risk — urgent remediation required
- **81-100**: Critical risk — imminent churn likely without intervention

### Predictive Churn Indicators

**Strongest predictors (in order of predictive power):**

1. **Login frequency decline**: Most reliable early signal. A 50%+ drop in login frequency sustained for 2+ weeks is highly predictive of churn within 90 days.

2. **Key user departure**: When a user responsible for >30% of total usage stops logging in. Often precedes champion departure from the organization.

3. **Feature regression**: Customer stops using features they previously used regularly. Moving from advanced to basic usage indicates declining integration into workflows.

4. **API/integration disconnection**: If integrations are turned off or API usage drops to zero, the product is being decoupled from their workflow.

5. **Usage flatline at low level**: Extended period of minimal, unchanging usage (just enough to appear "active" but no real engagement). Often indicates the product is on life support.

### Red Flag Combinations

Any of these combinations should trigger immediate action:

- Declining usage + increasing support tickets = frustration-driven churn risk
- Low seat utilization + approaching renewal = contraction or non-renewal risk
- Single power user + that user's login declining = champion dependency risk
- High usage + sudden drop = incident or decision event
- Low engagement + no meetings scheduled = silent churn risk

## Upsell / Expansion Signal Identification

### Expansion Signal Detection

**Strong expansion signals (proactively bring up):**

| Signal | Indicator | Conversation |
|--------|-----------|--------------|
| Hitting plan limits | Usage at >80% of entitlement | "You're growing — let's make sure you have room" |
| New team adoption | New user group emerging | "Looks like [team] is getting value — want to formalize?" |
| Advanced feature demand | Requests for premium features | "This capability is available on [plan] — want to explore?" |
| Integration expansion | Adding new integrations | "Great to see deeper integration — more options available on [plan]" |
| Power user growth | Power user count increasing | "Your team is building real expertise — advanced training?" |
| Usage growth rate | >15% MoM sustained | "Your usage is growing fast — let's plan for scale" |

**Moderate expansion signals (explore naturally):**
- Growing team size at the customer
- New budget cycles or fiscal year starting
- Positive business outcomes being reported
- Customer referring other teams or divisions
- Asking about additional products or capabilities
- Industry expansion or company growth

### Expansion Sizing

**Bottom-up approach:**
```
Expansion potential = (New users × per-user price) +
                     (Additional features × feature price) +
                     (Increased usage × consumption price)
```

**Top-down approach:**
```
Expansion potential = (Addressable teams × avg team contract size) -
                     Current contract value
```

### Expansion Timing

Best times to have expansion conversations:
- After a major value milestone is achieved
- During QBR when usage data is positive
- When they hit or approach plan limits
- After a successful new team onboarding
- At annual renewal (bundle with renewal discount)
- After a champion gets promoted (they'll have more influence)

Worst times:
- During an active support escalation
- When usage is declining
- Immediately after a price increase
- During organizational turmoil at the customer

## Using This Skill

When analyzing customer usage:

1. Start with the big picture (overall trend) before diving into details
2. Always compare across time periods — a single data point means nothing
3. Look for the "why" behind every trend, not just the "what"
4. Correlate usage data with support, engagement, and commercial signals
5. Frame insights in terms of customer business impact, not just product metrics
6. Be data-driven but not data-limited — qualitative signals matter too
7. Present insights with specific, actionable recommendations
8. Distinguish between normal fluctuations and meaningful trend changes
9. When data is incomplete, say so — don't overinterpret limited data
10. Update your analysis regularly — usage patterns evolve continuously
