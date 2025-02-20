
// Remove the ad banner directly via JavaScript
window.addEventListener('DOMContentLoaded', () => {
    const adBanner = document.querySelector('img[src="/images/premium_ads/billboard_premium.png"]');
    if (adBanner) {
        adBanner.style.display = 'none';
    }
});
