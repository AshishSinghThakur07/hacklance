# Git & Contribution Standards

HACKLANCE enforces strict software engineering conventions for student developers and external contributors.

## Conventional Commits

All commit messages must follow:
```
<type>(<scope>): <imperative description>
```

- `feat`: User-facing feature
- `fix`: Bug correction
- `style`: CSS, design tokens, typography
- `refactor`: Structural reorganization
- `docs`: Documentation updates
- `test`: Verification and testing
- `chore`: Tooling, build config, dependencies

## Pull Request Lifecycle

1. Fork `https://github.com/AshishSinghThakur07/hacklance`
2. Create branch: `feature/your-feature-name`
3. Verify production build: `npm run build`
4. Verify documentation build: `npm run docs:build`
5. Open PR against `main` with detailed summary
