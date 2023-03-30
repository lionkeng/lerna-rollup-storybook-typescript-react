# Template for setting up a lerna based monorepo

Template for creating a monorepo that uses the following tooling

- lerna
- rollup
- storybook
- typescript
- react

# Bootstrapping

1. install lerna

```
npm install -D lerna@latest
```

2. initialize lerna

```
npx lerna init
```

3. install typescript

```
npm install -D typescript@latest
```

4. create a tsconfig.json file at the root level

5. install rollup

```
npm install -D rollup@latest
```

6. create a package

```
npx lerna create
```

7. install react and react-dom to the workspace/sub-package

```
npm install -D -workspace=@lionkeng/radio-button react@latest react-dom@latest
```

# Tooling

uses _lerna_ but you do not need to install it globally.

## Getting started

## Test and Deploy

# Editing this README

## Suggestions for a good README

## Installation

Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage
