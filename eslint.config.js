import { createConfigForNuxt } from "@nuxt/eslint-config/flat";

export default createConfigForNuxt({
  features: {
    stylistic: false,
  },
}).append({
  rules: {
    // Vue 相關規則
    "vue/multi-word-component-names": "off",
    "vue/no-multiple-template-root": "off",
    "vue/html-self-closing": "off",
    "vue/max-attributes-per-line": "off",
    "vue/singleline-html-element-content-newline": "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prefer-const": "warn",
    "no-var": "error",

    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-explicit-any": "warn",
  },
});
