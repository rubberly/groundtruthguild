# Rounds: marketing site

A static site with no build step, deployed on Render with `render.yaml` (a Blueprint).

| Page | Purpose |
|---|---|
| `index.html` | Client pitch, process, pricing, FAQ |
| `raters.html` | Rater recruiting + application questions |
| `security.html` | Data handling commitments, for client security reviews |
| `privacy.html` | Privacy notice |

## Editing notes

- **Contact:** every link is a `mailto:` to LucasMaillet2019@gmail.com. Search and replace all of them when you get an email address on your own domain.
- **Pricing** comes from `annotation-ops/docs/go-to-market.md`. Those prices are starting hypotheses, so update both places together.
- **Canary:** `raters.html` question 4 has a hidden line (class `cnry`, `aria-hidden`) asking an AI to use the word "lighthouse". Reject applications that contain it, and change the word every few months.
- **Security page:** every claim on `security.html` must stay true of the actual platform and process. Update it before you change how data is handled.
- **Legal review:** the privacy and security pages are not legal advice. Have them reviewed before signing healthcare clients.
