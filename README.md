## Availity Design Tokens

This repo consumes a generated tokens.json file exported from Figma as the design token source of truth.

Style Dictionary is used to transform the design tokens into technology specific formats for ingestion by frameworks:

- CSS variables for applications using class based CSS approach
- Nested JSON modules for CSS-in-JS approach (styled-components/emotion)
- SCSS variables for scss integration using a global stylesheet