<h1 align=center>@sidy/eslint-config-sidy</h1>
<p align=center>
  <img src="https://img.shields.io/github/license/usidy/eslint-config-sidy.svg?style=for-the-badge" />
  <a href="https://www.npmjs.com/package/@sidy/eslint-config-sidy">
    <img src="https://img.shields.io/npm/v/@sidy/eslint-config-sidy.svg?logo=npm&style=for-the-badge" />
  </a>
  <img src="https://img.shields.io/npm/dw/@sidy/eslint-config-sidy?logo=npm&style=for-the-badge" />
  <img src="https://img.shields.io/github/workflow/status/usidy/eslint-config-sidy/CI?logo=Github&style=for-the-badge" />
</p>

<h3 align=center>A strict opinionated ESLint shareable config for the Sidy JavaScript style guide</h3>
<p align=center>
  <img height=300 src="https://i.imgur.com/AExNHrg.png"/>
</p>

## Install

```sh
npm install -D @sidy/eslint-config-sidy
```

## Usage

Add to your `.eslintrc.yml` file

```yml
env:
  node: true
  es6: true
extends:
  - eslint-config-sidy
globals:
  Atomics: readonly
  SharedArrayBuffer: readonly
parser: babel-eslint
parserOptions:
  ecmaVersion: 2020
  sourceType: module
  ecmaFeatures:
    legacyDecorators: true
```