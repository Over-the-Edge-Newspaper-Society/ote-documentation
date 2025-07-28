---
title: Publication Filing Flow
description: Final step for moving accepted articles to production directory
sidebar:
  order: 5
---
The Publication Filing flow handles the final step of moving accepted and fully processed articles into the newspaper production directory structure.

## Purpose

This flow copies the finalized Main.docx article and approved multimedia files to the *Newspaper Articles* directory, preparing them for the printing and publication process.

## Trigger Conditions

The flow runs **only when ALL** of the following conditions are met:

* `Internal Status` is `Accepted`

* `Volume` and `Issue` fields are **NOT** empty

* `Automation Status` is `Drafted`

## Prerequisites

### Editorial Completion

Before triggering this flow, ensure the following tasks are completed:

* ✅ `Main.docx` is fully edited and publication-ready

* ✅ All multimedia files have completed captions

* ✅ Volume and Issue numbers are assigned

* ✅ Article is ready for final production

### File Validation

The flow includes smart filtering for multimedia:

* ✅ **Includes**: QR Codes, Graphics, Photos

* ❌ **Excludes**: Videos and other non-print media

> This prevents incompatible multimedia from being included in the print publication.

## Directory Structure Creation

### Final Publication Location

```
Content > Newspaper Articles > Volume [X] > Issue [Y] > [Article File Name]
```

### Copied Files

The flow transfers the following to the publication directory:

* **Main.docx**: The finalized, edited article

* **Photos directory**: Complete folder with all approved photos and captions

## Output Results

### File Operations

* Creates or updates the publication directory structure

* Copies finalized article content

* Transfers approved multimedia with captions

* Maintains required folder hierarchy for printing process

### SharePoint Updates

* `Automation Status` updated to `Filed for Publication`

* Article marked as ready for newspaper production

## Critical Requirements ⚠️

### File Name Matching

* `Article File Name` field must **exactly match** the folder name used to store article files

* **Manual folder renaming**: If folder name is changed, update `Article File Name` field accordingly

* **Lookup dependency**: Flow relies on exact name matching to locate files

### Directory Structure Integrity

* **Do not modify** the publication directory structure

* **Printer requirements**: Downstream printing process depends on specific folder organization

* **Path consistency**: Maintain naming conventions for reliable processing

## Quality Assurance

### Pre-Filing Checklist

Before running this flow, verify:

* [ ] Article content is publication-ready

* [ ] All photos have completed caption files

* [ ] Volume and Issue numbers are correct

* [ ] `Article File Name` matches folder structure

* [ ] No restricted multimedia types are included

### Post-Filing Verification

After successful filing:

* [ ] Files appear in correct publication directory

* [ ] All multimedia transferred successfully

* [ ] `Automation Status` shows `Filed for Publication`

* [ ] Directory structure remains intact

## Integration with Production

### Newspaper Production Pipeline

Once filed, articles become part of the newspaper production workflow:

1. **Layout Process**: Production team accesses filed articles
2. **Print Preparation**: Files organized according to printer specifications
3. **Final Production**: Articles incorporated into newspaper layout
4. **Distribution**: Completed newspaper distributed to campus

### Archive Management

Filed articles serve as:

* **Production source**: Direct input for newspaper layout

* **Archive record**: Permanent record of published content

* **Reference material**: Historical content for future issues

## Troubleshooting

### Common Issues

* **Missing files**: Verify `Article File Name` matches folder structure exactly

* **Failed transfers**: Check file permissions and directory access

* **Incomplete multimedia**: Ensure all photos have caption files

### Error Resolution

* **Folder name mismatches**: Update SharePoint `Article File Name` field

* **Permission issues**: Verify flow has access to both source and destination directories

* **Missing requirements**: Complete Volume/Issue fields before retrying

## Final Notes

This flow represents the completion of the automated submission process. Once articles reach `Filed for Publication` status, they are ready for inclusion in the newspaper production pipeline and no further automated processing occurs.

<br />

![Uploaded image](/api/assets/serve?path=Screenshot%202025-07-27%20at%206.12.01%E2%80%AFPM.png\&activeDir=docs)

![1.00]()