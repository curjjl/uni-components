# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**uni-components** is a Vue 3 component library built on top of Ant Design Vue. It provides three types of components:
- **Basic components**: Enhanced versions of common UI elements (Button, Input, etc.)
- **Advanced components**: Complex interactive components (Tree, Table, etc.) 
- **Business components**: Domain-specific components with built-in API integrations

## Technology Stack

- **Vue 3** with Composition API and TypeScript
- **Ant Design Vue 4.x** as base component library
- **Vite** for development and building
- **Vitest** for unit testing
- **ESLint** for code linting

## Development Commands

```bash
npm install                    # Install dependencies
npm run dev                   # Start docs development server at http://localhost:3000
npm run dev:playground        # Start playground server for component testing
npm run build:lib            # Build library for distribution
npm run lint                 # Lint and fix code issues  
npm run lint:check           # Check lint issues without fixing
npm run type-check           # Run TypeScript type checking
npm run test                 # Run unit tests
npm run test:ui              # Run tests with UI
npm run test:coverage        # Run tests with coverage report
npm run quality-check        # Run all quality checks (lint + type + test)

# Publishing commands
npm run publish:dry          # Test publish without actually publishing
npm run release:patch        # Release patch version (0.1.0 -> 0.1.1)
npm run release:minor        # Release minor version (0.1.0 -> 0.2.0)
npm run release:major        # Release major version (0.1.0 -> 1.0.0)
```

## Project Structure

```
packages/
├── components/
│   ├── basic/              # Basic UI components
│   ├── advanced/           # Complex interactive components  
│   └── business/           # Business logic components
├── types/                  # TypeScript type definitions
├── theme/                  # Theme configuration
└── utils/                  # Shared utilities

playground/                 # Development playground
test/                      # Test setup and utilities
```

## Component Development

1. **Location**: Components go in `packages/components/{category}/{component-name}/`
2. **Structure**: Each component needs:
   - `Component.vue` - Main component file
   - `index.ts` - Export and install function
   - `Component.test.ts` - Unit tests
3. **Types**: Define props interfaces in `packages/types/`
4. **Exports**: Add to parent `index.ts` files for proper tree-shaking

## Architecture Patterns

**Component Extension Strategy**: All components wrap and extend Ant Design Vue components rather than rebuilding from scratch. This provides:
- Consistent API surface with AntD ecosystem
- Built-in accessibility and interaction patterns
- Custom enhancements through props and styling

**Multi-Environment Build System**: Three Vite configurations for different purposes:
- `vite.config.ts`: Development playground server (`npm run dev:playground`)
- `vite.config.docs.ts`: Documentation site server (`npm run dev`) running on port 3000
- `vite.config.lib.ts`: Library build with TypeScript declarations (`npm run build:lib`)

**Path Aliases**: Consistent `@/` prefix mapping to `packages/` directory enables clean imports:
```typescript
'@': resolve(__dirname, 'packages'),
'@/components': resolve(__dirname, 'packages/components'),
'@/utils': resolve(__dirname, 'packages/utils'),
'@/types': resolve(__dirname, 'packages/types'),
'@/theme': resolve(__dirname, 'packages/theme')
```

**Publishing Strategy**: Scoped package `@yourcompany/uni-components` with internal npm registry. Automated quality gates via `prepublishOnly` hook run comprehensive checks and auto-build if needed.

**Component Registration**: All components exported through main `packages/index.ts` with Vue plugin pattern supporting both full import (`app.use(UniComponents)`) and selective import (`import { Button } from '@yourcompany/uni-components'`).

## Component Development Patterns

- **File Structure**: Each component requires `.vue`, `index.ts`, and `.test.ts` files
- **Export Pattern**: Components export both named export and Vue plugin with `.install()` method
- **Type Definitions**: Centralized in `packages/types/` with shared base interfaces
- **CSS Naming**: `uni-` prefix for component-specific styles, scoped CSS for isolation
- **Testing**: Vitest with @vue/test-utils and jsdom environment, includes ResizeObserver/IntersectionObserver mocks

## Testing Setup

**Test Environment**: Uses jsdom with global test utilities and setup files:
- `vitest.config.ts`: Test configuration with same path aliases as main project
- `test/setup.ts`: Mock browser APIs (ResizeObserver, IntersectionObserver) required for Ant Design Vue

**Running Specific Tests**: Use standard Vitest patterns:
```bash
npm run test Button.test.ts        # Run specific test file
npm run test -- --watch           # Watch mode
npm run test:ui                    # Visual test runner
```

## Publishing Workflow

**Pre-publish Validation**: The `prepublishOnly` hook runs `scripts/check-publish.js` which validates:
- Required files exist (README.md, CHANGELOG.md, .npmrc)
- package.json has correct scoped name and entry points
- Build artifacts exist in dist/ (auto-builds if missing)
- Git working directory status

**Release Process**: Automated versioning with `scripts/release.js` handles version bumping and publishing to internal registry configured for `@yourcompany` scope only.