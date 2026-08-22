export default [
    {
        ignores: [
            "node_modules/**",
            ".vs/**",
            "obj/**",
            "dist/**",
            "build/**"
        ]
    },
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                console: "readonly"
            }
        },
        rules: {
            "no-undef": "error",
            "no-unused-vars": ["error", { args: "none", caughtErrors: "none" }],
            "no-var": "error",
            "prefer-const": "error"
        }
    }
];
