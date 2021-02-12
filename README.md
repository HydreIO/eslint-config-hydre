<h1 align=center>@hydre/eslint-config-hydre</h1>
<p align=center>
  <img src="https://img.shields.io/github/license/hydreio/eslint-config-hydre.svg?style=for-the-badge" />
  <a href="https://www.npmjs.com/package/@hydre/eslint-config-hydre">
    <img src="https://img.shields.io/npm/v/@hydre/eslint-config-hydre.svg?logo=npm&style=for-the-badge" />
  </a>
  <img src="https://img.shields.io/npm/dw/@hydre/eslint-config-hydre?logo=npm&style=for-the-badge" />
  <img src="https://img.shields.io/github/workflow/status/hydreio/eslint-config-hydre/CI?logo=Github&style=for-the-badge" />
</p>

<h3 align=center>A strict opinionated ESLint shareable config for the Hydre JavaScript style guide</h3>
<p align=center>
  <img height=300 src="https://i.imgur.com/mc4VguS.png"/>
</p>

## Install

```sh
npm install -D \
  eslint \
  babel-eslint@next \
  eslint-plugin-unicorn \
  @hydre/eslint-config-hydre
```

## Usage

Add to your `.eslintrc.yml` file

```yml
env:
  node: true
  es2020: true
plugins:
  - unicorn
extends:
  - "@hydre/eslint-config-hydre"
globals:
  Atomics: readonly
  SharedArrayBuffer: readonly
# Nodejs support some experimental ecma features but not eslint
parser: babel-eslint
parserOptions:
  sourceType: module
  configFile: package.json
  ecmaVersion: 11
```

## format

we suggest using `prettier-eslint-cli`

```json
"lint": "prettier-eslint $PWD/\"**/*.js\" --print-width 60 --list-different && eslint --color .",
"format": "prettier-eslint $PWD/\"**/*.js\" --print-width 60 --write",
```
