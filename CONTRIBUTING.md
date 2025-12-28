Contributing to Skip-O-Matic

First off, thank you for considering contributing to Skip-O-Matic! It's people like you that make the open-source community a great place to build tools that matter.

By contributing, you are helping make the web more accessible and safer for drivers everywhere.

🟢 How Can I Contribute?

Reporting Bugs

YouTube updates its UI frequently. If the extension stops clicking a button or gets stuck:

Check the Issues page to see if it's already reported.

If not, open a new issue.

Important: Include the URL where it happened and, if possible, a screenshot of the browser console (F12 -> Console tab).

Suggesting Enhancements

We are always looking for ways to make the "Zero-Interaction" experience better. Whether it's support for new platforms (like Hulu or Twitch) or better mobile Safari support, please open an issue to discuss it.

Pull Requests

Fork the repo and create your branch from main.

If you've added code that should be tested, add some examples of videos where the new logic triggers.

Ensure your code follows the existing style (clean, commented JavaScript).

Issue that pull request!

🛠️ Local Development Setup

Clone your fork locally.

Make your changes to content.js or popup.html.

Go to chrome://extensions.

Click the Refresh icon on the Skip-O-Matic card to load your changes.

Test on YouTube.

📜 Technical Standards

No External Dependencies: Keep the extension lightweight. Avoid adding heavy libraries.

Privacy First: Never add code that tracks user identifiable information (PII).

Performance: Since MutationObserver runs constantly, ensure your ad-detection logic is highly optimized to avoid CPU spikes.

⚖️ License

By contributing, you agree that your contributions will be licensed under its MIT License.

💬 Community & Conduct

Please be respectful and constructive in issues and pull requests. We are all here to build something useful!

Questions? Feel free to reach out via GitHub Issues or contact the maintainer directly through LinkedIn.
