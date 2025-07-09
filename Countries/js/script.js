document.addEventListener('DOMContentLoaded', function() {
    // ========== CARROSSEL COM EFEITO FADE ==========
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img');
    let currentIndex = 0;
    const intervalTime = 5000; // 3 segundos
    
    // Configuração inicial do carrossel
    carousel.style.position = 'relative';
    images.forEach(img => {
        img.style.position = 'absolute';
        img.style.top = '0';
        img.style.left = '0';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.opacity = '0';
        img.style.transition = 'opacity 1s ease-in-out';
    });
    
    // Mostra a primeira imagem
    images[currentIndex].style.opacity = '1';
    
    function nextImage() {
        // Esmaece a imagem atual
        images[currentIndex].style.opacity = '0';
        
        // Avança para a próxima imagem
        currentIndex = (currentIndex + 1) % images.length;
        
        // Mostra a nova imagem após um pequeno delay
        setTimeout(() => {
            images[currentIndex].style.opacity = '1';
        }, 50);
    }
    
    // Inicia o carrossel automático
    let carouselInterval = setInterval(nextImage, intervalTime);
    
    // Pausa o carrossel quando o mouse está sobre ele
    carousel.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval);
    });
    
    // Retoma o carrossel quando o mouse sai
    carousel.addEventListener('mouseleave', () => {
        carouselInterval = setInterval(nextImage, intervalTime);
    });

    // Restante do seu código (tabs, scroll suave, hover) permanece o mesmo...
    // ========== FUNCIONALIDADE DE TABS ==========
    const navItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');
    
    function handleTabClick() {
        navItems.forEach(navItem => navItem.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        this.classList.add('active');
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
        
        window.scrollTo({
            top: document.querySelector('.content-section').offsetTop - 20,
            behavior: 'smooth'
        });
    }
    
    navItems.forEach(item => {
        item.addEventListener('click', handleTabClick);
    });
    
    // ========== SCROLL SUAVE ==========
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            window.scrollTo({
                top: document.querySelector('.navbar').offsetTop,
                behavior: 'smooth'
            });
        });
    }
    
    // ========== EFEITO HOVER NAS IMAGENS ==========
    const imagesHover = document.querySelectorAll('.content-image, .species-image');
    
    function handleImageHover(e) {
        if (e.type === 'mouseenter') {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
            this.style.transition = 'all 0.3s ease';
        } else {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        }
    }
    
    imagesHover.forEach(img => {
        img.addEventListener('mouseenter', handleImageHover);
        img.addEventListener('mouseleave', handleImageHover);
    });
    const menuToggle = document.querySelector('.menu-toggle');
    const navContainer = document.querySelector('.nav-container');
    
    if (menuToggle && navContainer) {
        menuToggle.addEventListener('click', function() {
            navContainer.classList.toggle('active');
        });
    }
});