---
title: Diagrams with Mermaid
description: How to create diagrams using Mermaid syntax in documentation
---

This documentation site supports Mermaid diagrams for creating flowcharts, sequence diagrams, and other visualizations.

## Workflow Diagram Example

```mermaid
graph TD
    A[Story Idea] --> B{Editor Review}
    B -->|Approved| C[Research & Writing]
    B -->|Rejected| D[Revise Proposal]
    D --> B
    C --> E[First Draft]
    E --> F[Editorial Review]
    F -->|Needs Changes| G[Revisions]
    G --> F
    F -->|Approved| H[Copy Editing]
    H --> I[Final Review]
    I --> J[Publication]
```

## Publication Process Timeline

```mermaid
gantt
    title Publication Timeline
    dateFormat  YYYY-MM-DD
    section Planning
    Story Assignment    :done, assignment, 2024-01-01, 2024-01-07
    Research            :done, research, 2024-01-08, 2024-01-21
    section Writing
    First Draft         :draft, 2024-01-22, 2024-02-05
    Revisions          :active, revisions, 2024-02-06, 2024-02-12
    section Production
    Copy Editing       :editing, 2024-02-13, 2024-02-16
    Final Review       :review, 2024-02-17, 2024-02-19
    Publication        :publish, 2024-02-20, 2024-02-20
```

## Editorial Hierarchy

```mermaid
graph TB
    A[Editor-in-Chief] --> B[Managing Editor]
    A --> C[Senior Editors]
    B --> D[Section Editors]
    C --> D
    D --> E[Staff Writers]
    D --> F[Contributors]
    E --> G[Stories]
    F --> G
```

## Simple Example

```mermaid
graph LR
    A[Start] --> B[Process]
    B --> C[End]
```

## Usage

To create a Mermaid diagram in your documentation:

1. Use a code block with the `mermaid` language identifier
2. Write your diagram using Mermaid syntax
3. The diagram will be automatically rendered when the page loads

### Example Code

````markdown
```mermaid
graph LR
    A[Start] --> B[Process]
    B --> C[End]
```
````

For more Mermaid syntax examples, visit the [official Mermaid documentation](https://mermaid.js.org/).
