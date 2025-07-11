# Payment & Bonus Calculator

The Payment & Bonus Calculator flow determines the financial compensation for accepted articles based on editorial review decisions and contributor classifications.

## Purpose

This flow calculates the total cost and bonus amount for articles based on the `Article Tier` and `Bonuses` assigned during the editorial review process.

## Trigger Conditions

The flow runs **only when ALL** of the following conditions are met:
- `Internal Status` is `Reviewed`
- `Automation Status` is `Pending Review`

## Calculation Logic

### Payment Structure
- **Total Cost**: Base payment determined by Article Tier
- **Bonus Amount**: Additional compensation based on selected bonuses
- **Separation**: Values are calculated separately for use in email communication

### Contributor Classifications

#### Eligible for Payment
- **Students**: Receive full calculated payment and bonuses

#### Ineligible for Payment
- **Organization members**
- **Staff**
- **Faculty**

> **Note**: Non-student contributors still go through the flow to update `Automation Status`, but receive $0 payment (university policy restriction).

### Bonus Determination
Bonus amounts are determined by selections made in the Bonuses field during editorial review. Common bonus categories may include:
- Quality bonuses
- Timeliness bonuses
- Special assignment bonuses
- Exclusive content bonuses

## Output Results

### SharePoint Updates
- `Total Cost` field updated with calculated payment amount
- `Bonus Amount` field updated with bonus compensation
- `Automation Status` changed to `Calculated`

### Data Usage
The separated cost and bonus values are utilized by the Email Drafter to:
- Inform contributors of their total compensation
- Break down how much of the payment was bonus-based
- Provide transparent payment communication

## Payment Tiers

The exact payment structure for Article Tiers should be defined in your editorial policy, but typically includes:
- **Tier 1**: Basic news articles
- **Tier 2**: Feature articles
- **Tier 3**: Investigative pieces
- **Special**: Custom rates for unique content

> **Editorial Note**: Ensure Article Tier assignments are carefully reviewed as they directly impact contributor compensation.

## Next Step
Once calculations are complete, the item moves to `Calculated` status and becomes eligible for final status determination (Accept/Reject/Backlog) and email drafting.
