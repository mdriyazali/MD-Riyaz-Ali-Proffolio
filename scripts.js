document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    window.addEventListener('scroll', function() {
        const currentScroll = window.scrollY;
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 60;
            const sectionHeight = section.clientHeight;

            if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
                const currentId = section.getAttribute('id');
                removeAllActiveClasses();
                addActiveClass(currentId);
            }
        });
    });

    function removeAllActiveClasses() {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
    }

    function addActiveClass(id) {
        const activeLink = document.querySelector(`nav ul li a[href="#${id}"]`);
        activeLink.classList.add('active');
    }

    function scrollToSection(sectionId) {
        const targetSection = document.getElementById(sectionId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Add the scrollToSection function to the global scope
    window.scrollToSection = scrollToSection;
});
