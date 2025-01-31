import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'

export default [
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    },
    {
        languageOptions: { globals: globals.browser },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,

    {
        rules: {
            indent: ['error', 4],
            'no-multiple-empty-lines': 0,
            quotes: ['error', 'single'],
            'quote-props': ['warn', 'as-needed'],
            'object-curly-spacing': ['warn', 'always'],
            'arrow-parens': ['error', 'as-needed'],
            semi: ['error', 'never'],
            'comma-dangle': ['error', 'always-multiline'],
            'space-infix-ops': 'error',
        },
    },
]
