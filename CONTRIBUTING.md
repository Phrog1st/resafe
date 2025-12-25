# Contributing to Resafe

Thank you for your interest in contributing to Resafe! This document provides guidelines and instructions for contributing.

## Getting Started

### Prerequisites

- Node.js 16.0.0 or higher
- Bun 

### Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/resafe.git
   cd resafe
   ```

3. Install dependencies:
   ```bash
   bun install
   ```

4. Run tests:
   ```bash
   bun test
   ```

## Development Workflow

### Project Structure

```
resafe/
├── packages/resafe/       # Core library
│   ├── src/
│   │   ├── core/         # Spectral analysis engine
│   │   └── utils/        # Utilities
│   └── tests/            # Test files
└── apps/docs/            # Documentation site
```

### Making Changes

1. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes following our coding standards

3. Add tests for new functionality

4. Run tests to ensure everything passes:
   ```bash
   bun test
   ```

5. Commit your changes:
   ```bash
   git commit -m "feat: add new feature"
   ```

### Commit Convention

Follow conventional commits:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `test:` Test changes
- `refactor:` Code refactoring
- `perf:` Performance improvements

## Testing

- Write tests for all new features
- Ensure all tests pass before submitting PR
- Test files are located in `packages/resafe/tests/`

Example test:
```ts
import { describe, it, assert } from "poku"
import { check } from "../src/index.ts"

describe("Feature", () => {
  it("should work correctly", () => {
    const result = check("(a+)+", { silent: true })
    assert.strictEqual(result.safe, false)
  })
})
```

## Documentation

- Update documentation for new features
- Documentation is in `apps/docs/content/docs/`
- Follow existing documentation style

## Pull Request Process

1. Update README.md if needed
2. Update documentation if needed
3. Ensure all tests pass
4. Create a Pull Request with:
   - Clear title and description
   - Reference any related issues
   - Screenshots/examples if applicable

## Core Algorithm

Resafe uses Thompson NFA construction with spectral radius analysis:

1. **Thompson NFA**: Converts regex to finite automaton
2. **Epsilon Elimination**: Removes ε-transitions
3. **Adjacency Matrix**: Builds state transition matrix
4. **Spectral Radius**: Computes largest eigenvalue
5. **Detection**: radius > 1.0 indicates ReDoS

When contributing to the core algorithm, ensure mathematical correctness.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
