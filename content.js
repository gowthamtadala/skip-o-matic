// content.js - Ad Hunter + Daily Active User (DAU) Heartbeat

// 1. CONFIGURATION
const UMAMI_PIXEL_URL = "https://cloud.umami.is/p/8Ta4vNN81";

// 2. DAU HEARTBEAT LOGIC
// This fires once every 24 hours per user to count them as "Active"
const sendHeartbeat = () => {
    const today = new Date().toDateString(); // e.g., "Sat Dec 27 2025"

    chrome.storage.local.get(['lastHeartbeat'], (result) => {
        if (result.lastHeartbeat !== today) {
            // It's a new day for this user! Send the pixel.
            const img = new Image();
            img.src = `${UMAMI_PIXEL_URL}?type=heartbeat&cb=${Date.now()}`;
            
            // Save today's date so we don't ping again until tomorrow
            chrome.storage.local.set({ lastHeartbeat: today });
            console.log("[Skip-O-Matic] Daily Heartbeat sent to Umami.");
        }
    });
};

// 3. AD SKIP LOGIC
const handleAds = () => {
    const skipButton = document.querySelector('.ytp-ad-skip-button, .ytp-ad-skip-button-modern, .ytp-ad-skip-button-slot');

    if (skipButton && isVisible(skipButton)) {
        // Click the button
        skipButton.click();
        
        // Track the skip locally for the popup stats
        chrome.storage.local.get(['stats'], (res) => {
            chrome.storage.local.set({ stats: (res.stats || 0) + 1 });
        });

        // OPTIONAL: Send a pixel for every skip too? 
        // Note: This might hit your Umami free limit faster. 
        // If you only want to see USERS, the heartbeat above is enough.
        const skipPing = new Image();
        skipPing.src = `${UMAMI_PIXEL_URL}?type=skip&cb=${Date.now()}`;
    }
};

const isVisible = (el) => !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);

// 4. INITIALIZATION
sendHeartbeat(); // Run once on page load
setInterval(handleAds, 1000); // Check for ads every second

console.log("[Skip-O-Matic] Extension active.");
