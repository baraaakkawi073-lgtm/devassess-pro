# Contributing to DevAssess Pro

Thanks for your interest in contributing! This project follows a small, friendly
process designed for first-time open-source contributors.

## Development setup

```bash
git clone https://github.com/baraaakkawi073-lgtm/devassess-pro.git
cd devassess-pro
npm install          # installs root, server and client dependencies
cp .env.example .env # optional, sensible defaults work out of the box
npm run dev          # starts API (:5000) and web app (:3000)
```

## Project layout

| Path        | Purpose                                             |
| ----------- | --------------------------------------------------- |
| `server/`   | Node.js / Express REST API and question datasets    |
| `client/`   | React + Vite + Tailwind CSS single-page application |
| `docs/`     | Technical report and architecture case study        |

## Workflow

1. Fork the repository and create a branch: `git checkout -b feature/my-change`.
2. Make your changes following the conventions already present in the codebase.
3. Add or update questions in `server/src/data/*.js` using the existing schema.
4. Run the checks below and make sure everything passes.
5. Open a pull request with a clear description of the change.

## Checks before opening a PR

```bash
npm test        # API unit tests (scoring engine)
npm run build   # production build of the React client
```

## Question guidelines

- Every question needs exactly one correct answer (`answer` is a zero-based
  option index) and a non-empty `explanation`.
- Prefer explanations that teach the *why*, not just the answer.
- Keep wording neutral, typo-free and free of brand-specific trivia.
- Use the `difficulty` field: `easy`, `medium` or `hard`.

## Reporting bugs

Open an issue with:

- Steps to reproduce
- Expected vs. actual behaviour
- Node.js and OS versions

## License

By contributing you agree that your contributions are licensed under the
[MIT License](LICENSE).
