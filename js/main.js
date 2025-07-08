// main.js

// Dados das obras de arte
// main.js

// Dados das obras de arte
const artworksData = {
    '70s': [
        {
            id: 1,
            title: "Reflexões Urbanas",
            year: 1975,
            technique: "Óleo sobre tela",
            dimensions: "100x80cm",
            image: "../anos80/82_EVA_.JPG",
            thumbnail: "../anos80/82_EVA_.JPG"
        },
        {
            id: 2,
            title: "Natureza Morta",
            year: 1977,
            technique: "Acrílica sobre madeira",
            dimensions: "60x40cm",
            image: "../anos80/82_EVA_.JPG",
            thumbnail: "../anos80/82_EVA_.JPG"
        },
        {
            id: 3,
            title: "Paisagem Interior",
            year: 1979,
            technique: "Técnica mista",
            dimensions: "120x90cm",
            image: "../anos80/82_EVA_.JPG",
            thumbnail: "../anos80/82_EVA_.JPG"
        }
    ],

    '80s': [
        {
            id: 4,
            title: "Abstração Geométrica",
            year: 1982,
            technique: "Acrílica sobre tela",
            dimensions: "120x100cm",
            image: "anos80/82_EVA_.JPG",
            thumbnail: "anos80/82_EVA_.JPG"
        },
        {
            id: 5,
            title: "Cores do Outono",
            year: 1985,
            technique: "Óleo sobre tela",
            dimensions: "110x90cm",
            image: "anos80/82_EVA_.JPG",
            thumbnail: "anos80/82_EVA_.JPG"
        },
        {
            id: 6,
            title: "Movimento",
            year: 1988,
            technique: "Técnica mista",
            dimensions: "150x120cm",
            image: "anos80/82_EVA_.JPG",
            thumbnail: "anos80/82_EVA_.JPG"
        },
        {
            id: 7,
            title: "EVA",
            year: 1982,
            technique: "Acrílica sobre tela",
            dimensions: "–x–cm",
            image: "anos80/82_EVA_.JPG",
            thumbnail: "anos80/82_EVA_.JPG"
        }
    ],

    '90s': [
        {
            id: 8,
            title: "Fragmentos",
            year: 1992,
            technique: "Colagem e tinta",
            dimensions: "80x60cm",
            image: "../anos80/82_EVA_.JPG",
            thumbnail: "../anos80/82_EVA_.JPG"
        },
        {
            id: 9,
            title: "Luz e Sombra",
            year: 1995,
            technique: "Óleo sobre tela",
            dimensions: "100x80cm",
            image: "../anos80/82_EVA_.JPG",
            thumbnail: "../anos80/82_EVA_.JPG"
        },
        {
            id: 10,
            title: "Expressão",
            year: 1998,
            technique: "Acrílica sobre tela",
            dimensions: "130x100cm",
            image: "../anos80/82_EVA_.JPG",
            thumbnail: "../anos80/82_EVA_.JPG"
        }
    ],

    '2000s': [
        {
            id: 11,
            title: "Novo Milênio",
            year: 2001,
            technique: "Técnica mista",
            dimensions: "160x120cm",
            image: "../anos80/82_EVA_.JPG",
            thumbnail: "../anos80/82_EVA_.JPG"
        },
        {
            id: 12,
            title: "Fragmentos",
            year: 2004,
            technique: "Acrílica sobre tela",
            dimensions: "120x90cm",
            image: "../anos80/82_EVA_.JPG",
            thumbnail: "../anos80/82_EVA_.JPG"
        },
        {
            id: 13,
            title: "Metamorfose",
            year: 2007,
            technique: "Óleo sobre tela",
            dimensions: "180x140cm",
            image: "../anos80/82_EVA_.JPG",
            thumbnail: "../anos80/82_EVA_.JPG"
        }
    ],

    '2010s': [
        {
            id: 14,
            title: "Digital Dreams",
            year: 2012,
            technique: "Técnica mista digital",
            dimensions: "200x150cm",
            image: "../anos80/82_EVA_.JPG",
            thumbnail: "../anos80/82_EVA_.JPG"
        },
        {
            id: 15,
            title: "Conexões",
            year: 2015,
            technique: "Acrílica sobre tela",
            dimensions: "140x110cm",
            image: "../anos80/82_EVA_.JPG",
            thumbnail: "../anos80/82_EVA_.JPG"
        },
        {
            id: 16,
            title: "Reflexos",
            year: 2018,
            technique: "Óleo sobre tela",
            dimensions: "160x120cm",
            image: "../anos80/82_EVA_.JPG",
            thumbnail: "../anos80/82_EVA_.JPG"
        }
    ],

    '2020s': [
        {
            id: 17,
            title: "Pandemia",
            year: 2021,
            technique: "Técnica mista",
            dimensions: "180x140cm",
            image: "../anos80/82_EVA_.JPG",
            thumbnail: "../anos80/82_EVA_.JPG"
        },
        {
            id: 18,
            title: "Renascimento",
            year: 2023,
            technique: "Acrílica sobre tela",
            dimensions: "200x160cm",
            image: "../anos80/82_EVA_.JPG",
            thumbnail: "../anos80/82_EVA_.JPG"
        },
        {
            id: 19,
            title: "Futuro",
            year: 2024,
            technique: "Técnica mista digital",
            dimensions: "220x180cm",
            image: "../anos80/82_EVA_.JPG",
            thumbnail: "../anos80/82_EVA_.JPG"
        }
    ]
};

// … restante do seu código (ImageModal, GalleryManager etc.) permanece igual.


// Classe para gerenciar o modal de imagem
class ImageModal {
    constructor() {
        this.modal = null;
        this.currentArtwork = null;
        this.currentArtworks = [];
        this.currentIndex = 0;
        this.isZoomed = false;
        this.zoomLevel = 1;
        this.init();
    }

    init() {
        this.createModal();
        this.bindEvents();
    }

    createModal() {
        this.modal = document.createElement('div');
        this.modal.className = 'image-modal';
        this.modal.innerHTML = `
            <div class="modal-overlay">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="modal-info">
                            <h2 class="modal-title"></h2>
                            <p class="modal-details"></p>
                        </div>
                        <div class="modal-controls">
                            <span class="modal-counter"></span>
                            <button class="modal-close" aria-label="Fechar modal">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="modal-image-container">
                        <button class="modal-nav modal-prev" aria-label="Imagem anterior">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="15,18 9,12 15,6"></polyline>
                            </svg>
                        </button>
                        <div class="modal-image-wrapper">
                            <img class="modal-image" src="" alt="">
                        </div>
                        <button class="modal-nav modal-next" aria-label="Próxima imagem">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="9,18 15,12 9,6"></polyline>
                            </svg>
                        </button>
                        <div class="zoom-indicator">Zoom 1x</div>
                    </div>
                    <div class="modal-footer">
                        <div class="modal-artwork-details">
                            <h3>Detalhes Técnicos</h3>
                            <div class="details-grid">
                                <div class="detail-item">
                                    <span class="detail-label">Ano:</span>
                                    <span class="detail-value modal-year"></span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label">Técnica:</span>
                                    <span class="detail-value modal-technique"></span>
                                </div>
                                <div class="detail-item">
                                    <span class="detail-label">Dimensões:</span>
                                    <span class="detail-value modal-dimensions"></span>
                                </div>
                            </div>
                        </div>
                        <div class="modal-navigation">
                            <h3>Navegação</h3>
                            <div class="nav-buttons">
                                <button class="btn btn-secondary modal-prev-btn">← Anterior</button>
                                <button class="btn btn-secondary modal-next-btn">Próxima →</button>
                            </div>
                            <p class="keyboard-hint">💡 Use as setas do teclado para navegar • ESC para fechar</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(this.modal);
    }

    bindEvents() {
        // Fechar modal
        this.modal.querySelector('.modal-close').addEventListener('click', () => this.close());
        this.modal.querySelector('.modal-overlay').addEventListener('click', e => {
            if (e.target === e.currentTarget) this.close();
        });
        // Navegação
        this.modal.querySelector('.modal-prev').addEventListener('click', () => this.previous());
        this.modal.querySelector('.modal-next').addEventListener('click', () => this.next());
        this.modal.querySelector('.modal-prev-btn').addEventListener('click', () => this.previous());
        this.modal.querySelector('.modal-next-btn').addEventListener('click', () => this.next());
        // Zoom
        this.modal.querySelector('.modal-image-wrapper').addEventListener('click', () => this.toggleZoom());
        // Teclado
        document.addEventListener('keydown', e => {
            if (!this.modal.classList.contains('active')) return;
            switch (e.key) {
                case 'Escape': this.close(); break;
                case 'ArrowLeft': this.previous(); break;
                case 'ArrowRight': this.next(); break;
            }
        });
    }

    open(artwork, artworks) {
        this.currentArtwork = artwork;
        this.currentArtworks = artworks;
        this.currentIndex = artworks.findIndex(a => a.id === artwork.id);
        this.isZoomed = false;
        this.zoomLevel = 1;
        this.updateContent();
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    previous() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.currentArtwork = this.currentArtworks[this.currentIndex];
            this.updateContent();
            this.resetZoom();
        }
    }

    next() {
        if (this.currentIndex < this.currentArtworks.length - 1) {
            this.currentIndex++;
            this.currentArtwork = this.currentArtworks[this.currentIndex];
            this.updateContent();
            this.resetZoom();
        }
    }

    toggleZoom() {
        this.isZoomed = !this.isZoomed;
        this.zoomLevel = this.isZoomed ? 2 : 1;
        const wrapper = this.modal.querySelector('.modal-image-wrapper');
        const indicator = this.modal.querySelector('.zoom-indicator');
        wrapper.style.transform = `scale(${this.zoomLevel})`;
        wrapper.style.cursor = this.isZoomed ? 'zoom-out' : 'zoom-in';
        indicator.textContent = `Zoom ${this.zoomLevel}x`;
    }

    resetZoom() {
        this.isZoomed = false;
        this.zoomLevel = 1;
        const wrapper = this.modal.querySelector('.modal-image-wrapper');
        const indicator = this.modal.querySelector('.zoom-indicator');
        wrapper.style.transform = 'scale(1)';
        wrapper.style.cursor = 'zoom-in';
        indicator.textContent = 'Zoom 1x';
    }

    updateContent() {
        const art = this.currentArtwork;
        this.modal.querySelector('.modal-title').textContent = art.title;
        this.modal.querySelector('.modal-details').textContent = `${art.year} • ${art.technique}`;
        this.modal.querySelector('.modal-counter').textContent = `${this.currentIndex + 1} de ${this.currentArtworks.length}`;
        const imgEl = this.modal.querySelector('.modal-image');
        imgEl.src = art.image;
        imgEl.alt = art.title;
        this.modal.querySelector('.modal-year').textContent = art.year;
        this.modal.querySelector('.modal-technique').textContent = art.technique;
        this.modal.querySelector('.modal-dimensions').textContent = art.dimensions;
        const hasPrev = this.currentIndex > 0;
        const hasNext = this.currentIndex < this.currentArtworks.length - 1;
        this.modal.querySelector('.modal-prev').style.display = hasPrev ? 'flex' : 'none';
        this.modal.querySelector('.modal-next').style.display = hasNext ? 'flex' : 'none';
        this.modal.querySelector('.modal-prev-btn').disabled = !hasPrev;
        this.modal.querySelector('.modal-next-btn').disabled = !hasNext;
    }
}

// Classe para gerenciar galerias e menu móvel
class GalleryManager {
    constructor() {
        this.imageModal = new ImageModal();
        this.init();
    }

    init() {
        this.bindEvents();
        this.initMobileMenu();  // chama aqui
    }

    bindEvents() {
        document.addEventListener('click', e => {
            const card = e.target.closest('.artwork-card');
            if (card) {
                e.preventDefault();
                const id = parseInt(card.dataset.artworkId, 10);
                const decade = card.dataset.decade;
                const art = artworksData[decade].find(a => a.id === id);
                if (art) this.imageModal.open(art, artworksData[decade]);
            }
        });
    }

    initMobileMenu() {
        const btn = document.getElementById('mobileMenuBtn');
        const nav = document.querySelector('.nav-list');
        if (btn && nav) {
            btn.addEventListener('click', () => {
                nav.classList.toggle('mobile-active');
                btn.classList.toggle('active');
            });
        }
    }

    renderGallery(decade, containerId) {
        const container = document.getElementById(containerId);
        if (!container || !artworksData[decade]) return;
        const items = artworksData[decade].map(art => `
            <div class="artwork-card" data-artwork-id="${art.id}" data-decade="${decade}">
                <div class="artwork-image">
                    <img src="${art.thumbnail}" alt="${art.title}">
                </div>
                <div class="artwork-info">
                    <h3>${art.title}</h3>
                    <p><strong>Ano:</strong> ${art.year}</p>
                    <p><strong>Técnica:</strong> ${art.technique}</p>
                    <p><strong>Dimensões:</strong> ${art.dimensions}</p>
                </div>
            </div>
        `).join('');
        container.innerHTML = `
            <div class="gallery-header">
                <h1>Década de ${decade.toUpperCase()}</h1>
                <p>Explore as obras dos anos ${decade}</p>
            </div>
            <div class="artworks-grid">${items}</div>
        `;
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
    const gm = new GalleryManager();
    const galleryContainer = document.getElementById('gallery-container');
    if (galleryContainer) {
        const decade = galleryContainer.dataset.decade;
        gm.renderGallery(decade, 'gallery-container');

    } document.querySelectorAll('a.nav-link').forEach(a => {
        a.addEventListener('click', e => {
            const href = a.getAttribute('href');
            if (!href || href.startsWith('http') || href.startsWith('#')) return;
            e.preventDefault();
            document.body.classList.remove('loaded');
            document.body.classList.add('exiting');
            setTimeout(() => window.location = href, 500); // deve bater com o transition-duration
        });
    });
});