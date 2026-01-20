// Typing Animation for "Raka Maharjan"
const typingText = document.getElementById('typingText');
        const nameText = "Raka Maharjan";
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        let pauseTime = 1500; // Time to pause before starting to delete

        function typeName() {
            const currentText = typingText.textContent;
            
            if (!isDeleting) {
                // Typing phase
                typingText.textContent = nameText.substring(0, charIndex + 1);
                charIndex++;
                
                if (charIndex === nameText.length) {
                    // Pause at the end of typing
                    typingSpeed = pauseTime;
                    isDeleting = true;
                } else {
                    typingSpeed = 100;
                }
            } else {
                // Deleting phase
                typingText.textContent = nameText.substring(0, charIndex - 1);
                charIndex--;
                
                if (charIndex === 0) {
                    // Reset for typing again
                    typingSpeed = 500;
                    isDeleting = false;
                } else {
                    typingSpeed = 50;
                }
            }
            
            setTimeout(typeName, typingSpeed);
        }

        // Start typing animation after page loads
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(typeName, 1000);
        });

        // Mobile Menu Toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.querySelector('.nav-links');
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Form Submission
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this data to a server
            alert(`Thank you for your message, ${name}! I'll get back to you soon at ${email}.`);
            
            // Reset form
            contactForm.reset();
        });

        // Fade-in animation on scroll
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const fadeInOnScroll = () => {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.classList.add('appear');
                }
            });
        };
        
        // Initial check
        fadeInOnScroll();
        
        // Check on scroll
        window.addEventListener('scroll', fadeInOnScroll);

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
