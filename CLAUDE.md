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
npm run dev                   # Start development server (playground at http://localhost:3000)
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

**Build System**: Dual configuration setup:
- `vite.config.ts`: Development playground (`npm run dev`)
- `vite.config.lib.ts`: Library build with TypeScript declarations (`npm run build:lib`)

**Path Aliases**: Consistent `@/` prefix mapping to `packages/` directory enables clean imports across the monorepo structure.

**Publishing Strategy**: Scoped package `@yourcompany/uni-components` with internal npm registry configuration. Only scoped packages use internal registry while dev dependencies use public npm.

## Component Development Patterns

- **File Structure**: Each component requires `.vue`, `index.ts`, and `.test.ts` files
- **Export Pattern**: Components export both named export and Vue plugin with `.install()` method
- **Type Definitions**: Centralized in `packages/types/` with shared base interfaces
- **CSS Naming**: `uni-` prefix for component-specific styles, scoped CSS for isolation
- **Testing**: Vitest with @vue/test-utils, focus on props, events, and edge cases

## Publishing Workflow

Uses automated quality gates via `prepublishOnly` hook and release scripts. Internal npm registry configured for `@yourcompany` scope only, allowing public dependencies while keeping company packages private.