document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM totalmente carregado e analisado');

    // ============ BARRA DE PESQUISA ============
    // Mapeamento de países - ATUALIZE COM SEUS CAMINHOS REAIS
    const countryPages = {
        // Africa AUSTRAL:
        'angola':'Countries/Angola.html',
        'áfrica do sul': 'Countries/africa do sul.html',
        'botswana':'Countries/Botswana.html',
        'Congo':'Countries/Republica Democratica do Congo.html ',
        'Eswatini':'Countries/Eswatini.html',
        'Lesoto':'Countries/Lesoto.html',
        'mocambique': 'Countries/mocambique.html',
        'Malawi':'Countries/Malawi.html',
        'madagascar':'Countries/Madagascar.html',
        'Mauricias':'Countries/Mauricias.html',
        'namibia':'Countries/Namibia.html',
        'Republica Democratica do Congo':'Countries/Republica Democratica do Congo.html',
        'RDCongo':'Countries/Republica Democratica do Congo.html',
        'Seychelles':'Countries/Seychelles.html',
        'Tanzania':'Countries/Tanzania.html',
        'Zambia':'Countries/Zambia.html',
        'Zimbabwe':'Countries/Zimbabwe.html',        
    };

    // Função para normalizar texto (remove acentos, espaços extras)
    function normalizeText(text) {
        return text.toLowerCase()
            .normalize('NFD').replace(/[\u0300-\u036f]/g, "")
            .trim();
    }

    // Função principal de busca
    function handleSearch() {
        console.log('Função de busca acionada');
        const searchInput = document.getElementById('country-search');
        
        if (!searchInput) {
            console.error('Elemento de pesquisa não encontrado');
            alert('Erro no sistema de pesquisa. Por favor, recarregue a página.');
            return;
        }

        const searchTerm = normalizeText(searchInput.value);
        
        if (!searchTerm) {
            alert('Por favor, digite o nome de um país africano');
            return;
        }

        // Verifica correspondência exata
        for (const country in countryPages) {
            if (normalizeText(country) === searchTerm) {
                window.location.href = countryPages[country];
                return;
            }
        }

        // Verifica correspondência parcial
        for (const country in countryPages) {
            if (normalizeText(country).includes(searchTerm)) {
                if (confirm(`Você quis dizer ${country}?`)) {
                    window.location.href = countryPages[country];
                    return;
                }
            }
        }

        alert('País não encontrado. Tente: ' + Object.keys(countryPages).join(', '));
    }

    // Configuração dos event listeners com verificação
    const searchBtn = document.getElementById('search-btn');
    const searchInputField = document.getElementById('country-search');

    if (searchBtn && searchInputField) {
        console.log('Elementos de pesquisa encontrados, adicionando event listeners');
        searchBtn.addEventListener('click', handleSearch);
        searchInputField.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    } else {
        console.error('Elementos de pesquisa não encontrados:', {
            searchBtn,
            searchInputField
        });
    }

    // ============ CARROSSEL ============
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }
    
    if (slides.length > 0) {
        showSlide(currentSlide);
        setInterval(nextSlide, 5000);
    }

    // ============ MENU MOBILE ============
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // ============ EFEITO SCROLL NAVBAR ============
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // ============ MODAIS E COOKIES ============
    // Elementos
    const privacyModal = document.getElementById('privacyModal');
    const termsModal = document.getElementById('termsModal');
    const disclaimerModal = document.getElementById('disclaimerModal');
    const privacyLink = document.getElementById('privacyLink');
    const termsLink = document.getElementById('termsLink');
    const footerPrivacyLink = document.getElementById('footerPrivacyLink');
    const footerTermsLink = document.getElementById('footerTermsLink');
    const footerDisclaimerLink = document.getElementById('footerDisclaimerLink');
    const closeButtons = document.querySelectorAll('.close-modal');
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptCookies = document.getElementById('acceptCookies');
    const rejectCookies = document.getElementById('rejectCookies');
    const learnMoreCookies = document.getElementById('learnMoreCookies');

    // Verificar consentimento de cookies
    if (cookieConsent && !localStorage.getItem('cookieConsent')) {
        cookieConsent.style.display = 'block';
    }

    // Aceitar cookies
    if (acceptCookies) {
        acceptCookies.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'accepted');
            if (cookieConsent) cookieConsent.style.display = 'none';
        });
    }

    // Rejeitar cookies
    if (rejectCookies) {
        rejectCookies.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'rejected');
            if (cookieConsent) cookieConsent.style.display = 'none';
        });
    }

    // Saiba mais sobre cookies
    if (learnMoreCookies) {
        learnMoreCookies.addEventListener('click', function(e) {
            e.preventDefault();
            if (cookieConsent) cookieConsent.style.display = 'none';
            if (privacyModal) privacyModal.style.display = 'block';
        });
    }

    // Abrir modais com verificação de elementos
    function setupModal(linkElement, modalElement) {
        if (linkElement && modalElement) {
            linkElement.addEventListener('click', function(e) {
                e.preventDefault();
                modalElement.style.display = 'block';
            });
        }
    }

    setupModal(privacyLink, privacyModal);
    setupModal(termsLink, termsModal);
    setupModal(footerPrivacyLink, privacyModal);
    setupModal(footerTermsLink, termsModal);
    setupModal(footerDisclaimerLink, disclaimerModal);

    // Fechar modais
    if (closeButtons.length > 0) {
        closeButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                if (privacyModal) privacyModal.style.display = 'none';
                if (termsModal) termsModal.style.display = 'none';
                if (disclaimerModal) disclaimerModal.style.display = 'none';
            });
        });
    }

    // Fechar ao clicar fora do modal
    window.addEventListener('click', function(event) {
        if (privacyModal && event.target === privacyModal) {
            privacyModal.style.display = 'none';
        }
        if (termsModal && event.target === termsModal) {
            termsModal.style.display = 'none';
        }
        if (disclaimerModal && event.target === disclaimerModal) {
            disclaimerModal.style.display = 'none';
        }
    });
});