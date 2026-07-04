import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import importX from "eslint-plugin-import-x";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const featuresDir = path.join(__dirname, "src/features");

// Dynamically discover all feature folders to generate boundary rules
let features = [];
try {
  if (fs.existsSync(featuresDir)) {
    features = fs.readdirSync(featuresDir).filter((file) => {
      return fs.statSync(path.join(featuresDir, file)).isDirectory();
    });
  }
} catch (e) {
  console.error(
    "Failed to read features directory for ESLint configuration:",
    e,
  );
}

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "import-x": importX,
    },
    settings: {
      "import-x/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import-x/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
      },
    },

    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "warn",

      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Circular dependency detection
      "import-x/no-cycle": [
        "error",
        {
          maxDepth: Infinity,
          ignoreExternal: true,
        },
      ],
      "import-x/no-self-import": "error",
      "import-x/no-unresolved": "error",
    },
  },
  // Rule: Shared layer must never import from features layer
  {
    files: ["src/shared/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/features/**", "**/features/**", "*../features/**"],
              message:
                "Files inside 'shared' layer must not import from 'features' layer to prevent coupling and circular dependencies.",
            },
          ],
        },
      ],
    },
  },
  // Rules for files inside each feature (cannot import deep internals of other features)
  ...features.map((featureName) => ({
    files: [`src/features/${featureName}/**/*.{ts,tsx}`],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            ...features
              .filter((f) => f !== featureName)
              .flatMap((otherFeature) => [
                {
                  group: [
                    `@/features/${otherFeature}/**`,
                    `**/features/${otherFeature}/**`,
                    `**/../${otherFeature}`,
                    `**/../${otherFeature}/**`,
                  ],
                  message: `Imports from feature '${otherFeature}' must use the public API ('@/features/${otherFeature}') and cannot import deep internals or use relative paths.`,
                },
              ]),
          ],
        },
      ],
    },
  })),
  // Rules for app level / root files (cannot import deep internals of any feature)
  {
    files: ["src/**/*.{ts,tsx}"],
    ignores: ["src/features/**/*", "src/shared/**/*"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: features.flatMap((featureName) => [
            {
              group: [
                `@/features/${featureName}/**`,
                `**/features/${featureName}/**`,
                `**/../${featureName}`,
                `**/../${featureName}/**`,
              ],
              message: `Imports from feature '${featureName}' must use the public API ('@/features/${featureName}') and cannot import deep internals or use relative paths.`,
            },
          ]),
        },
      ],
    },
  },
]);
