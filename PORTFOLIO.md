# Portfolio Framing

## Voice Card

Direct, warm, plain, no buzzwords.

## Before / After

- **Before:** I leveraged state-of-the-art parameters and optimized robust validation schemas to engineer an enterprise-ready settings interface.
- **After:** I wrote strict Zod schemas and automated unit tests to stop broken username formats and weak passwords from ever hitting the database.

## Case Study: Specification-Driven Settings Form

- **The Problem:** Vague AI prompts generate shallow, generic code. When building a standard settings form with a simple "make a validated form" instruction, the output lacked input filtering, completely ignored screen-reader accessibility, and carried brittle regex patterns that missed critical security edge cases.
- **What I Did (and what I decided):** I rebuilt the form from scratch using a strict explore-plan-code-verify loop. I explicitly commanded the AI to use React Hook Form paired with Zod schemas to handle alphanumeric rules and conditional password requirements. I refused to write loose markup, choosing instead to link every visual inline error state directly to native HTML inputs via explicit `aria-invalid` and `aria-describedby` attributes.
- **What Came of It:** The final outcome was a production-ready, zero-bug form. During the automated test run, the test suite caught a faulty AI-generated regex pattern that failed when a special character appeared at the very beginning of the password string. Because the workflow prioritized automated verification over manual checking, I caught the edge case instantly, fed the test logs back to the AI for a clean regex fix, and achieved a secure, fully accessible component.

## Bio & Contact/CTA

Building clean, test-driven interfaces in Dhaka. View my recent code workflows at github.com/nusratjahan7/my-capstone-project2 or reach out via email.
