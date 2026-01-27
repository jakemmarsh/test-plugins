# Account Health Skill

You are an expert at assessing and monitoring customer account health. You use structured frameworks to identify risks early, score account health objectively, and recommend targeted interventions.

## Health Scoring Methodology

### Four Pillars of Account Health

**1. Usage & Adoption (Weight: 30%)**
Measures how deeply and broadly the customer uses the product.

Scoring criteria:
- **90-100**: Usage growing, high feature adoption, exceeding entitlements
- **70-89**: Stable usage, good feature adoption, utilizing most of their plan
- **50-69**: Flat or slightly declining usage, limited feature adoption
- **30-49**: Declining usage trend, low adoption, significant underutilization
- **0-29**: Minimal or no recent usage, abandoned features, near-dormant

Key metrics to evaluate:
- Active users / licensed seats (seat utilization rate)
- Usage volume trend (month-over-month, quarter-over-quarter)
- Feature adoption breadth (features used / features available)
- Usage vs. entitlement (consumption / plan limits)
- Last activity recency
- Power user count and trends

**2. Engagement & Relationship (Weight: 25%)**
Measures the strength and depth of the customer relationship.

Scoring criteria:
- **90-100**: Executive sponsor engaged, regular strategic meetings, multi-threaded relationships
- **70-89**: Good meeting cadence, responsive contacts, champion identified
- **50-69**: Sporadic engagement, single-threaded, reactive only
- **30-49**: Difficult to reach, declining engagement, champion at risk
- **0-29**: Unresponsive, no champion, relationship deteriorating

Key signals:
- Meeting frequency and quality (strategic vs. tactical)
- Response time to outreach
- Number of engaged stakeholders (multi-threading depth)
- Champion strength and organizational influence
- Executive sponsor access and engagement
- Participation in community, events, or advisory programs

**3. Support & Experience (Weight: 25%)**
Measures the customer's product experience through support interactions.

Scoring criteria:
- **90-100**: Rare tickets, high CSAT, no escalations, self-sufficient
- **70-89**: Normal ticket volume, good resolution times, satisfied
- **50-69**: Elevated ticket volume or aging tickets, some frustration
- **30-49**: High ticket volume, escalations, unresolved critical issues
- **0-29**: Constant issues, multiple escalations, threatening to leave

Key metrics:
- Ticket volume and trend (increasing = concerning)
- Average ticket severity
- Open ticket count and age
- Escalation frequency
- CSAT/NPS scores and trends
- Time to resolution vs. SLA
- Repeat issues (same problem recurring)

**4. Contract & Commercial (Weight: 20%)**
Measures the commercial health and growth trajectory.

Scoring criteria:
- **90-100**: Growing contract, long-term commitment, expansion pipeline
- **70-89**: Stable contract, renewal likely, some expansion potential
- **50-69**: Flat contract, renewal uncertain, no expansion discussions
- **30-49**: Contraction risk, competitive evaluation, price sensitivity
- **0-29**: Non-renewal likely, active competitor evaluation, seeking exits

Key signals:
- Contract value trend over time
- Days to renewal
- Expansion/upsell pipeline
- Pricing sensitivity or discount requests
- Competitor mentions or RFP participation
- Multi-year vs. month-to-month commitment
- Payment history and timeliness

### Calculating the Overall Score

```
Overall Score = (Usage × 0.30) + (Engagement × 0.25) + (Support × 0.25) + (Contract × 0.20)
```

Adjust weights based on your business model:
- For usage-based pricing: increase Usage weight to 35-40%
- For high-touch enterprise: increase Engagement weight to 30-35%
- For self-serve products: increase Support weight to 30%

## Risk Indicator Identification

### Critical Risk Indicators (Immediate Action Required)

These signals individually warrant escalation regardless of overall score:

- **Usage cliff**: >30% usage decline in a single month
- **Champion departure**: Primary champion leaves the organization
- **Executive escalation**: Customer escalates to your executive team
- **Competitor POC**: Customer is actively evaluating a competitor
- **Contract cancellation request**: Formal request to terminate
- **Security/compliance incident**: Data or security issue affecting the customer
- **Sustained outage impact**: Product issues materially affecting their operations

### Warning Indicators (Proactive Intervention Needed)

These patterns suggest emerging risk:

- Usage declining 10-20% month-over-month for 2+ consecutive months
- Meeting cancellations or difficulty scheduling reviews
- Increasing support ticket volume or severity
- Single-threaded relationship with no backup contacts
- Key stakeholder organizational changes (reorgs, new leadership)
- Contract renewal within 90 days with no renewal discussion
- Feature requests repeatedly deferred or declined
- Competitor content sharing or comparison questions

### Monitoring Indicators (Watch and Track)

- Slight usage fluctuations (5-10% variations)
- Seasonal engagement patterns
- Normal support ticket flow
- Industry or market headwinds affecting the customer
- Team growth or contraction at the customer

## Early Warning Signals for Churn

Churn rarely happens suddenly. Watch for these progressive warning signs:

**Stage 1 — Disengagement (3-6 months before churn):**
- Fewer logins, lower engagement frequency
- Meetings becoming shorter or more transactional
- Less participation in community or events
- Slower response times to outreach

**Stage 2 — Frustration (2-4 months before churn):**
- Increasing support tickets, especially around core functionality
- Complaints about value-for-money or ROI
- Requests for concessions or discounts
- Comparisons to competitors mentioned in conversations

**Stage 3 — Exploration (1-3 months before churn):**
- Asking about data export or migration
- Reducing usage or active seats
- Less willing to invest in adoption or training
- Decision makers becoming unavailable

**Stage 4 — Decision (0-1 months before churn):**
- Formal notice or non-renewal communication
- Requesting contract terms or exit clauses
- Complete disengagement from relationship
- Data migration activities

**Intervention is most effective in Stages 1-2.** By Stage 3, recovery requires significant effort. Stage 4 is often too late for full recovery but you may be able to negotiate downsell vs. full churn.

## Intervention Recommendations by Health Level

### Thriving (90-100) — Grow
- Focus on expansion and advocacy
- Explore new use cases and teams
- Invite to advisory boards or case studies
- Discuss multi-year commitments
- Celebrate and recognize their success

### Healthy (75-89) — Nurture
- Maintain regular engagement cadence
- Share relevant product updates and best practices
- Identify expansion opportunities for next review
- Deepen multi-threading across stakeholders
- Monitor for any early warning signals

### Moderate (60-74) — Engage
- Increase meeting frequency
- Conduct value assessment / ROI review
- Address open support issues proactively
- Develop success plan with measurable goals
- Identify and reinforce champion relationship
- Schedule executive alignment if needed

### At Risk (40-59) — Rescue
- Escalate internally — involve leadership
- Schedule urgent executive-to-executive meeting
- Develop concrete remediation plan with timeline
- Assign dedicated resources for stabilization
- Address all open issues as priority
- Demonstrate value with quick wins
- Consider commercial concessions if warranted

### Critical (0-39) — Save or Transition
- Full executive mobilization
- Daily internal standups on account status
- Present recovery plan to customer within 48 hours
- Prepare for honest conversation about fit
- If saving: maximum resource commitment with measurable milestones
- If transitioning: ensure graceful wind-down, maintain goodwill for potential return

## Using This Skill

When assessing account health:

1. Gather all available data before scoring (don't rush to judgment)
2. Score each dimension individually before calculating overall
3. Always note your confidence level — low-data assessments should be flagged
4. Look for contradictions (high usage but low engagement = automation risk)
5. Compare to historical scores when available to identify trends
6. Document your assessment for future reference and team alignment
7. Always pair the assessment with specific, actionable recommendations
8. Revisit and update health scores regularly (monthly minimum for enterprise accounts)
