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
            image: "../anos80/82_EVA_.JPG",
            thumbnail: "../anos80/82_EVA_.JPG"
        },
        {
            id: 5,
            title: "Cores do Outono",
            year: 1985,
            technique: "Óleo sobre tela",
            dimensions: "110x90cm",
            image: "../anos80/82_EVA_.JPG",
            thumbnail: "../anos80/82_EVA_.JPG"
        },
        {
            id: 6,
            title: "Movimento",
            year: 1988,
            technique: "Técnica mista",
            dimensions: "150x120cm",
            image: "../anos80/82_EVA_.JPG",
            thumbnail: "../anos80/82_EVA_.JPG"
        },
        {
            id: 7,
            title: "EVA",
            year: 1982,
            technique: "Acrílica sobre tela",
            dimensions: "–x–cm",
            image: "../anos80/82_EVA_.JPG",
            thumbnail: "../anos80/82_EVA_.JPG"
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


// Classe para gerenciar o modal de imagem simples
class SimpleImageModal {
    constructor() {
        this.modal = null;
        this.init();
    }

    init() {
        this.createModal();
        this.bindEvents();
    }

    createModal() {
        this.modal = document.createElement('div');
        this.modal.className = 'simple-image-modal';
        this.modal.innerHTML = `
            <div class="simple-modal-overlay">
                <img class="simple-modal-image" src="" alt="">
            </div>
        `;
        this.modal.style.display = 'none';
        // Adiciona estilos diretamente para garantir visibilidade e sobreposição
        Object.assign(this.modal.style, {
            position: 'fixed',
            inset: '0',
            zIndex: '9999',
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(20,20,20,0.95)'
        });
        const overlay = this.modal.querySelector('.simple-modal-overlay');
        Object.assign(overlay.style, {
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        });
        const img = this.modal.querySelector('.simple-modal-image');
        Object.assign(img.style, {
            maxWidth: '95vw',
            maxHeight: '95vh',
            objectFit: 'contain',
            boxShadow: '0 0 32px #000a',
            background: '#222',
            borderRadius: '8px'
        });
        document.body.appendChild(this.modal);
    }

    bindEvents() {
        // Fechar ao clicar fora da imagem
        this.modal.querySelector('.simple-modal-overlay').addEventListener('click', e => {
            if (e.target === e.currentTarget) this.close();
        });
        // Fechar com ESC
        document.addEventListener('keydown', e => {
            if (this.modal.style.display !== 'block') return;
            if (e.key === 'Escape') this.close();
        });
    }

    open(artwork) {
        const imgEl = this.modal.querySelector('.simple-modal-image');
        imgEl.src = artwork.image;
        imgEl.alt = artwork.title;
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Classe para gerenciar galerias e menu móvel
class GalleryManager {
    constructor() {
        this.imageModal = new SimpleImageModal();
        this.init();
    }

    init() {
        this.bindEvents();
        this.initMobileMenu();
    }

    bindEvents() {
        document.addEventListener('click', e => {
            const card = e.target.closest('.artwork-card');
            if (card) {
                e.preventDefault();
                const id = parseInt(card.dataset.artworkId, 10);
                const decade = card.dataset.decade;
                const art = artworksData[decade].find(a => a.id === id);
                if (art) this.imageModal.open(art);
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
                document.body.classList.toggle('menu-open');
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
        const formattedDecade = decade.endsWith('s') ? `${decade.slice(0, -1)}'s` : decade.toUpperCase();
        container.innerHTML = `
                <div class="gallery-header">
                    <h1>${formattedDecade}</h1>
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