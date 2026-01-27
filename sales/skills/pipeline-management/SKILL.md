# Pipeline Management

Framework for managing deal stages, scoring pipeline health, forecasting, and maintaining pipeline hygiene.

## Deal Stage Definitions

These are standard B2B SaaS deal stages. Adapt to your organization's specific stage names and criteria.

### Stage 1: Prospecting / Lead
- **Definition**: Initial contact identified but no meaningful engagement yet
- **Entry criteria**: Lead generated from inbound, outbound, referral, or marketing
- **Expected activities**: Research prospect, initial outreach, attempt first conversation
- **Exit criteria**: First meaningful conversation held — prospect acknowledged a potential need
- **Expected time in stage**: 1-2 weeks
- **Probability**: 10%

### Stage 2: Qualification / Discovery
- **Definition**: Active conversation happening, assessing mutual fit
- **Entry criteria**: Prospect engaged in conversation about their needs
- **Expected activities**: Discovery calls, BANT qualification, identify stakeholders, understand decision process
- **Exit criteria**: Confirmed BANT criteria (at least 3 of 4), identified key stakeholders, agreed on next evaluation step
- **Expected time in stage**: 1-3 weeks
- **Probability**: 20%

### Stage 3: Needs Analysis / Demo
- **Definition**: Prospect actively evaluating your solution against their requirements
- **Entry criteria**: Qualified opportunity, stakeholders identified, evaluation underway
- **Expected activities**: Product demos, technical deep-dives, requirements gathering, POC/trial if applicable
- **Exit criteria**: Prospect confirms your solution meets their needs, moves to commercial discussion
- **Expected time in stage**: 2-4 weeks
- **Probability**: 40%

### Stage 4: Proposal / Pricing
- **Definition**: Commercial terms being discussed, formal proposal delivered
- **Entry criteria**: Technical/functional fit confirmed, budget discussion initiated
- **Expected activities**: Deliver proposal, negotiate pricing, handle commercial objections, engage procurement
- **Exit criteria**: Prospect accepts pricing framework, moves to contract/legal review
- **Expected time in stage**: 1-3 weeks
- **Probability**: 60%

### Stage 5: Negotiation / Contract
- **Definition**: Legal and contract terms being finalized
- **Entry criteria**: Pricing agreed in principle, legal/procurement engaged
- **Expected activities**: Redline contract, negotiate terms, security review, handle legal objections
- **Exit criteria**: Contract ready for signature
- **Expected time in stage**: 1-4 weeks
- **Probability**: 80%

### Stage 6: Closed Won
- **Definition**: Deal signed and booked
- **Entry criteria**: Contract fully executed
- **Post-close activities**: Hand off to implementation/CS, schedule kickoff, send welcome materials

### Stage 7: Closed Lost
- **Definition**: Prospect decided not to proceed
- **Required data**: Loss reason, competitor won (if applicable), key learnings
- **Post-loss activities**: Send gracious note, set reminder for future re-engagement, log competitive intel

## Health Scoring

Score each deal on these dimensions to assess overall health:

### Activity Recency
| Last Activity | Score | Status |
|---|---|---|
| Within 3 days | 5 | Healthy |
| 4-7 days | 4 | Normal |
| 8-14 days | 3 | Cooling |
| 15-30 days | 2 | At risk |
| 30+ days | 1 | Stale — needs immediate attention |

### Stakeholder Engagement
| Engagement Level | Score | Status |
|---|---|---|
| 3+ stakeholders engaged, champion identified | 5 | Strong |
| 2 stakeholders, one is a champion | 4 | Good |
| 2 stakeholders, no clear champion | 3 | Moderate risk |
| Single-threaded (one contact only) | 2 | High risk |
| Contact has gone dark | 1 | Critical risk |

### Competitive Risk
| Competitive Situation | Score | Status |
|---|---|---|
| No competition, sole vendor | 5 | Low risk |
| Competition present, you're preferred | 4 | Manageable |
| Active bake-off, unclear position | 3 | Moderate risk |
| Competitor is incumbent or preferred | 2 | High risk |
| Prospect leaning toward competitor | 1 | Critical — needs executive engagement |

### Process Adherence
| Process Status | Score | Status |
|---|---|---|
| All stage criteria met, clear next steps | 5 | On track |
| Most criteria met, next steps defined | 4 | Good |
| Some criteria skipped, next steps vague | 3 | Needs attention |
| Stages skipped, no clear process | 2 | At risk |
| No defined process, winging it | 1 | High risk |

### Overall Health
- **20-16**: Healthy — maintain momentum
- **15-12**: Good — address any weak areas
- **11-8**: At risk — create action plan immediately
- **7-4**: Critical — escalate, consider downstaging or disqualifying

## Forecasting Methodology

### Category Definitions
- **Closed Won**: Fully executed contracts in the period
- **Commit**: Deals you would stake your reputation on closing this period (80%+ probability, clear close plan, no major obstacles)
- **Upside / Best Case**: Deals that could close with favorable conditions (40-79% probability, some unknowns remain)
- **Pipeline**: Early-stage deals unlikely to close this period but in play for next (<40% probability)

### Weighted Forecast Calculation
```
Weighted Amount = Deal Amount × Stage Probability
```

Apply stage-based probabilities (see Deal Stage Definitions above), then adjust for deal-specific factors:
- Increase weight if: Strong champion, no competition, approved budget, urgent timeline
- Decrease weight if: No champion, active competition, no budget approval, vague timeline

### Forecast Accuracy Tracking
Track these metrics over time to calibrate your forecast:
- Commit-to-close rate: What % of commit deals actually close on time?
- Upside conversion rate: What % of upside deals close in the period?
- Stage conversion rates: What % of deals in each stage eventually close?
- Average sales cycle length: How long from creation to close?

Use historical rates to improve forecast accuracy rather than relying solely on stage probabilities.

## Pipeline Hygiene

### Weekly Hygiene Checks
Run these checks weekly to keep your pipeline accurate:

1. **Close date accuracy**: Any deals with close dates in the past? Either close them, push the date, or mark them lost.
2. **Stage accuracy**: Any deals sitting in a stage longer than expected? Validate they still belong there.
3. **Next steps defined**: Every deal should have a clear, dated next step. No exceptions.
4. **Stale deals**: Any deals with no activity in 14+ days? Either re-engage or remove.
5. **Amount accuracy**: Have any deal sizes changed based on new information? Update them.
6. **Contact coverage**: Any deals with only one contact? Identify additional stakeholders.
7. **Loss recording**: Any deals you know are lost but haven't updated? Mark them closed-lost with a reason.

### Monthly Pipeline Review
Once a month, do a deeper review:
- Review all deals over 2x your average sales cycle length
- Validate all deals in commit category still deserve that designation
- Assess pipeline coverage ratio (typically want 3-4x coverage of target)
- Identify pipeline generation gaps for future periods
- Review win/loss trends for patterns

### Pipeline Creation Targets
To maintain healthy coverage:
```
Monthly pipeline creation needed = (Quarterly target / Win rate) / 3
```

Example: If quarterly target is $500K and win rate is 25%, you need $500K / 0.25 / 3 = ~$667K in new pipeline per month.
