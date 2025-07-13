---
title: Forms Receiver Flow
description: Entry point flow for processing Microsoft Form submissions
sidebar:
  order: 3
---

The Forms Receiver flow is the entry point of the submission workflow, responsible for processing new article submissions from the Microsoft Form and creating structured data in SharePoint.

## Purpose

This flow takes responses from the Microsoft form and translates them into SharePoint task items on the `Submissions Tracker`, ensuring all necessary files are properly organized and stored.

## Trigger Conditions

The flow activates when:
- A response is submitted from the `OTE Contributor Submission Form`

## Initial Validation

Before processing, the flow performs critical validation checks:
- ✅ Sender has agreed to terms and conditions
- ✅ Word document is attached
- ❌ Flow stops if either requirement is missing (no empty/unusable responses are documented)

## Data Processing Logic

### User Information Extraction
- **Email and Name**: Retrieved automatically from the submitter's form login
- **Benefits**: 
  - Shortens the form for users
  - Prevents name misspellings
  - Avoids duplicate directories for the same person

### File Organization

#### Article Storage
The flow saves articles using the required newspaper printer file structure:

**Location**: `Content > Content > [FirstName LastName] > [Article Name]`

**Files Created**:
- Original submitted Word document
- Main template document for editor modifications (preserves original)

#### Photo Management
When photos are submitted, the flow:

**Location**: `[Article Name] > [Photos] > [Photo #]`

**Process**:
1. Saves each photo with sequential numbering (#1, #2, etc.)
2. Creates accompanying caption text files (required by newspaper printer)
3. Assumes submitter is photo author (⚠️ **requires review** for AI images, historical artwork, etc.)

### File Handling Notes
- **Article Name Truncation**: Limited to 15 characters for folder directory to avoid path length issues
- **Multiple File Support**: Upload loop supports multiple files, but only one Word document is expected per article
- **Template Creation**: Main.docx template allows editing without modifying the original submission

## Error Handling

### Try-Catch Protection
- Main flow logic is wrapped in a Try block
- **On Success**: Item status updated to `Pending Review`
- **On Failure**: 
  - Error email sent to OTE@unbc.ca
  - Item status still updated to `Pending Review` (prevents invisible stuck items)

### Safety Measures
- SharePoint list filters out `Processing` items to prevent work on unfinished submissions
- Status always updated regardless of outcome to prevent stuck items

## Output Results

### SharePoint Item Creation
- New item added to `Submissions Tracker` with parsed form information
- `Automation Status` set to `Pending Review`
- Item created at the lowest possible point with maximum available information

### File Organization
- Properly structured directories for articles and multimedia
- Caption files created for all photos
- Template documents prepared for editing workflow

## Important Considerations

### Review Requirements ⚠️
- **Article Tier**: Submitted tier is a guess and requires editorial review
- **Multimedia Types**: Need verification and proper categorization
- **Photo Attribution**: Default author assumption may be incorrect

### Technical Limitations
- **Form Structure Dependency**: Changes to Microsoft Form require corresponding flow updates
- **Path Length Restrictions**: Article names truncated to prevent file system errors
- **Single Document Rule**: Only one Word document expected per submission

## Next Step
After successful processing, items appear in the Submissions Tracker with `Pending Review` status, ready for editorial review and tier assignment.
