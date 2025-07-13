---
title: Email Drafter Flow
description: Automated email drafting flow for contributor responses
sidebar:
  order: 2
---

The Email Drafter flow creates customized response emails for contributors based on their submission status, payment details, and contributor classification.

## Purpose

This flow generates email drafts in the OTE@unbc.ca account that can be reviewed and sent to contributors, providing appropriate responses for accepted, rejected, or backlogged submissions.

## Trigger Conditions

The flow runs when **either** of the following statements are true:
- `Internal Status` is `Accepted` **AND** `Automation Status` is `Calculated` **OR** `Backlog`
- `Internal Status` is `Rejected` **AND** `Automation Status` is **NOT** `Drafted`
  - (The "not drafted" check prevents circular loops)

## Email Templates

### Backlog Response
```
Thank you for submitting the article "[Title]" we appreciate your contribution to the student newspaper! Right now, we're planning to hold onto it for possible use in a future issue. We can't promise exactly when (or if) it will run, but we'll definitely keep it in mind and let you know if we move forward with it.
```

### Rejection Response
```
Thank you for sharing your article, "[Title]" we truly appreciate the time and effort you put into it. While we enjoyed reading your work, we've decided not to move forward with it for [reasons].

We're grateful for your contribution to the student newspaper and we hope you'll consider submitting again in the future. Please don't hesitate to reach out if you have other ideas to share.
```
> **⚠️ Important**: The `[reasons]` section must be manually completed before sending.

### Acceptance Response

#### Base Message
```
We hope this message finds you well! Thank you for your contribution to our student newspaper with your article, "[Title]" (Volume [Volume Number], Issue [Issue Number]).
```

#### Payment Variations

**Standard Payment:**
```
We are reaching out to confirm your payment of [Payment Amount]. 
The e-transfer will be processed shortly.
```

**Payment with Bonus:**
```
We are reaching out to confirm your payment of [Payment Amount], 
which includes a bonus of [Bonus Amount]. 
The e-transfer will be processed shortly.
```

**Staff/Organization/Faculty:**
```
We are pleased to inform you that the submission has been accepted. However, since you are affiliated with organization/staff/faculty, we cannot offer remuneration for this contribution. We hope you continue to submit articles to us in the future!
```

## Logic Flow

### Status-Based Branching
1. **Flow checks Internal Status**: `Accepted`, `Backlog`, or `Rejected`
2. **Selects appropriate template** based on status
3. **Error handling**: Any other status triggers an error

### Acceptance Email Customization
For accepted articles, the flow performs additional checks:
- **Payment amount**: Determines if payment is involved
- **Bonus presence**: Checks if bonus compensation applies
- **Contributor type**: Identifies if payment is applicable (student vs. staff/faculty)
- **Auto-deposit status**: May affect payment processing language

## Output Results

### SharePoint Updates
- `Automation Status` changed to `Drafted`

### Email Creation
- Draft email created in OTE@unbc.ca account
- Subject line customized based on status and article details
- Body text populated with appropriate template and variable substitutions

## Critical Review Requirements ⚠️

### Manual Review Required
**All drafts require human review before sending** for the following reasons:

1. **Rejection Emails**: The `[reasons]` section must be completed with specific feedback
2. **Variable Verification**: Ensure all substituted values (payment amounts, issue numbers) are correct
3. **Context Consideration**: Account for any special circumstances not captured by the automated logic
4. **Tone and Accuracy**: Verify the message tone is appropriate for the specific situation

### Common Review Points
- Payment amounts match editorial decisions
- Issue and volume numbers are accurate
- Contributor classification is correct
- Special circumstances are addressed
- Professional tone is maintained

## Error Handling

### Validation Checks
- Verifies Internal Status is one of three expected values
- Handles missing or invalid data gracefully
- Prevents infinite loops through status checking

### Safety Measures
- Creates drafts only (no automatic sending)
- Provides clear error messages for unexpected conditions
- Maintains audit trail through status updates

## Next Step
After email drafting, the reviewer edits the draft as needed and manually sends the communication to the contributor. For accepted articles, the process may continue to publication filing.
