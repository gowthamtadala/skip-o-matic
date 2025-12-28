// content.js - Enhanced Ad Hunter

let autoSkipEnabled = true;
let totalSkipped = 0;

chrome.storage.local.get(['enabled', 'stats'], (result) => {
    if (result.enabled !== undefined) autoSkipEnabled = result.enabled;
    if (result.stats !== undefined) totalSkipped = result.stats;
});

const observer = new MutationObserver(() => {
    if (autoSkipEnabled) handleAds();
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true
});

function handleAds() {
    // 1. Check for the "Skip" button (including the one from your XPath area)
    const skipSelectors = [
        '.ytp-ad-skip-button',
        '.ytp-ad-skip-button-modern',
        '.ytp-ad-skip-button-slot', 
        'button.ytp-ad-skip-button',
        '.ytp-ad-overlay-close-button'
    ];

    for (const selector of skipSelectors) {
        const button = document.querySelector(selector);
        if (button && isVisible(button)) {
            console.log("[Skip-O-Matic] Found skip button via selector.");
            clickButton(button);
            return;
        }
    }

    // 2. Handle the "Stuck" state or Unskippable Ads
    const moviePlayer = document.querySelector('#movie_player');
    const adVideo = document.querySelector('.ad-showing video');

    if (moviePlayer && moviePlayer.classList.contains('ad-showing')) {
        if (adVideo) {
            // If the ad is finished or nearly finished but stuck
            if (adVideo.currentTime >= adVideo.duration - 0.5 || adVideo.ended) {
                console.log("[Skip-O-Matic] Ad stuck at end. Forcing skip...");
                // Try to find ANY button inside the ad player container and click it
                const adContainer = document.querySelector('.ytp-ad-player-overlay');
                if (adContainer) {
                    const anyButton = adContainer.querySelector('button');
                    if (anyButton) anyButton.click();
                }
                // Fallback: Just skip to the end of the video element
                adVideo.currentTime = adVideo.duration;
            } else {
                // If it's playing, speed it up
                adVideo.playbackRate = 16;
                adVideo.muted = true;
            }
        }
    }
}

function isVisible(elem) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
}

function clickButton(button) {
    const events = ['mousedown', 'mouseup', 'click'];
    events.forEach(eventType => {
        button.dispatchEvent(new MouseEvent(eventType, {
            view: window, bubbles: true, cancelable: true
        }));
    });
    
    totalSkipped++;
    chrome.storage.local.set({ 'stats': totalSkipped });
}

// Initial run
handleAds();