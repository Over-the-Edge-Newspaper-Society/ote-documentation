## Overview
This flow makes an email draft that can be sent from OTE@unbc.ca. It customizes the email body and subject depending on the internal status, role, and bonus value.


## Trigger
The flow runs only **if either** of the following statements are true:
- `Internal Status` is `Accepted` **AND** `Automation Status` is `Calculated` **OR** `Backlog`
- `Internal Status` is `Rejected` **AND** `Automation Status` is **NOT** `Drafted`
  - (drafted check is to avoid a circular loop)


## Logic
- Depending on the internal status, there will be a different email body and subject line. The flow will check for either `Accepted`, `Backlog` or `Rejected` and use the body and subject associated with that.  


- There should only be three responses possible so if any other internal status is triggered it will throw an error.  

- Since there are slight changes depending on the amount paid, bonus amount and if they have an auto-deposit or not, there are multiple different checks for the `Accepted` email type.  

## Output
- `Automation Status` is changed to `Drafted`
- Email draft is created in OTE@unbc.ca using three different templates and additional checks for Accepted.
  


### Backlog:
Thank you for submitting the article "`Title`" we appreciate your contribution to the student newspaper! Right now, we’re planning to hold onto it for possible use in a future issue. We can't promise exactly when (or if) it will run, but we’ll definitely keep it in mind and let you know if we move forward with it.  
### Rejected:
Thank you for sharing your article, "`Title`" we truly appreciate the time and effort you put into it. While we enjoyed reading your work, we’ve decided not to move forward with it for [reasons].
We’re grateful for your contribution to the student newspaper and we hope you’ll consider submitting again in the future. Please don’t hesitate to reach out if you have other ideas to share.
### Accepted:
We hope this message finds you well! Thank you for your contribution to our student newspaper with your article, "`Title`" (Volume `Volume Number`, Issue `Issue Number`).

#### Conditional Blocks:
##### Standard Payment:
We are reaching out to confirm your payment of `Payment`. 
The e-transfer will be processed shortly.

##### Payment with Bonus:
We are reaching out to confirm your payment of `Payment`, 
which includes a bonus of `Bonus Payment`. 
The e-transfer will be processed shortly.

##### Staff/Organization/Faculty Notification:
We are pleased to inform you that the submission has been accepted. However, since you are affiliated with organization/staff/faculty, we cannot offer remuneration for this contribution. We hope you continue to submit articles to us in the future!

## Notes
The resulting email is a **draft** and should **not be automatically sent without review**. This is especially true in the rejected email, as in the draft there is a reasons section that needs to be filled out to give a proper response to the sender. Additionally, there may be differences or changes that the flow does not account for or that happened after internal status was changed.  


Since **non students cannot be remunerated** for an article, any sender who chooses staff or organization will not receive payment. The email drafter will add a note at the end of the email discussing this.