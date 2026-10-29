import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js, "@stylistic": stylistic }, rules:{
    "@stylistic/semi": ["error", "always"],
    "@stylistic/comma-spacing": ["error", {"before": false, "after": true }],
    "@stylistic/indent": ["error", 2]
  }, languageOptions: { globals: globals.node } },
]);