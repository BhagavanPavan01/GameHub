document.addEventListener('DOMContentLoaded', function () {
    // Sample game data
    const games = [
        {
            id: 1,
            title: "Cyberpunk 2077",
            genre: "RPG",
            rating: 4.5,
            platforms: ["windows", "steam", "xbox"],
            image: "https://via.placeholder.com/400x300?text=Cyberpunk+2077",
            description: "An open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification."
        },
        {
            id: 2,
            title: "Elden Ring",
            genre: "Action RPG",
            rating: 4.8,
            platforms: ["windows", "steam"],
            image: "https://via.placeholder.com/400x300?text=Elden+Ring",
            description: "A new fantasy action RPG where players embark on an epic journey through the Lands Between."
        },
        {
            id: 3,
            title: "Red Dead Redemption 2",
            genre: "Action-Adventure",
            rating: 4.9,
            platforms: ["windows", "steam", "rockstar"],
            image: "https://via.placeholder.com/400x300?text=Red+Dead+Redemption+2",
            description: "An epic tale of life in America's unforgiving heartland at the dawn of the modern age."
        },
        {
            id: 4,
            title: "The Witcher 3: Wild Hunt",
            genre: "RPG",
            rating: 4.9,
            platforms: ["windows", "steam", "gog"],
            image: "https://via.placeholder.com/400x300?text=The+Witcher+3",
            description: "A story-driven open world RPG set in a visually stunning fantasy universe."
        },
        {
            id: 5,
            title: "Doom Eternal",
            genre: "FPS",
            rating: 4.7,
            platforms: ["windows", "steam", "bethesda"],
            image: "https://via.placeholder.com/400x300?text=Doom+Eternal",
            description: "Hell's armies have invaded Earth. Become the Slayer in an epic single-player campaign."
        },
        {
            id: 6,
            title: "Assassin's Creed Valhalla",
            genre: "Action RPG",
            rating: 4.6,
            platforms: ["windows", "ubisoft", "epic"],
            image: "https://via.placeholder.com/400x300?text=Assassin's+Creed+Valhalla",
            description: "Become Eivor, a Viking raider raised to be a fearless warrior, and lead your clan from Norway to a new home."
        },
        {
            id: 7,
            title: "Star Wars Jedi: Fallen Order",
            genre: "Action-Adventure",
            rating: 4.5,
            platforms: ["windows", "steam", "origin"],
            image: "https://via.placeholder.com/400x300?text=Star+Wars+Jedi",
            description: "A galaxy-spanning adventure begins where you must rebuild the Jedi Order."
        },
        {
            id: 8,
            title: "Hades",
            genre: "Roguelike",
            rating: 4.8,
            platforms: ["windows", "steam", "epic"],
            image: "https://via.placeholder.com/400x300?text=Hades",
            description: "Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler."
        },
        {
            id: 9,
            title: "Microsoft Flight Simulator",
            genre: "Simulation",
            rating: 4.7,
            platforms: ["windows", "xbox"],
            image: "https://via.placeholder.com/400x300?text=Flight+Simulator",
            description: "Fly highly detailed and stunning aircraft in an incredibly realistic world."
        }
    ];

    // Display initial games
    const gamesContainer = document.getElementById('games-container');
    const loadMoreBtn = document.getElementById('load-more');
    let displayedGames = 6;

    function displayGames(start, end) {
        for (let i = start; i < end && i < games.length; i++) {
            const game = games[i];

            const gameCard = document.createElement('div');
            gameCard.className = 'col-lg-4 col-md-6 fade-in';
            gameCard.innerHTML = `
                <div class="game-card card border-0 shadow-sm h-100">
                    <img src="${game.image}" class="card-img-top" alt="${game.title}">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <span class="badge bg-primary">${game.genre}</span>
                            <div class="platforms">
                                ${game.platforms.map(platform =>
                `<i class="fab fa-${platform} me-1"></i>`
            ).join('')}
                            </div>
                        </div>
                        <h5 class="card-title">${game.title}</h5>
                        <p class="card-text text-muted">${game.description}</p>
                    </div>
                    <div class="card-footer bg-white border-0">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="rating">
                                ${game.rating}
                            </div>
                            <a href="#" class="btn btn-sm btn-outline-primary">View Details</a>
                        </div>
                    </div>
                </div>
            `;

            gamesContainer.appendChild(gameCard);
        }
    }

    // Initial display
    displayGames(0, displayedGames);

    // Load more games
    loadMoreBtn.addEventListener('click', function () {
        const prevDisplayed = displayedGames;
        displayedGames += 3;
        displayGames(prevDisplayed, displayedGames);

        if (displayedGames >= games.length) {
            loadMoreBtn.style.display = 'none';
        }

        // Scroll to the newly loaded games
        setTimeout(() => {
            const newCards = document.querySelectorAll('.fade-in');
            const lastCard = newCards[newCards.length - 1];
            lastCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    backToTopBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput.value) {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }
        });
    }

    // Contact form submission
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
});

// Enhanced Slideshow with Dot Navigation
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.game-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    // Convert accent colors to RGB for pulse animation
    document.querySelectorAll('.game-slide').forEach(slide => {
        const accent = getComputedStyle(slide).getPropertyValue('--game-accent');
        const rgb = hexToRgb(accent);
        slide.style.setProperty('--game-accent-rgb', `${rgb.r}, ${rgb.g}, ${rgb.b}`);
    });

    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
            slide.querySelector('.game-content').style.animation = 'none';
            void slide.querySelector('.game-content').offsetWidth; // Trigger reflow
        });

        // Update dots
        dots.forEach(dot => dot.classList.remove('active'));

        // Show selected slide
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        slides[index].querySelector('.game-content').style.animation = 'slideInUp 0.8s both';

        currentSlide = index;
    }

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    // Dot click events
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });

    // Auto-rotate slides
    const slideInterval = setInterval(nextSlide, 5000);

    // Pause on hover
    const slideshow = document.querySelector('.game-slideshow');
    slideshow.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slideshow.addEventListener('mouseleave', () => {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    });

    // Initialize first slide
    showSlide(0);

    // Helper function to convert hex to rgb
    function hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : { r: 0, g: 0, b: 0 };
    }
});

// =========================== Search box and functions ===========================

// document.addEventListener('DOMContentLoaded', function () {
//     // Get elements
//     const searchForm = document.getElementById('gameSearchForm');
//     const searchInput = document.getElementById('gameSearchInput');
//     const resultsModal = new bootstrap.Modal(document.getElementById('gameResultsModal'));
//     const searchStatus = document.getElementById('searchStatus');
//     const downloadOptions = document.getElementById('downloadOptions');
//     const searchedGameElement = document.getElementById('searchedGame');

//     // Search form handler
//     searchForm.addEventListener('submit', function (e) {
//         e.preventDefault();
//         const gameName = searchInput.value.trim();

//         if (gameName) {
//             showLoading(gameName);
//             setTimeout(() => showResults(gameName), 1000);
//         }
//     });

//     function showLoading(gameName) {
//         searchedGameElement.textContent = gameName;
//         searchStatus.classList.remove('d-none');
//         downloadOptions.classList.add('d-none');
//         resultsModal.show();
//     }

//     function showResults(gameName) {
//         searchStatus.classList.add('d-none');
//         downloadOptions.classList.remove('d-none');
//         downloadOptions.innerHTML = '';

//         const options = createGameOptions(gameName);
//         options.forEach(option => {
//             downloadOptions.appendChild(createOptionCard(option));
//         });
//     }

//     function createGameOptions(gameName) {
//         return [
//             {
//                 title: "Search on Gaming Sites",
//                 icon: "fa-search",
//                 color: "info",
//                 links: [
//                     createLink("Steam", `https://store.steampowered.com/search/?term=${encodeURIComponent(gameName)}`, "https://store.steampowered.com/"),
//                     createLink("Epic Games", `https://store.epicgames.com/en-US/browse?q=${encodeURIComponent(gameName)}`, "https://store.epicgames.com/en-US"),
//                     createLink("GOG", `https://www.gog.com/en/games?query=${encodeURIComponent(gameName)}`, "https://www.gog.com/en/")
//                 ]
//             },
//             {
//                 title: "Direct Store Links",
//                 icon: "fa-store",
//                 color: "primary",
//                 links: [
//                     createLink("Steam Store", "https://store.steampowered.com/"),
//                     createLink("Epic Games Store", "https://store.epicgames.com/en-US"),
//                     createLink("GOG Store", "https://www.gog.com/en/")
//                 ]
//             },
//             {
//                 title: "Other Options",
//                 icon: "fa-ellipsis-h",
//                 color: "secondary",
//                 links: [
//                     createLink("Google Search", `https://www.google.com/search?q=${encodeURIComponent(gameName)}+game`),
//                     createLink("YouTube Videos", `https://www.youtube.com/results?search_query=${encodeURIComponent(gameName)}+gameplay`)
//                 ]
//             }
//         ];
//     }

//     function createLink(name, url, directUrl = null) {
//         return { name, url, directUrl };
//     }

//     function createOptionCard(option) {
//         const col = document.createElement('div');
//         col.className = 'col-md-4 mb-4';

//         const card = document.createElement('div');
//         card.className = `game-option-card card bg-dark text-white border-${option.color}`;

//         const cardBody = document.createElement('div');
//         cardBody.className = 'card-body';

//         // Card header with icon and title
//         const icon = document.createElement('i');
//         icon.className = `option-icon fas ${option.icon} text-${option.color} mb-3 d-block text-center`;

//         const title = document.createElement('h5');
//         title.className = 'card-title text-center';
//         title.textContent = option.title;

//         cardBody.appendChild(icon);
//         cardBody.appendChild(title);

//         // Links list
//         const listGroup = document.createElement('div');
//         listGroup.className = 'list-group list-group-flush mt-3';

//         option.links.forEach(link => {
//             const listItem = document.createElement('div');
//             listItem.className = 'list-group-item bg-transparent text-white border-secondary p-1';

//             const btnGroup = document.createElement('div');
//             btnGroup.className = 'd-flex';

//             // Main action button
//             const mainBtn = document.createElement('button');
//             mainBtn.className = 'btn btn-sm btn-outline-light flex-grow-1 text-start';
//             mainBtn.textContent = link.name;
//             mainBtn.addEventListener('click', () => window.open(link.url, '_blank'));

//             btnGroup.appendChild(mainBtn);

//             // Direct link button (if available)
//             if (link.directUrl) {
//                 const directBtn = document.createElement('button');
//                 directBtn.className = 'btn btn-sm btn-outline-secondary ms-2';
//                 directBtn.innerHTML = '<i class="fas fa-home"></i>';
//                 directBtn.title = 'Go to homepage';
//                 directBtn.addEventListener('click', (e) => {
//                     e.stopPropagation();
//                     window.open(link.directUrl, '_blank');
//                 });
//                 btnGroup.appendChild(directBtn);
//             }

//             listItem.appendChild(btnGroup);
//             listGroup.appendChild(listItem);
//         });

//         cardBody.appendChild(listGroup);
//         card.appendChild(cardBody);
//         col.appendChild(card);

//         return col;
//     }

//     // Ensure close buttons work
//     document.querySelectorAll('[data-bs-dismiss="modal"]').forEach(btn => {
//         btn.addEventListener('click', () => resultsModal.hide());
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    // Get the modal instance
    const resultsModal = new bootstrap.Modal(document.getElementById('gameResultsModal'));
    
    // Make sure close buttons work
    document.querySelectorAll('[data-bs-dismiss="modal"]').forEach(btn => {
        btn.addEventListener('click', function() {
            resultsModal.hide();
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Initialize modal
    const resultsModal = new bootstrap.Modal(document.getElementById('gameResultsModal'));
    
    // Make sure links work in modal
    document.querySelectorAll('#gameResultsModal a').forEach(link => {
        link.addEventListener('click', function(e) {
            // Let the default anchor behavior handle the navigation
            // target="_blank" will make it open in new tab
        });
    });

    // Search form submission handler
    document.getElementById('gameSearchForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const searchTerm = document.getElementById('gameSearchInput').value.trim();
        if (searchTerm) {
            resultsModal.show();
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('gameSearchForm');
    const searchInput = document.getElementById('gameSearchInput');
    const resultsModal = new bootstrap.Modal(document.getElementById('gameResultsModal'));

    // Handle form submission
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        
        if (searchInput.value.trim()) {
            resultsModal.show();
            
            // Optional: You can add search functionality here
            // For example: filter games based on searchInput.value
        }
    });
});