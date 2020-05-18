/* eslint-disable max-lines */
const CURLY_NEW_LINE = {
  multiline    : true,
  minProperties: 2,
  consistent   : true,
}

module.exports = {
  rules: {
    // The rules below are listed in the order they appear on the eslint
    // rules page. All rules are listed to make it easier to keep in sync
    // as new ESLint rules are added.
    // http://eslint.org/docs/rules/
    // - Rules in the `eslint:recommended` ruleset that aren't specifically
    //   mentioned by the google styleguide are listed but commented out (so
    //   they don't override a base ruleset).
    // - Rules that are recommended but contradict the Google styleguide
    //   are explicitly set to the Google styleguide value.

    // Possible Errors
    // http://eslint.org/docs/rules/#possible-errors
    // ---------------------------------------------
    'for-direction'              : 'error',
    // 'no-await-in-loop': 'off',
    'no-compare-neg-zero'        : 'error', // eslint:recommended
    'no-cond-assign'             : 'error', // eslint:recommended
    // 'no-console': 'error', // eslint:recommended
    'no-constant-condition': 'error', // eslint:recommended
    'no-control-regex'           : 'error', // eslint:recommended
    'no-debugger'                : 'error', // eslint:recommended
    'no-dupe-args'               : 'error', // eslint:recommended
    'no-dupe-keys'               : 'error', // eslint:recommended
    'no-duplicate-case'          : 'error', // eslint:recommended
    'no-empty'                   : ['error',
      { allowEmptyCatch: true }],
    'no-empty-character-class'   : 'error', // eslint:recommended
    'no-ex-assign'               : 'error', // eslint:recommended
    'no-extra-boolean-cast'      : 'error', // eslint:recommended
    'no-extra-parens'            : 'error',
    'no-extra-semi'              : 'error', // eslint:recommended
    'no-func-assign'             : 'error', // eslint:recommended
    'no-inner-declarations'      : 'error', // eslint:recommended
    'no-invalid-regexp'          : 'error', // eslint:recommended
    'no-irregular-whitespace'    : 'error', // eslint:recommended
    'no-obj-calls'               : 'error', // eslint:recommended
    'no-prototype-builtins'      : 'error',
    'no-regex-spaces'            : 'error', // eslint:recommended
    'no-sparse-arrays'           : 'off', // eslint:recommended
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline'    : 'error', // eslint:recommended
    'no-unreachable'             : 'error', // eslint:recommended
    'no-unsafe-finally'          : 'error', // eslint:recommended
    'no-unsafe-negation'         : 'error', // eslint:recommended
    'use-isnan'                  : 'error', // eslint:recommended
    'valid-typeof'               : 'error', // eslint:recommended

    // Best Practices
    // http://eslint.org/docs/rules/#best-practices
    // --------------------------------------------

    // 'accessor-pairs': 'off',
    'array-callback-return'       : 'error',
    'block-scoped-var'            : 'error',
    'class-methods-use-this': 'error',
    'complexity'                  : ['error',
      10],
    'consistent-return': 'error',
    'curly'                       : ['error',
      'multi-or-nest'],
    'default-case': 'error',
    'dot-location': ['error',
      'property'],
    'dot-notation'                : 'error',
    'eqeqeq'                      : 'error',
    'guard-for-in'                : 'error',
    // 'no-alert': 'off',
    'no-caller'                   : 'error',
    'no-case-declarations': 'off', // eslint:recommended
    // 'no-div-regex': 'off',
    'no-else-return'              : 'error',
    'no-empty-function'           : ['error',
      { allow: ['arrowFunctions'] }],
    'no-empty-pattern'            : 'error', // eslint:recommended
    'no-eq-null'                  : 'error',
    'no-eval'                     : 'error',
    'no-extend-native'            : 'error',
    'no-extra-bind'               : 'error',
    'no-extra-label'              : 'error',
    'no-fallthrough'              : 'off', // eslint:recommended
    'no-floating-decimal'         : 'error',
    'no-global-assign'            : 'error',
    // 'no-implicit-coercion': 'off',
    'no-implicit-globals'         : 'error',
    'no-implied-eval'             : 'error',
    'no-invalid-this'             : 'error',
    'no-iterator'                 : 'error',
    // 'no-labels': 'off',
    'no-lone-blocks'              : 'error',
    'no-loop-func'                : 'error',
    // 'no-magic-numbers'            : 'error',
    'no-multi-spaces'             : 'error',
    // 'no-multi-str'                : 'off',
    'no-new'                      : 'error',
    'no-new-func'                 : 'error',
    'no-new-wrappers'             : 'error',
    'no-octal'                    : 'error', // eslint:recommended
    'no-octal-escape'             : 'error',
    'no-param-reassign'           : 'error',
    'no-proto'                    : 'error',
    'no-redeclare'                : 'error', // eslint:recommended
    'no-restricted-properties'    : 'error',
    'no-return-assign'            : 'error',
    'no-script-url'               : 'error',
    'no-self-assign'              : 'error', // eslint:recommended
    'no-self-compare'             : 'error',
    'no-sequences'                : 'error',
    // 'no-throw-literal'            : 'error', // eslint:recommended
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions'       : 'off', // @see https://github.com/facebook/create-react-app/issues/8107
    'no-unused-labels'            : 'error', // eslint:recommended
    'no-useless-call'             : 'error',
    'no-useless-concat'           : 'error',
    'no-useless-escape'           : 'off',
    // 'no-void': 'off',
    // 'no-warning-comments': 'error',
    'no-with'                     : 'error',
    'prefer-promise-reject-errors': 'error',
    // 'radix': 'off',
    'require-await'               : 'off', // broken with async generators
    // 'vars-on-top': 'off',
    'wrap-iife'                   : 'error',
    'yoda'                        : 'error',

    // Strict Mode
    // http://eslint.org/docs/rules/#strict-mode
    // -----------------------------------------
    // 'strict': 'off',

    // Variables
    // http://eslint.org/docs/rules/#variables
    // ---------------------------------------
    'init-declarations'         : 'error',
    'no-delete-var'             : 'error', // eslint:recommended
    'no-label-var'              : 'off',
    'no-restricted-globals'     : 'error',
    'no-shadow'                 : 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef'                  : 'error', // eslint:recommended
    'no-undef-init'             : 'error',
    // 'no-undefined': 'off',
    'no-unused-vars'            : ['error',
      {
        args              : 'after-used',
        ignoreRestSiblings: true,
      }], // eslint:recommended
    'no-use-before-define': 'error',

    // Node.js and CommonJS
    // http://eslint.org/docs/rules/#nodejs-and-commonjs
    // -------------------------------------------------
    'callback-return'      : 'off',
    'global-require'       : 'error',
    'handle-callback-err'  : 'error',
    'no-buffer-constructor': 'error',
    'no-mixed-requires'    : 'error',
    'no-new-require'       : 'error',
    'no-path-concat'       : 'error',
    // 'no-process-env': 'off',
    // 'no-process-exit': 'off',
    // 'no-restricted-modules': 'off',
    // 'no-sync': 'off',

    // Stylistic Issues
    // http://eslint.org/docs/rules/#stylistic-issues
    // ----------------------------------------------
    'array-bracket-newline': 'off', // eslint:recommended
    'array-bracket-spacing': ['error',
      'never'],
    'array-element-newline': ['error',
      {
        multiline: true,
        minItems : 1,
      }], // eslint:recommended
    'block-spacing': ['error',
      'always'],
    'brace-style'              : 'error',
    'camelcase'                : 'off',
    // 'capitalized-comments': 'off',
    'comma-dangle': ['error',
      'always-multiline'],
    'comma-spacing'                 : 'error',
    'comma-style'                   : 'error',
    'computed-property-spacing': 'error',
    // 'consistent-this': 'off',
    'eol-last'                      : 'error',
    'func-call-spacing'             : 'error',
    // 'func-name-matching': 'off',
    // 'func-names': 'off',
    'function-paren-newline'   : ['error',
      { minItems: 2 }],
    'function-call-argument-newline': ['error',
      'always'],
    'func-style': ['error',
      'expression'],
    // 'id-blacklist': 'off',
    // 'id-length': 'off',
    // 'id-match': 'off',
    'indent': [
      'error',
      2,
      {
        CallExpression     : { arguments: 2 },
        FunctionDeclaration: {
          body      : 1,
          parameters: 2,
        },
        FunctionExpression: {
          body      : 1,
          parameters: 2,
        },
        MemberExpression: 2,
        ObjectExpression: 1,
        SwitchCase      : 1,
        ignoredNodes    : ['ConditionalExpression'],
      },
    ],
    // 'jsx-quotes': 'off',
    'key-spacing': ['error',
      {
        align: {
          beforeColon: false,
          afterColon : true,
          on         : 'colon',
          mode       : 'minimum',
        },
      },
    ],
    'keyword-spacing': 'error',
    // 'line-comment-position': 'off',
    'linebreak-style': 'error',
    // 'lines-around-comment': 'off',
    'max-depth'      : ['warn',
      3],
    'max-len': [
      'error',
      {
        code      : 80,
        tabWidth  : 2,
        ignoreUrls: true,
      },
    ],
    'max-lines': [
      'error',
      {
        max           : 200,
        skipBlankLines: true,
        skipComments  : true,
      },
    ],
    'max-nested-callbacks': ['error',
      3],
    'max-params': ['error',
      3],
    // 'max-statements': 'off',
    'max-statements-per-line':
      ['error',
        { max: 2 }],
    // 'multiline-ternary': 'off',
    // 'new-cap'                      : 'error',
    // 'new-parens': 'off',
    'newline-per-chained-call': 'error',
    'no-array-constructor'         : 'error',
    // 'no-bitwise': 'off',
    // 'no-continue': 'off',
    // 'no-inline-comments': 'off',
    // 'no-lonely-if': 'off',
    // 'no-mixed-operators': 'off',
    'no-mixed-spaces-and-tabs': 'error', // eslint:recommended
    'no-multi-assign'              : 'error',
    'no-multiple-empty-lines'      : ['error',
      { max: 2 }],
    // 'no-negated-condition': 'off',
    'no-nested-ternary'            : 'error',
    'no-new-object'                : 'error',
    // 'no-plusplus': 'off',
    'no-restricted-syntax'         : 'error',
    'no-tabs'                      : 'error',
    // 'no-ternary': 'off',
    'no-trailing-spaces'           : 'error',
    'no-underscore-dangle'         : 'error',
    'no-unneeded-ternary'          : 'error',
    'no-whitespace-before-property': 'error',
    // 'nonblock-statement-body-position': 'off',
    'object-curly-newline'         : [
      'error',
      {
        ObjectExpression : CURLY_NEW_LINE,
        ObjectPattern    : CURLY_NEW_LINE,
        ImportDeclaration: CURLY_NEW_LINE,
        ExportDeclaration: CURLY_NEW_LINE,
      },
    ],
    'object-curly-spacing': ['error',
      'always'],
    'object-property-newline':
      ['error',
        { allowAllPropertiesOnSameLine: false }],
    'one-var': [
      'error',
      {
        var  : 'never',
        let  : 'never',
        const: 'never',
      },
    ],
    // 'one-var-declaration-per-line': 'off',
    // 'operator-assignment': 'off',
    'operator-linebreak': ['error',
      'before'],
    'padded-blocks': ['error',
      'never'],
    'padding-line-between-statements': ['error',
      {
        blankLine: 'always',
        prev     : 'block-like',
        next     : '*',
      },
      {
        blankLine: 'always',
        prev     : '*',
        next     : 'case',
      },
      {
        blankLine: 'always',
        prev     : '*',
        next     : 'class',
      },
      {
        blankLine: 'always',
        prev     : '*',
        next     : 'const',
      },
      {
        blankLine: 'always',
        prev     : 'const',
        next     : '*',
      },
      {
        blankLine: 'always',
        prev     : '*',
        next     : 'let',
      },
      {
        blankLine: 'always',
        prev     : 'let',
        next     : '*',
      },
      {
        blankLine: 'never',
        prev     : 'let',
        next     : 'let',
      },
      {
        blankLine: 'never',
        prev     : 'const',
        next     : 'const',
      },
    ],
    'quote-props': ['error',
      'consistent'],
    'quotes':
      ['error',
        'single',
        { allowTemplateLiterals: true }],
    'semi': ['error',
      'never'],
    'semi-spacing': 'error',
    'semi-style'                 : ['error',
      'first'],
    // 'sort-keys': 'off',
    // 'sort-vars': 'off',
    'space-before-blocks'        : 'error',
    'space-before-function-paren': [
      'error',
      {
        asyncArrow: 'always',
        anonymous : 'never',
        named     : 'never',
      },
    ],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment'      : ['error',
      'always'],
    'switch-colon-spacing': 'error',
    'template-tag-spacing': 'error',
    // 'unicode-bom': 'off',
    // 'wrap-regex': 'off',

    // ECMAScript 6
    // http://eslint.org/docs/rules/#ecmascript-6
    // ------------------------------------------
    // 'arrow-body-style': 'off',
    'arrow-parens': ['error',
      'as-needed'],
    'arrow-spacing': ['error',
      {
        before: true,
        after : true,
      }],
    'constructor-super'     : 'error', // eslint:recommended
    'generator-star-spacing': ['error',
      {
        before: true,
        after : false,
      }],
    'no-class-assign'        : 'error',
    // 'no-confusing-arrow'     : 'error',
    'no-const-assign'        : 'error', // eslint:recommended
    'no-dupe-class-members'  : 'error', // eslint:recommended
    'no-duplicate-imports'   : 'error',
    'no-new-symbol'          : 'error', // eslint:recommended
    'no-restricted-imports'  : 'error',
    'no-this-before-super'   : 'error', // eslint:recommended
    'no-useless-computed-key': 'error',
    'no-useless-constructor' : 'error',
    'no-useless-rename'      : 'error',
    'no-var'                 : 'error',
    'object-shorthand'       : 'error',
    'prefer-arrow-callback'  : 'error',
    'prefer-const'           : ['error',
      { destructuring: 'all' }],
    'prefer-destructuring'   : 'error',
    'prefer-numeric-literals': 'error',
    'prefer-rest-params'     : 'error',
    'prefer-spread'          : 'error',
    // 'prefer-template': 'off',
    'require-yield'          : 'error', // eslint:recommended
    'rest-spread-spacing'    : 'error',
    // 'sort-imports': 'off',
    'symbol-description'     : 'error',
    'template-curly-spacing' : ['error',
      'always'],
    'yield-star-spacing': ['error',
      {
        before: false,
        after : true,
      }],

    // ==========================
    // additional rules
    // ==========================

    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    'require-atomic-updates': 'error',
    'max-classes-per-file'  : 'error',
    'no-constructor-return' : 'error',
    'no-return-await'       : 'error',
    'no-useless-return'     : 'error',

    // ==========================
    // optionaly using the eslint-plugin-unicorn
    // ==========================

    'unicorn/better-regex'                     : 'error',
    'unicorn/catch-error-name'                 : 'error',
    'unicorn/consistent-function-scoping': 'error',
    'unicorn/custom-error-definition'          : 'error',
    'unicorn/error-message'                    : 'error',
    'unicorn/escape-case'                      : 'error',
    'unicorn/expiring-todo-comments'           : 'error',
    // 'unicorn/explicit-length-check': 'error',
    'unicorn/filename-case'              :
      ['error',
        {
          cases: {
            snakeCase : true,
            pascalCase: true,
          },
        }],
    // 'unicorn/import-index': 'error', // esm
    'unicorn/new-for-builtins'                 : 'error',
    'unicorn/no-abusive-eslint-disable'    : 'error',
    'unicorn/no-array-instanceof'              : 'error',
    'unicorn/no-console-spaces'                : 'error',
    // 'unicorn/no-fn-reference-in-iterator': 'error',
    'unicorn/no-for-loop'                      : 'error',
    'unicorn/no-hex-escape'                    : 'error',
    'unicorn/no-keyword-prefix'                : 'error',
    'unicorn/no-nested-ternary'                : 'error',
    'unicorn/no-new-buffer'                    : 'error',
    'unicorn/no-null'                          : 'error',
    'unicorn/no-process-exit'                  : 'error',
    // 'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-unsafe-regex'                  : 'error',
    'unicorn/no-unused-properties'             : 'error',
    'unicorn/no-zero-fractions'                : 'error',
    'unicorn/number-literal-case'              : 'error',
    'unicorn/prefer-add-event-listener'    : 'error',
    'unicorn/prefer-dataset'                   : 'error',
    'unicorn/prefer-event-key'                 : 'error',
    'unicorn/prefer-flat-map'                  : 'error',
    'unicorn/prefer-includes'                  : 'error',
    'unicorn/prefer-modern-dom-apis'           : 'error',
    'unicorn/prefer-negative-index'            : 'error',
    'unicorn/prefer-node-append'               : 'error',
    'unicorn/prefer-node-remove'               : 'error',
    'unicorn/prefer-number-properties'         : 'error',
    'unicorn/prefer-query-selector'            : 'error',
    'unicorn/prefer-reflect-apply'             : 'error',
    'unicorn/prefer-replace-all'               : 'error',
    'unicorn/prefer-set-has'                   : 'error',
    'unicorn/prefer-spread'                    : 'error',
    'unicorn/prefer-starts-ends-with'          : 'error',
    'unicorn/prefer-string-slice'              : 'error',
    'unicorn/prefer-text-content'              : 'error',
    'unicorn/prefer-trim-start-end'            : 'error',
    'unicorn/prefer-type-error'                : 'error',
    'unicorn/prevent-abbreviations'            : 'error',
    // 'unicorn/string-content': 'error',
    'unicorn/throw-new-error'              : 'error',
    'unicorn/no-reduce'                    : 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
  },
}
