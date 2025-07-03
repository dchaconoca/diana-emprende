    // =========================================================================
    // BANNER FUNCTIONALITY
    // =========================================================================
    const banner = document.getElementById('announcement-banner');
    const closeBanner = document.getElementById('close-banner');
    const header = document.getElementById('main-header');

    // Close banner functionality
    closeBanner.addEventListener('click', () => {
        banner.style.display = 'none';
        // Adjust header position when banner is closed
        header.style.top = '0';
        // Save banner state in localStorage
        localStorage.setItem('bannerClosed', 'true');
    });

    // Check if banner was previously closed
    if (localStorage.getItem('bannerClosed') === 'true') {
        banner.style.display = 'none';
        header.style.top = '0';
    }

    // Adjust header position based on banner visibility
    function adjustHeaderPosition() {
        if (banner.style.display !== 'none') {
            const bannerHeight = banner.offsetHeight;
            header.style.top = bannerHeight + 'px';
        }
    }

    // Initial adjustment and on window resize
    adjustHeaderPosition();
    window.addEventListener('resize', adjustHeaderPosition);

    // =========================================================================
    // BANNER MESSAGE ROTATION (Mobile)
    // =========================================================================
    const announcements = document.querySelectorAll('.announcement-item');
    let currentIndex = 0;
    let rotationInterval;

    function rotateAnnouncements() {
        if (window.innerWidth < 768) { // Only on mobile
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
        rotateAnnouncements();
        if (rotationInterval) clearInterval(rotationInterval);
        rotationInterval = setInterval(rotateAnnouncements, 3000); // Change every 3 seconds
    }

    // Initial call and set up rotation
    startRotation();
    window.addEventListener('resize', startRotation);