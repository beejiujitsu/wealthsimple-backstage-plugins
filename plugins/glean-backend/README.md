# Glean Backend

Welcome to the Glean backend plugin!

This backend plugin is used to make our Backstage content available in
[Glean](https://glean.com/) — our internal search engine.

## Installation

Install the plugin:

```shell
yarn --cwd packages/backend add '@beejiujitsu/backstage-plugin-glean-backend'
```

Update `packages/backend/src/index.ts` with:

```typescript
backend.add(import('@beejiujitsu/backstage-plugin-glean-backend'));
```

Update your `app-config.yaml` based on the `config.d.ts` file;
you must define at least `glean.apiIndexUrl`, `glean.datasource`, and `glean.token`.

## Getting started

This plugin has been added to the main backend app in this repository, meaning
you'll be able to access it by running `yarn start-backend` in the root
directory, and then make requests to
[http://localhost:7007/api/glean](http://localhost:7007/api/glean).
