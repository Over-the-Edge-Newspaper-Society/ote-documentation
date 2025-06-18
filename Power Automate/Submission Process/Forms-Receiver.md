## Overview
This takes responses from the Microsoft form and translates it into a SharePoint task item on the `Submissions Tracker`. 

## Trigger
Flow runs whenever:
- Response is submitted from the `OTE Contributor Submission Form`


## Logic
- When a response is initially received, it is first checked to see if the sender has agreed to the terms and conditions and that a word document is attached. Since both of these are required to use the article it is a quick check to make sure no empty/unusable responses are documented.  


- The flow retrieves the users email and name off of the email they filled the form with. This shortens the form but more importantly it stops senders from misspelling names and creating multiple directories for the same person.  


- Since the newspaper maker **requires a specific file structure** to print the newspaper (that being photos separated with captions) the style of saving the article and pictures must not be changed.  


- Although the upload loop supports multiple files, only one word document is expected for each article. The article will be placed along with a main template for the editor to make changes to the document without changing the original.    

- The article will saved for the sender under:  
  - *Content > Content > [FirstName LastName] > [Article Name]*

- Each photo needs to be accompanied by a filled out caption text file (required by newspaper printer).

- If there are photos provided they will be saved under:  
  - *[Article Name] > [Photos] > [Photo #]* ('#' being their order number).


## Error Handling
The main portion of the flow is captured in the Try block, this is to check if anything within the block has failed. If something were to fail the flow will send an error email to OTE@unbc.ca.  


The SharePoint list is set to filter out `Processing` items so it is not possible to work on unfinished items but, if it was to crash, the item would be stuck invisible in an unfinished state. Because of this, no matter the outcome in the try block the flow will update the item to `Pending Review`.

## Output
- Item is added on `Submissions Tracker` with parsed information
- `Automation Status` is changed to `Pending Review`

## Notes
- For the `Article Tier` and `Multimedia Types` these are **pulled directly** from the submission and **need to be reviewed** as these are **guesses done by the submitter**. This is especially important for the article tier as that directly affects the cost of the article.  

- Considerations were made for putting submitted notes into the `messages` section rather than the `Notes` section. This led to the flow constantly emailing whenever a message was added. To avoid this the note submitted by sender is put into the `Notes` section. Also the inability to spoof accounts, made not a viable option as this would result in it being tied to one account, and at the time of implementation service accounts are not a viable option.


- The article name was reduced to 15 characters for the article name folder directory. This is to avoid path length issues.

- The item creation was put at the lowest possible point it can be created with the most amount of information that can be given. This is to avoid the item being partially created and then failing leaving a half finished item in the list.  

- When creating the captions the flow assumes the author of the photo is the submitter but **this can be wrong** (AI Images, historical artwork, ect.).