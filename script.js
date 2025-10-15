 // Mobile menu toggle
        document.querySelector('.menu-toggle').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('.nav-links').classList.remove('active');
            });
        });

        // Resume tab switching
        document.querySelectorAll('.resume-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                document.querySelectorAll('.resume-tab').forEach(t => {
                    t.classList.remove('active');
                });
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                const tabId = this.getAttribute('data-tab');
                
                // Show/hide content based on tab
                document.querySelectorAll('.resume-content').forEach(content => {
                    content.classList.remove('active');
                });
                
                document.getElementById(`${tabId}-content`).classList.add('active');
            });
        });

        // Project category filtering
        document.querySelectorAll('.category-btn').forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                document.querySelectorAll('.category-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const category = this.getAttribute('data-category');
                
                // Show/hide projects based on category
                document.querySelectorAll('.project-card').forEach(card => {
                    if (category === 'all' || card.classList.contains(category)) {
                        card.classList.add('active');
                    } else {
                        card.classList.remove('active');
                    }
                });
            });
        });

        // Form submission
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });