// https://eslint.org/docs/user-guide/configuring
// File taken from https://github.com/vuejs-templates/webpack/blob/1.3.1/template/.eslintrc.js, thanks.

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 9,
        sourceType: 'module'
    },

    env: {
        browser: true,
        webextensions: true,
        es6: true,
        node: true
    },
    globals: {
        $: true,
        global: true
    },
    extends: [
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'eslint:recommended'
    ],
    // add your custom rules here
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        allowEmptyReject: true,

        // Deviations from https://eslint.org/docs/rules/#possible-errors
        'no-console': 0, // Enable the use of console

        // Deviations from < https://eslint.org/docs/rules/#best-practices >
        //"eqeqeq": [2, "smart"],     // No coersion unless comparing against null
        'guard-for-in': 2, // require an if statement with for-in loops
        'no-else-return': 2, // no 'if () { return } else { ... }
        'no-eval': 2, // no eval()
        'no-floating-decimal': 2, // no trailing decimals after numbers
        'no-lone-blocks': 2, // see:
        'no-multi-spaces': 2, // no repeating spaces
        'no-throw-literal': 2, // must throw an error instance
        'no-unused-expressions': 2, // see:
        'no-with': 2, // no with statements
        'wrap-iife': 2, // immediately called functions must be wrapped in ()'s

        // Deviation from < https://eslint.org/docs/rules/#stylistic-issues >
        'array-bracket-spacing': 2, // Spaces around array []'s
        'block-spacing': 2, // {}'s must have whitespace around them
        //"brace-style": 2,                                 // See:
        camelcase: 2, // useCamelCasePleaseKThanks
        'comma-dangle': 2, // No trailing commas
        'comma-spacing': 2, // Reqire space after commas
        'comma-style': 2, // See: https://eslint.org/docs/rules/comma-style
        'computed-property-spacing': 2, // No whitespace when using object[thing]
        'key-spacing': [2, { mode: 'strict' }], // Exactly one space after object key colons
        'keyword-spacing': 2, // Spaces around keywords
        'new-cap': 2, // Constructors must start with capital letter
        'no-trailing-spaces': 2, // no trailing spaces
        semi: 2, // semi-colons required
        'semi-spacing': [2, { before: false, after: true }], // space after semi-colon, no space before
        'semi-style': 2, // See: https://eslint.org/docs/rules/semi-style
        'space-before-blocks': 2, // whitespace required before and after {}
        'space-in-parens': [2, 'never'], // See: https://eslint.org/docs/rules/space-in-parens
        'space-infix-ops': 2, // Spaces required areound operators
        'space-unary-ops': 2, // See: https://eslint.org/docs/rules/space-unary-ops
        'switch-colon-spacing': 2, // Spaces after case colon

        // Deviation from < https://eslint.org/docs/rules/#ecmascript-6 >
        'arrow-spacing': 2, // Spaces required around fat-arrow function's "=>"
        'no-confusing-arrow': 2, // Don't use arrows functions in conditions
        'no-var': 1, // Warning; Use let/const instead of var

        // Other deviations
        'no-warning-comments': [
            'warn',
            { terms: ['todo', 'to do', 'fix', 'fixme', 'fix me', 'need'], location: 'start' }
        ], // warn about todo comments
        'no-unused-vars': ['warn']
    }
};
