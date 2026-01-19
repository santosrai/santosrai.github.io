---
title: 'How to apply automated unit testing and continuous integration to a simple JavaScript project?'
excerpt: 'Learn how to set up automated testing and continuous integration for your JavaScript projects using GitHub Actions'
date: '2024-01-10'
author: 'Santosh Rai'
---

## What is automated testing?

Automated Testing is testing where tests are run without human intervention.

## What is Continuous Integration?

Continuous Integration is the practice of integrating of code change into single codebase continuously.

## Steps

Let's make pipeline for software development

### Concept:

- file changes
- trigger an automated testing
- release to production

These can be done with the help of continuous integration.

### Preparation:

Let's get into Github actions as a CI/CD service.

For CI/CD service, there needs to be configured with a YAML file which takes:

- name of the pipeline or workflow
- list of jobs
- list of steps for every job

Github search config file under `./github/workflows` so let's create `javascript.yaml` file under `./github/workflows`

```yaml
name: JavaScript workflow
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1
    - name: Use Node.js 12.x
      uses: actions/setup-node@v1
      with:
        node-version: "12.x"
    - name: npm install, and test
      run: |
        npm install
        npm test
      env:
        CI: true
```

Now commit the code and push it to github.

### Observation:

You will see the running job on the GitHub Actions Tab. I committed two times, one for the wrong script and another for the correct script.
