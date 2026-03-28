# Semantic Commit Messages

[Semantic commit messages](https://www.conventionalcommits.org/en/v1.0.0/) are a standardized way of writing commit messages that convey the intent and impact of the changes made in a commit. They follow a specific format that helps developers understand the purpose of a commit at a glance.

Format: `<type>(<scope>): <subject>`
`<scope>` is optional.

Examples:
- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

