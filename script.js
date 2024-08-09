const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;

        darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        });

        new Typed('#typed', {
        strings: ['Aspiring AI/ML Engineer', 'Web Design Enthusiast', 'Passionate about Hacking & Crypto Trading'],
        typeSpeed: 90,
        backSpeed: 50,
        loop: true
        });

        const projects = document.querySelectorAll('.project');
        const modal = document.getElementById('projectModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalDescription = document.getElementById('modalDescription');
        const closeBtn = document.querySelector('.close');

        projects.forEach(project => {
        project.addEventListener('click', () => {
            modal.style.display = "block";
        });
        });

        closeBtn.onclick = () => modal.style.display = "none";

        window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        };

        let prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        document.getElementById("navbar").style.top = "0";
        prevScrollpos = currentScrollPos;
        };

        const menuToggle = document.querySelector('.menu-toggle');
        const navUl = document.querySelector('nav ul');

        menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('show');
        });

        document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            navUl.classList.remove('show');
        });
        });

        let currentSlide = 0;

        function showSlide(index) {
            const slides = document.querySelectorAll('.slider-content img');
            const totalSlides = slides.length;

            const newPosition = -(index * 100 / totalSlides)*2;
            document.querySelector('.slider-content').style.transform = `translateX(${newPosition}%)`;
            currentSlide = index;
        }

        function nextSlide() {
            const totalSlides = document.querySelectorAll('.slider-content img').length;
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }

        function nextSlide1() {
            showSlide(currentSlide + 1);
        }
        
        function prevSlide() {
            showSlide(currentSlide - 1);
        }
        showSlide(currentSlide);

        function toggleCertifications() {
            const content = document.querySelector('#certifications .content');
            const button = document.querySelector('.show-more');
        
            if (content.classList.contains('expanded')) {
                content.classList.remove('expanded');
                button.textContent = 'Show All ▼';
            } else {
                content.classList.add('expanded');
                button.textContent = 'Show Less ▲';
            }
        }