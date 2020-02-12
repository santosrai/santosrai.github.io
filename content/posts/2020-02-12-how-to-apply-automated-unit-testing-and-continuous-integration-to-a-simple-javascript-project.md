---
template: post
title: >-
  How to apply automated unit testing and continuous integration to a simple
  JavaScript project?
slug: >-
  posts/How to apply automated unit testing and continuous integration to a
  simple JavaScript project
draft: false
date: 2020-02-12T07:16:48.386Z
description: >-
  How to apply automated unit testing and continuous integration to a simple
  JavaScript project.
category: CI/CD
tags:
  - GithubActions
  - ''
---
### What is automated testing?
Automated Testing is that testing where tests are run without human intervention.

### What is Continuous Integration?
Continuous Integration is the practice of integration of code change into single codebase countinuously.

## Steps
Lets make pipeline for software development
### Concept:
- file changes
- trigger an automated testing
- release to production

These can be done by the help of continuous integration.
### Preparation:
Lets get into Github actions as CI/CD service.

For CI/CD service, there need to be configured with a YAML file which takes:

- name of the pipeline or workflow
- list of jobs
- list of steps for every job

Github search config file under ./github/workflows
so lets create javascript.yaml file under ./github/workflows

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
### Action:
Now commit the code and push to github.

### Observation:
You will see running job on github Actions Tab.
I committed two times, one for wrong script and another for correct script.
