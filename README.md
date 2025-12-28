# skip-o-matic
A hands-free YouTube ad skipper for safer driving and Accessibility needs

Skip-O-Matic is an open-source browser extension built to solve a critical safety and accessibility gap: the requirement for manual interaction to skip advertisements during "eyes-busy" activities like driving or for users with motor impairments.

🚀 The Mission

While YouTube provides a "Drive Mode," it still requires users to manually tap the "Skip Ad" button when it appears. For drivers, this creates a dangerous second of distraction. Skip-O-Matic acts as an Accessibility Engine, detecting these UI cues and automating the interaction to keep your hands on the wheel and eyes on the road.

✨ Features

Zero-Interaction Skipping: Automatically detects and clicks "Skip Ad" buttons as soon as they become available.

Speed-Fast Engine: Dynamically increases the playback rate of unskippable ad segments to minimize interruption.

Driver-Centric Design: Built with a "set and forget" philosophy.

Privacy-First Telemetry: Uses anonymous heartbeat pings to track global impact without collecting personal data or browsing history.

🛠️ Technical Implementation

MutationObserver API: Monitors the DOM for dynamic changes to ensure high-speed detection of ad overlays.

Manifest V3: Built on the latest Chrome extension standards for better security and performance.

Telemetry: Integrated with Umami Cloud via a privacy-safe pixel heartbeat to track Daily Active Users (DAU) and total skips globally.

Storage API: Maintains local user statistics to show your personal time saved.

📥 Installation (Developer Mode)

As this is currently a hobbyist/research project, it is distributed as an "Unpacked" extension:

Download/Clone this repository to a local folder.

Open your browser and navigate to chrome://extensions (or edge://extensions).

Enable "Developer mode" in the top right corner.

Click "Load unpacked" and select the folder containing the project files.

Open YouTube and enjoy a truly hands-free experience.

📊 Impact Tracking

We believe in transparency. This project tracks:

Daily Active Users (DAU): An anonymous heartbeat sent once every 24 hours.

Total Skips: A simple count of successful ad interactions.

Note: We do NOT track IP addresses, YouTube account details, or video history.

⚖️ License

Distributed under the MIT License. See LICENSE for more information.

🤝 Contributing

Contributions are what make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

Disclaimer: This project is an independent accessibility tool and is not affiliated with, authorized, maintained, sponsored, or endorsed by YouTube or Google.
