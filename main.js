var typed= new Typed(".text", {
    strings: ["Frontend developer", "Problem Solver" , "Learner"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar a');

    // Add scroll event listener to window
    window.addEventListener('scroll', () => {
        // Get the current scroll position
        let scrollY = window.pageYOffset;

        // Iterate over each section to check its position relative to the viewport
        sections.forEach(currentSection => {
            const sectionHeight = currentSection.offsetHeight;
            const sectionTop = currentSection.offsetTop - 50; // Adjusted for the height of the navbar

            // Check if the scroll position is within the boundaries of the section
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                // Get the id of the current section
                const sectionId = currentSection.getAttribute('id');

                // Remove any existing active class from navbar links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // Add active class to the corresponding navbar link
                document.querySelector(`.navbar a[href*=${sectionId}]`).classList.add('active');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const heading = document.querySelector(".about .heading");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heading.classList.add("visible");
            } else {
                heading.classList.remove("visible");
            }
        });
    }, {
        threshold: 0.5 // Adjust this value to control when the heading becomes visible
    });

    observer.observe(heading);
});

document.addEventListener("DOMContentLoaded", function () {
    const heading = document.querySelector(".education .heading");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heading.classList.add("visible");
            } else {
                heading.classList.remove("visible");
            }
        });
    }, {
        threshold: 0.5 // Adjust this value to control when the heading becomes visible
    });

    observer.observe(heading);
});

document.addEventListener("DOMContentLoaded", function () {
    const heading = document.querySelector(".skills .heading");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heading.classList.add("visible");
            } else {
                heading.classList.remove("visible");
            }
        });
    }, {
        threshold: 0.5 // Adjust this value to control when the heading becomes visible
    });

    observer.observe(heading);
});

document.addEventListener("DOMContentLoaded", function () {
    const heading = document.querySelector(".projects .heading");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heading.classList.add("visible");
            } else {
                heading.classList.remove("visible");
            }
        });
    }, {
        threshold: 0.5 // Adjust this value to control when the heading becomes visible
    });

    observer.observe(heading);
});

document.addEventListener("DOMContentLoaded", function () {
    const heading = document.querySelector(".contact-text .heading");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heading.classList.add("visible");
            } else {
                heading.classList.remove("visible");
            }
        });
    }, {
        threshold: 0.2 // Adjust this value to control when the heading becomes visible
    });

    observer.observe(heading);
});

document.addEventListener("DOMContentLoaded", function () {
    const heading = document.querySelector(".contact-text .he");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heading.classList.add("visible");
            } else {
                heading.classList.remove("visible");
            }
        });
    }, {
        threshold: 0.5 // Adjust this value to control when the heading becomes visible
    });

    observer.observe(heading);
});

document.addEventListener("DOMContentLoaded", function () {
    const paragraph = document.querySelector(".abt .about-text p");

    // Split paragraph into individual lines wrapped in span elements
    const lines = paragraph.innerHTML.split('<br>').map(line => `<span>${line}</span>`).join('<br>');
    paragraph.innerHTML = lines;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                paragraph.classList.add("visible");
            } else {
                paragraph.classList.remove("visible");
            }
        });
    }, {
        threshold: 0.5 // Adjust this value to control when the paragraph becomes visible
    });

    observer.observe(paragraph);
});

document.addEventListener("DOMContentLoaded", function () {
    const imageSection = document.querySelector(".abt .about-img");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                imageSection.classList.add("visible");
            } else {
                imageSection.classList.remove("visible");
            }
        });
    }, {
        threshold: 0.5 // Adjust this value to control when the image section becomes visible
    });

    observer.observe(imageSection);
});

document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-content');

    function checkIfInView() {
        timelineItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                item.classList.add('in-view');
            } else {
                item.classList.remove('in-view');
            }
        });
    }

    window.addEventListener('scroll', checkIfInView);
    window.addEventListener('resize', checkIfInView);

    // Initial check in case elements are already in view
    checkIfInView();
});

document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.heading1');

    function checkIfInView() {
        timelineItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                item.classList.add('in-view');
            } else {
                item.classList.remove('in-view');
            }
        });
    }

    window.addEventListener('scroll', checkIfInView);
    window.addEventListener('resize', checkIfInView);

    // Initial check in case elements are already in view
    checkIfInView();
});

document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-content1');

    function checkIfInView() {
        timelineItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                item.classList.add('in-view');
            } else {
                item.classList.remove('in-view');
            }
        });
    }

    window.addEventListener('scroll', checkIfInView);
    window.addEventListener('resize', checkIfInView);

    // Initial check in case elements are already in view
    checkIfInView();
});

document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.progress-line span');

    function checkIfInView() {
        timelineItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                item.classList.add('in-view');
            } else {
                item.classList.remove('in-view');
            }
        });
    }

    window.addEventListener('scroll', checkIfInView);
    window.addEventListener('resize', checkIfInView);

    // Initial check in case elements are already in view
    checkIfInView();
});

document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll('.port-box');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animated');
                    entry.target.querySelector('.port-content').classList.add('show');
                }, index * 200); // Adjust the delay for staggered animation
                
                // Hide the text after some time
                setTimeout(() => {
                    entry.target.querySelector('.port-content').classList.remove('show');
                }, 2000); // Text stays visible for 3 seconds

            } else {
                entry.target.classList.remove('animated');
                entry.target.querySelector('.port-content').classList.remove('show');
            }
        });
    }, observerOptions);

    boxes.forEach(box => {
        observer.observe(box);
    });
});