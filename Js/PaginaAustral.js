document.addEventListener('DOMContentLoaded', function() {
    // Mapeamento de países - ATUALIZE COM SEUS CAMINHOS REAIS
    const countryPages = {
        // Africa AUSTRAL:
        'angola': 'Countries/angola.html',
        'Angola':'Countries/Angola.html',
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
        const searchInput = document.getElementById('country-search');
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

    // Event Listeners
    document.getElementById('search-btn').addEventListener('click', handleSearch);
    document.getElementById('country-search').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Carrossel (código existente)
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
    
    setInterval(nextSlide, 5000);
    
    // Menu mobile (código existente)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    // Efeito de scroll na navbar (código existente)
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
 document.addEventListener('DOMContentLoaded', function() {
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
        if (!localStorage.getItem('cookieConsent')) {
          cookieConsent.style.display = 'block';
        }

        // Aceitar cookies
        acceptCookies.addEventListener('click', function() {
          localStorage.setItem('cookieConsent', 'accepted');
          cookieConsent.style.display = 'none';
        });

        // Rejeitar cookies
        rejectCookies.addEventListener('click', function() {
          localStorage.setItem('cookieConsent', 'rejected');
          cookieConsent.style.display = 'none';
          // Aqui você pode adicionar código para desativar cookies não essenciais
        });

        // Saiba mais sobre cookies
        learnMoreCookies.addEventListener('click', function(e) {
          e.preventDefault();
          cookieConsent.style.display = 'none';
          privacyModal.style.display = 'block';
        });

        // Abrir modais
        privacyLink.addEventListener('click', function(e) {
          e.preventDefault();
          privacyModal.style.display = 'block';
        });

        termsLink.addEventListener('click', function(e) {
          e.preventDefault();
          termsModal.style.display = 'block';
        });

        footerPrivacyLink.addEventListener('click', function(e) {
          e.preventDefault();
          privacyModal.style.display = 'block';
        });

        footerTermsLink.addEventListener('click', function(e) {
          e.preventDefault();
          termsModal.style.display = 'block';
        });

        footerDisclaimerLink.addEventListener('click', function(e) {
          e.preventDefault();
          disclaimerModal.style.display = 'block';
        });

        // Fechar modais
        closeButtons.forEach(function(button) {
          button.addEventListener('click', function() {
            privacyModal.style.display = 'none';
            termsModal.style.display = 'none';
            disclaimerModal.style.display = 'none';
          });
        });

        // Fechar ao clicar fora do modal
        window.addEventListener('click', function(event) {
          if (event.target === privacyModal) {
            privacyModal.style.display = 'none';
          }
          if (event.target === termsModal) {
            termsModal.style.display = 'none';
          }
          if (event.target === disclaimerModal) {
            disclaimerModal.style.display = 'none';
          }
        });
      });