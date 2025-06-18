## Overview
This determines the total cost and bonus amount for the article depending on the `Article Tier` and `Bonuses`. 

## Trigger
The flow runs only **if all** of the following is true:
- `Internal Status` is `Reviewed`
- `Automation Status` is `Pending Review`


## Logic
- The total cost and bonus amount are separated for future use in the email drafter. This is utilized in the email drafter to tell the sender how much of the remuneration was a bonus.

- `Bonus Amount` is determined by what is selected in Bonuses (which is done by the reviewer).

## Output
- `Total Cost` and `Bonus Amount` are updated on SharePoint item
- `Automation Status` is set to `Calculated`

## Notes
- To simplify the flows and update the `Automation Status` the `Organization` and `Staff` go through the flow but, do not update price (non students cannot be remunerated).