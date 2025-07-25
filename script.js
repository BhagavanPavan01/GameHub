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

document.getElementById('gameSearchForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const query = document.getElementById('gameSearchInput').value.trim();
    if (!query) return;
    
    const modal = new bootstrap.Modal(document.getElementById('gameResultsModal'));
    
    // Show loading state
    document.getElementById('resultTitle').textContent = "Searching Games";
    document.getElementById('resultDescription').textContent = `Searching for "${query}"...`;
    document.getElementById('downloadOptions').innerHTML = '';
    modal.show();

    try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Enhanced game database with direct download links
        const gameDatabase = {
            "gta": {
                title: "Grand Theft Auto Series",
                platforms: [
                    { 
                        name: "Rockstar Games", 
                        icon: "fa-rockrms", 
                        color: "btn-danger", 
                        action: "Download", 
                        link: "https://www.rockstargames.com/downloads",
                        popupWidth: 800,
                        popupHeight: 600
                    },
                    { 
                        name: "Steam", 
                        icon: "fa-steam", 
                        color: "btn-primary", 
                        action: "Purchase", 
                        link: "https://store.steampowered.com/search/?term=grand+theft+auto",
                        popupWidth: 1000,
                        popupHeight: 700
                    },
                    { 
                        name: "Epic Games", 
                        icon: "fa-epic-games", 
                        color: "btn-dark", 
                        action: "Get Free", 
                        link: "https://store.epicgames.com/en-US/browse?q=grand%20theft%20auto",
                        popupWidth: 1000,
                        popupHeight: 700
                    }
                ]
            },
            "minecraft": {
                title: "Minecraft",
                platforms: [
                    { 
                        name: "Official Site", 
                        icon: "fa-globe", 
                        color: "btn-success", 
                        action: "Download", 
                        link: "https://www.minecraft.net/en-us/download",
                        popupWidth: 900,
                        popupHeight: 650
                    },
                    { 
                        name: "Microsoft Store", 
                        icon: "fa-microsoft", 
                        color: "btn-primary", 
                        action: "Get", 
                        link: "https://www.microsoft.com/store/search?q=minecraft",
                        popupWidth: 900,
                        popupHeight: 650
                    }
                ]
            },
            "fortnite": {
                title: "Fortnite",
                platforms: [
                    { 
                        name: "Epic Games", 
                        icon: "fa-epic-games", 
                        color: "btn-dark", 
                        action: "Download", 
                        link: "https://store.epicgames.com/en-US/p/fortnite",
                        popupWidth: 1000,
                        popupHeight: 700
                    },
                    { 
                        name: "GeForce Now", 
                        icon: "fa-nvidia", 
                        color: "btn-success", 
                        action: "Cloud Play", 
                        link: "https://play.geforcenow.com/games?search=fortnite",
                        popupWidth: 900,
                        popupHeight: 600
                    }
                ]
            }
        };

        // Find matching game (case insensitive)
        const gameKey = Object.keys(gameDatabase).find(key => 
            query.toLowerCase().includes(key.toLowerCase())
        ) || 'default';

        const game = gameKey === 'default' ? {
            title: query,
            platforms: [
                { 
                    name: "Steam", 
                    icon: "fa-steam", 
                    color: "btn-primary", 
                    action: "Search", 
                    link: `https://store.steampowered.com/search/?term=${encodeURIComponent(query)}`,
                    popupWidth: 1000,
                    popupHeight: 700
                },
                { 
                    name: "Epic Games", 
                    icon: "fa-epic-games", 
                    color: "btn-dark", 
                    action: "Search", 
                    link: `https://store.epicgames.com/en-US/browse?q=${encodeURIComponent(query)}`,
                    popupWidth: 1000,
                    popupHeight: 700
                },
                { 
                    name: "Google", 
                    icon: "fa-google", 
                    color: "btn-info", 
                    action: "Search Web", 
                    link: `https://www.google.com/search?q=${encodeURIComponent(query + " game download")}`,
                    popupWidth: 1000,
                    popupHeight: 700
                }
            ]
        } : gameDatabase[gameKey];

        // Update UI
        document.getElementById('resultTitle').textContent = game.title;
        document.getElementById('resultDescription').textContent = `Available on ${game.platforms.length} platforms`;
        document.getElementById('searchStatus').style.display = 'none';
        
        // Display platforms
        const optionsDiv = document.getElementById('downloadOptions');
        game.platforms.forEach((platform, index) => {
            const col = document.createElement('div');
            col.className = 'col-12 col-md-6 col-lg-4 mb-3';
            col.style.setProperty('--animation-order', index);
            col.innerHTML = `
                <div class="game-card card h-100 border-0">
                    <div class="card-body text-center py-4">
                        <div class="platform-icon text-primary">
                            <i class="fab ${platform.icon}"></i>
                        </div>
                        <h5 class="text-white mb-3">${platform.name}</h5>
                        <button class="btn ${platform.color} btn-sm rounded-pill px-4 btn-download">
                            ${platform.action} <i class="fas fa-arrow-right ms-2"></i>
                        </button>
                    </div>
                </div>
            `;
            
            // Add click handler for popup window
            const btn = col.querySelector('.btn-download');
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const width = platform.popupWidth || 800;
                const height = platform.popupHeight || 600;
                const left = (screen.width - width) / 2;
                const top = (screen.height - height) / 2;
                
                window.open(
                    platform.link,
                    `${platform.name}_${game.title}`,
                    `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes,toolbar=no,location=no`
                );
            });
            
            optionsDiv.appendChild(col);
        });
        
    } catch (error) {
        document.getElementById('resultTitle').textContent = "Search Error";
        document.getElementById('resultDescription').textContent = `Couldn't complete search for "${query}". Please try again.`;
        document.getElementById('searchStatus').style.display = 'block';
        document.getElementById('downloadOptions').innerHTML = '';
        console.error("Search error:", error);
    }
});