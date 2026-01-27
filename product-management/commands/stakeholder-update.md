# Stakeholder Update

Generate a stakeholder update tailored to the audience and cadence.

## Trigger

The user wants to write a status update, stakeholder update, weekly update, monthly report, launch announcement, or progress report.

## Workflow

### 1. Determine Update Type

Ask the user what kind of update:
- **Weekly**: Regular cadence update on progress, blockers, and next steps
- **Monthly**: Higher-level summary with trends, milestones, and strategic alignment
- **Launch**: Announcement of a feature or product launch with details and impact
- **Ad-hoc**: One-off update for a specific situation (escalation, pivot, major decision)

### 2. Determine Audience

Ask who the update is for:
- **Executives / leadership**: High-level, outcome-focused, strategic framing, brief
- **Engineering team**: Technical detail, implementation context, blockers, decisions needed
- **Cross-functional partners**: Context-appropriate detail, focus on shared goals and dependencies
- **Customers / external**: Benefits-focused, clear timelines, no internal jargon
- **Board**: Metrics-driven, strategic, risk-focused, very concise

### 3. Pull Context from Connected Tools

If a **project management tool** is connected:
- Pull status of roadmap items and milestones
- Identify completed items since last update
- Surface items that are at risk or blocked
- Pull sprint or iteration progress

If **chat** is connected (Slack):
- Search for relevant team discussions and decisions
- Find blockers or issues raised in channels
- Identify key decisions made asynchronously

If **email** is connected (Gmail):
- Search for relevant stakeholder threads
- Identify outstanding asks or commitments

If **docs** are connected (Google Drive):
- Search for recent meeting notes
- Find decision documents or design reviews

If no tools are connected, ask the user to provide:
- What was accomplished since the last update
- Current blockers or risks
- Key decisions made or needed
- What is coming next

### 4. Generate the Update

Structure depends on audience and type:

#### Executive / Leadership Update

**TL;DR**: One sentence summary of overall status.

**Status**: Green / Yellow / Red with one-line justification.

**Key Progress**:
- 3-5 bullet points of what shipped or advanced
- Each tied to a goal or OKR where possible

**Decisions Made**:
- Key decisions with brief rationale

**Risks & Blockers**:
- Active risks with mitigation plans
- Blockers with asks for help

**Asks**:
- What you need from leadership (decisions, resources, air cover)

**Next Milestones**:
- What is coming in the next 1-2 weeks with dates

#### Engineering Team Update

**Summary**: What shipped, what is in progress.

**Completed**:
- Items completed with links to PRs, tickets, or docs

**In Progress**:
- Active work items with owners and expected completion

**Blockers**:
- Technical and non-technical blockers with details

**Decisions Needed**:
- Technical or product decisions that need resolution, with options and recommendation

**Coming Up**:
- What is next in the backlog, with context on priority

#### Launch Update

**What Launched**: Clear description of the feature or product.

**Why It Matters**: User problem solved and business impact expected.

**Key Details**:
- What is included (and what is not)
- Availability (GA, beta, specific segments)
- Known limitations

**Success Metrics**: What we are watching and targets.

**Support / Rollout Plan**: How this is being rolled out, training, support readiness.

**Feedback Channels**: Where to send feedback or report issues.

### 5. Review and Deliver

After generating the update:
- Ask if the user wants to adjust tone, detail level, or emphasis
- Offer to format for the delivery channel (email, Slack post, doc, slides)
- If email or chat is connected, offer to draft the message for sending

## Output Format

Keep updates scannable. Use bold for key points, bullets for lists. Executive updates should be under 300 words. Engineering updates can be longer but should still be structured for skimming.

## Tips

- The most common mistake in stakeholder updates is burying the lead. Start with the most important thing.
- Status colors (Green/Yellow/Red) should reflect reality, not optimism. Yellow is not a failure — it is good risk communication.
- Asks should be specific and actionable. "We need help" is not an ask. "We need a decision on X by Friday" is.
- For executives, frame everything in terms of outcomes and goals, not activities and tasks.
- If there is bad news, lead with it. Do not hide it after good news.
- Match the length to the audience's attention. Executives get a few bullets. Engineering gets the details they need.
