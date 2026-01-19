# Blog Post Structure Reference

This document describes the exact format required for blog posts in this Next.js portfolio website.

## File Location

All blog posts must be saved in the `_posts/` directory at the workspace root with a `.md` extension.

## Frontmatter Format

Every blog post must start with YAML frontmatter containing the following required fields:

```yaml
---
title: 'Post Title'
excerpt: 'Brief description or excerpt'
date: 'YYYY-MM-DD'
author: 'Santosh Rai'
---
```

### Field Descriptions

- **title** (required): The blog post title, wrapped in single quotes
- **excerpt** (required): A brief description (typically 100-200 characters) used in listings and SEO
- **date** (required): Publication date in `YYYY-MM-DD` format (e.g., '2024-01-20')
- **author** (required): Author name, defaults to 'Santosh Rai' if not specified

### Frontmatter Examples

**Example 1: Technical Tutorial**
```yaml
---
title: 'Understanding Filter and Reduce in JavaScript'
excerpt: 'Learn how to use filter() and reduce() methods effectively in JavaScript arrays with practical examples'
date: '2024-01-01'
author: 'Santosh Rai'
---
```

**Example 2: Design Pattern Explanation**
```yaml
---
title: 'Design Patterns With VBA'
excerpt: 'Explore how to implement design patterns like Abstraction, Encapsulation, and Polymorphism in VBA applications'
date: '2023-12-25'
author: 'Santosh Rai'
---
```

**Example 3: Project Tutorial**
```yaml
---
title: 'Simple calculator in javascript using MVC pattern'
excerpt: 'Learn how to build a calculator app using the Model-View-Controller design pattern in vanilla JavaScript'
date: '2024-01-15'
author: 'Santosh Rai'
---
```

## Content Structure

After the frontmatter, the content should follow these guidelines:

1. **No H1 Heading**: Do NOT include an H1 heading in the content. The page component already displays the title from the frontmatter. Start content directly with paragraphs or H2 headings.
2. **Markdown Format**: Use standard markdown syntax for formatting
3. **Code Blocks**: Use triple backticks with language identifiers for code examples
4. **Structure**: Organize content with headings (H2 and below), paragraphs, lists, and code blocks as needed

### Content Example

```markdown
---
title: 'Understanding Filter and Reduce in JavaScript'
excerpt: 'Learn how to use filter() and reduce() methods effectively in JavaScript arrays with practical examples'
date: '2024-01-01'
author: 'Santosh Rai'
---

We already know that we use different types of data structures in our application...

## Filter

### Scenario:

We have an array and want to filter value from that based on attributes...

### Solution:

Here comes rescue by the **filter**. Let's see a simple example.

```javascript
const numbers = [1,2,3,4,5];
const greaterThanThree = numbers.filter(function(number) {
  return number>3;
});
//expected output:[ 4, 5 ]
```
```

## Filename Convention

The filename should be:
- In kebab-case (lowercase with hyphens)
- Based on the post title
- End with `.md` extension

**Examples:**
- Title: "Understanding Filter and Reduce in JavaScript" → `understanding-filter-and-reduce-in-javascript.md`
- Title: "Design Patterns With VBA" → `design-patterns-vba.md`
- Title: "What is double not !! operator in JavaScript" → `double-not-operator-javascript.md`

## Integration with System

The blog system automatically:
- Reads all `.md` files from `_posts/` directory
- Parses frontmatter using `gray-matter`
- Converts markdown to HTML using `marked`
- Uses filename (without `.md`) as the slug for routing
- Sorts posts by date (newest first)
- Displays posts on `/blog` page and individual pages at `/blog/[slug]`

## Validation Checklist

Before saving a blog post, ensure:
- [ ] Frontmatter is properly formatted with all required fields
- [ ] Date is in YYYY-MM-DD format
- [ ] Title and excerpt are wrapped in single quotes
- [ ] Content does NOT start with an H1 heading (title is displayed from frontmatter)
- [ ] Filename is in kebab-case
- [ ] File is saved in `_posts/` directory
- [ ] File has `.md` extension
