    /* =============================================================================
   ARCHIVO: bannerHeader.js
   DESCRIPCIÓN: Funcionalidades JavaScript para el banner de anuncios del header
   AUTOR: Diana Chacón Ocariz
   FECHA: 2025
   ============================================================================= */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // =========================================================================
    // HEADER BANNER FUNCTIONALITY
    // =========================================================================
    const banner = document.getElementById('announcement-banner');
    const closeBanner = document.getElementById('close-banner');

    // Close banner functionality
    closeBanner.addEventListener('click', () => {
        banner.style.display = 'none';
        localStorage.setItem('bannerClosed', 'true');
    });


    // =========================================================================
    // BANNER HEADER MESSAGE ROTATION (Mobile)
    // =========================================================================
    const announcements = document.querySelectorAll('.header-announcement-item');
    let currentIndex = 0;
    let rotationInterval;

    function rotateHeaderAnnouncements() {
        const isMobile = window.innerWidth < 768;

        if (isMobile) { // Only on mobile
            announcements.forEach((item, index) => {
                item.style.display = index === currentIndex ? 'flex' : 'none';
            });
            currentIndex = (currentIndex + 1) % announcements.length;
        } else {
            // Show all on desktop
            announcements.forEach(item => {
                item.style.display = 'flex';
            });
        }
    }

    function startRotation() {
        rotateHeaderAnnouncements();
        if (rotationInterval) clearInterval(rotationInterval);
        rotationInterval = setInterval(rotateHeaderAnnouncements, 5000); // Change every 5 seconds
    }

    // Initial call and set up rotation
    startRotation();
    window.addEventListener('resize', startRotation);

   
    // =========================================================================
    // BANNER FOOTER MESSAGE ROTATION (Mobile)
    // =========================================================================
    const announcementsFooter = document.querySelectorAll('.footer-announcement-item');
    let currentIndexF = 0;
    let rotationIntervalF;

    function rotateFooterAnnouncements() {
        const isMobile = window.innerWidth < 768;

        if (isMobile) { // Only on mobile
            announcementsFooter.forEach((item, index) => {
                item.style.display = index === currentIndexF ? 'flex' : 'none';
            });
            currentIndexF = (currentIndexF + 1) % announcementsFooter.length;
        } else {
            // Show all on desktop
            announcementsFooter.forEach(item => {
                item.style.display = 'flex';
            });
        }
    }

    function startRotationFooter() {
        rotateFooterAnnouncements();
        if (rotationIntervalF) clearInterval(rotationIntervalF);
        rotationIntervalF = setInterval(rotateFooterAnnouncements, 5000); // Change every 5 seconds
    }

    // Initial call and set up rotation
    startRotationFooter();
    window.addEventListener('resize', startRotationFooter);

});