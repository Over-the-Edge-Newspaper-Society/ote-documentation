## Overview
Copies the finalized Main.docx article and approved multimedia (QR codes, photos, graphics) to *Newspaper Articles* directory. 

## Trigger

The flow runs only **if all** of the following is true:
- `Internal Status` is `Accepted`
- `Volume` and `Issue` fields are **NOT** empty
- `Automation Status` is `Drafted`

## Logic

- The expectation of the flow running is that the article is fully documented and edited. Before triggering ensure `Main.docx` is edited and complete. All relevant multimedia files have filled out captions.

- The flow checks to see if the multimedia is either a QR Code or graphic or photo. This is to avoid new multimedia that cannot be in print from being included (video).

## Error Handling 

- The main portion of the flow is captured in the Try block, this is to check if anything within the block has failed. If something were to fail the flow will send an error email to [OTE@unbc.ca](mailto:OTE@unbc.ca).

## Outputs

-  Create or updates the following directory structure:
   -  *Content > Newspaper Articles >  Volume `VolumeValue` > Issue `IssueValue` > `Article File Name`*
-  Copies the following to that directory:
   -  `Main.docx`
   -  `Photos` directory
- Update `Automation Status` to `Filed for Publication`

## Notes

- `Article File Name` must exactly match the name of the folder used to store the article files.
If the folder name is changed manually, ensure `Article File Name` is updated accordingly to prevent lookup issues in the flow.


