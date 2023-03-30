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

## Installation

## Usage
