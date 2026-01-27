# Write Spec

Write a feature specification or product requirements document (PRD).

## Trigger

The user wants to write a feature spec, PRD, product requirements document, or spec out a feature or product idea.

## Workflow

### 1. Understand the Feature

Ask the user what they want to spec. Accept any of:
- A feature name ("SSO support")
- A problem statement ("Enterprise customers keep asking for centralized auth")
- A user request ("Users want to export their data as CSV")
- A vague idea ("We should do something about onboarding drop-off")

### 2. Gather Context

Ask the user for the following. Be conversational — do not dump all questions at once. Ask the most important ones first and fill in gaps as you go:

- **User problem**: What problem does this solve? Who experiences it?
- **Target users**: Which user segment(s) does this serve?
- **Success metrics**: How will we know this worked?
- **Constraints**: Technical constraints, timeline, regulatory requirements, dependencies
- **Prior art**: Has this been attempted before? Are there existing solutions?

### 3. Pull Context from Connected Tools

If a **project management tool** is connected (Asana, Linear, Jira):
- Search for related tickets, epics, or features
- Pull in any existing requirements or acceptance criteria
- Identify dependencies on other work items

If a **docs tool** is connected (Google Drive, Notion, Confluence):
- Search for related research documents, prior specs, or design docs
- Pull in relevant user research findings
- Find related meeting notes or decision records

If these tools are not connected, work entirely from what the user provides. Do not ask the user to connect tools — just proceed with available information.

### 4. Generate the PRD

Produce a structured PRD with these sections:

#### Problem Statement
2-3 sentences describing the user problem and why it matters now. Include who is affected and the impact of not solving it.

#### Goals
3-5 specific, measurable goals for this feature. Each goal should be tied to a user outcome or business metric.

#### Non-Goals
Explicitly state what this feature will NOT do. This is critical for scope management. List 3-5 things that are adjacent but out of scope, and briefly explain why.

#### User Stories
Write user stories in standard format:
- "As a [user type], I want [capability] so that [benefit]"
- Group by user type if multiple personas are involved
- Include edge cases and error states as stories

#### Requirements

**Must-Have (P0)**
Requirements that are essential for launch. The feature is not shippable without these.

**Nice-to-Have (P1)**
Requirements that significantly improve the feature but can ship without.

**Future Considerations (P2)**
Things we explicitly want to support later but are out of scope for v1.

For each requirement, include:
- Clear description of the behavior
- Acceptance criteria (Given/When/Then or checklist format)

#### Success Metrics
Define how success will be measured:
- **Leading indicators**: Metrics that change quickly after launch (adoption rate, activation, task completion)
- **Lagging indicators**: Metrics that take time to move (retention impact, revenue impact, NPS change)
- Include specific targets where possible ("50% of enterprise accounts using SSO within 3 months")

#### Open Questions
List unresolved questions that need answers before or during implementation. Tag each with who needs to answer it (engineering, design, legal, data, etc.).

#### Timeline Considerations
High-level phasing if applicable. Note any hard deadlines, dependencies on other teams, or sequencing constraints.

### 5. Review and Iterate

After generating the PRD:
- Ask the user if any sections need adjustment
- Offer to expand on specific sections
- Offer to create follow-up artifacts (design brief, engineering ticket breakdown, stakeholder pitch)

## Output Format

Use markdown with clear headers. Keep the document scannable — busy stakeholders should be able to read just the headers and bold text to get the gist.

## Tips

- Be opinionated about scope. It is better to have a tight, well-defined spec than an expansive vague one.
- If the user's idea is too big for one spec, suggest breaking it into phases and spec the first phase.
- Success metrics should be specific and measurable, not vague ("improve user experience").
- Non-goals are as important as goals. They prevent scope creep during implementation.
- Open questions should be genuinely open — do not include questions you can answer from context.
