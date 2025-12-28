Skip-O-Matic: The Open Source Ad Skipper

A privacy-focused, lightweight extension that automatically clicks the "Skip Ad" button on YouTube and fast-forwards unskippable ads.

Features

Auto-Skip: Instantly clicks "Skip Ad" buttons.

Speed Hack: Detects unskippable ads and speeds them up by 16x (effectively skipping them).

Stats: Tracks how many ads you've avoided.

Safe: Runs locally on your browser, no data collection.

Installation (Developer Mode)

Since this is a hobby project, it is not on the Chrome Web Store. You can install it manually in 1 minute:

Download the Code:

Create a folder on your computer named skip-o-matic.

Save manifest.json, content.js, and popup.html inside that folder.

(Optional) Create an icons folder inside and add a 48x48px PNG named icon48.png if you want a pretty icon.

Load into Chrome/Brave/Edge:

Open your browser and go to chrome://extensions (or edge://extensions).

Top right corner: Enable Developer Mode.

Top left: Click Load Unpacked.

Select the skip-o-matic folder you created.

Test it:

Go to YouTube and open a video.

Open the extension menu to see your stats!

How it Works

It uses a MutationObserver to watch the YouTube player for the appearance of ad overlays. If it sees a "Skip" button, it clicks it. If it sees an ad video playing without a skip button, it sets the playback speed to 16x to fast-forward through it.