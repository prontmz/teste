 

        document.addEventListener('DOMContentLoaded', function() {
            // Selecionar elementos do carrossel
            const carouselItems = document.querySelectorAll('.carousel-item');
            const indicators = document.querySelectorAll('.carousel-indicator');
            let currentIndex = 0;
            let interval;
            const slideDuration = 5000; // 5 segundos

            // Função para mostrar um slide específico
            function showSlide(index) {
                // Esconder todos os slides e desativar indicadores
                carouselItems.forEach(item => item.classList.remove('active'));
                indicators.forEach(indicator => indicator.classList.remove('active'));
                
                // Mostrar o slide atual e ativar o indicador correspondente
                carouselItems[index].classList.add('active');
                indicators[index].classList.add('active');
                
                // Atualizar o índice atual
                currentIndex = index;
            }

            // Função para avançar para o próximo slide
            function nextSlide() {
                const nextIndex = (currentIndex + 1) % carouselItems.length;
                showSlide(nextIndex);
            }

            // Função para iniciar o carrossel automático
            function startCarousel() {
                interval = setInterval(nextSlide, slideDuration);
            }

            // Função para parar o carrossel automático
            function stopCarousel() {
                clearInterval(interval);
            }

            // Adicionar eventos aos indicadores
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    stopCarousel();
                    showSlide(index);
                    startCarousel();
                });
            });

            // Pausar o carrossel quando o mouse estiver sobre ele
            const carousel = document.querySelector('.carousel');
            carousel.addEventListener('mouseenter', stopCarousel);
            carousel.addEventListener('mouseleave', startCarousel);

            // Iniciar o carrossel
            showSlide(currentIndex);
            startCarousel();

            // Restante do JavaScript (botão voltar ao topo, navegação suave, etc.)
            // ... (mantenha o mesmo código dos exemplos anteriores) ...
            
            // Botão de voltar ao topo
            const backToTopButton = document.getElementById('backToTop');
            
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    backToTopButton.classList.add('show');
                } else {
                    backToTopButton.classList.remove('show');
                }
            });
            
            backToTopButton.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });

            // Efeito suave para links de navegação
            document.querySelectorAll('nav a').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                });
            });

            // Animação para as seções quando aparecem na tela
            const sections = document.querySelectorAll('section');
            
            const observerOptions = {
                threshold: 0.1
            };
            
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);
            
            sections.forEach(section => {
                section.style.opacity = 0;
                section.style.transform = 'translateY(20px)';
                section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                observer.observe(section);
            });

            // Galeria interativa
            const galleryItems = document.querySelectorAll('.gallery-item');
            
            galleryItems.forEach(item => {
                item.addEventListener('click', function() {
                    galleryItems.forEach(i => i.style.transform = 'scale(1)');
                    this.style.transform = 'scale(1.05)';
                    
                    const imgSrc = this.querySelector('img').src;
                    const caption = this.querySelector('.gallery-caption').textContent;
                    
                    alert(`Imagem ampliada: ${caption}\nURL: ${imgSrc}`);
                });
            });
        });