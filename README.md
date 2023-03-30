# Template for setting up a lerna based monorepo

This is a simple template for creating a monorepo that uses the following tooling

- lerna
- rollup
- storybook
- typescript
- react

_lerna_ is used for managing your packages. _rollup_ is used for bundling your packages. This templates assumes that you are creating UI packages. Hence, it also adds _storybook_. There are other examples out there but many of them are dated (which this template will also become one day). This template is also _light_ and doesn't add a whole lot of dependencies. That IMHO is what a template should be - light and unencumbered by dependencies that users may not need from the get-go from the template.

# Bootstrapping

You don't need to install anything globally. All the tooling that you need are added as dev dependencies in this template.

# What else do you need for packaging

If you use this template as the basis for your monorepo, you will most likely need to add some additional plugins to _rollup_. Your mileage on what else to add will vary depending on what processing needs to take place. The example package in this repo is setup to be bundled as an _esm_ package. That may not be suitable for your use case.

# tsconfig.json

You can override the _tsconfig.json_ and see all the options available by running this command.

```
npx tsc --init
```

## Usage

Have a new go at it!
