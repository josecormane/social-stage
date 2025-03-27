document.addEventListener('DOMContentLoaded', function() {
    // Verificar y preservar elementos clave siempre visibles
    console.log("DOM Content Loaded - Initializing page");
    
    try {
        // Primero asegurémonos de que algunos elementos sean visibles al cargar la página
        // Solo aplicar estilos a elementos que existen
        const enElements = document.querySelectorAll('.en');
        const esElements = document.querySelectorAll('.es');
        
        console.log(`Found ${enElements.length} English elements and ${esElements.length} Spanish elements`);
        
        // Por defecto, muestra los elementos en inglés
        enElements.forEach(el => {
            try {
                if (el.tagName === 'SPAN' || el.tagName === 'A' || el.tagName === 'BUTTON' || 
                    el.tagName === 'INPUT' || el.tagName === 'SELECT' || el.tagName === 'H3' || 
                    el.tagName === 'H4' || el.tagName === 'P') {
                    el.style.display = 'inline-block';
                } else {
                    el.style.display = 'block';
                }
            } catch (elemError) {
                console.error("Error showing EN element:", elemError);
            }
        });
        
        // Asegurarnos de que los elementos en español estén ocultos
        esElements.forEach(el => {
            try {
                el.style.display = 'none';
            } catch (elemError) {
                console.error("Error hiding ES element:", elemError);
            }
        });
        
        // Verificar el idioma guardado después de establecer los valores predeterminados
        const savedLanguage = localStorage.getItem('language');
        console.log("Saved language:", savedLanguage);
        
        if (savedLanguage === 'es') {
            // Si el idioma guardado es español, cambiar la visualización
            enElements.forEach(el => {
                try {
                    el.style.display = 'none';
                } catch (elemError) {
                    console.error("Error hiding EN element for ES mode:", elemError);
                }
            });
            
            esElements.forEach(el => {
                try {
                    if (el.tagName === 'SPAN' || el.tagName === 'A' || el.tagName === 'BUTTON' || 
                        el.tagName === 'INPUT' || el.tagName === 'SELECT' || el.tagName === 'H3' || 
                        el.tagName === 'H4' || el.tagName === 'P') {
                        el.style.display = 'inline-block';
                    } else {
                        el.style.display = 'block';
                    }
                } catch (elemError) {
                    console.error("Error showing ES element:", elemError);
                }
            });
            
            document.body.classList.add('es');
        }
        
        // Language Toggle
        const languageToggle = document.getElementById('languageToggle');
        
        if (languageToggle) {
            console.log("Found language toggle button");
            
            languageToggle.addEventListener('click', function() {
                try {
                    document.body.classList.toggle('es');
                    
                    // Fix display issues for specific elements
                    const esElements = document.querySelectorAll('.es');
                    const enElements = document.querySelectorAll('.en');
                    
                    if (document.body.classList.contains('es')) {
                        // Switch to Spanish
                        esElements.forEach(el => {
                            if (el.tagName === 'SPAN' || el.tagName === 'A' || el.tagName === 'BUTTON' || 
                                el.tagName === 'INPUT' || el.tagName === 'SELECT' || el.tagName === 'H3' || 
                                el.tagName === 'H4' || el.tagName === 'P') {
                                el.style.display = 'inline-block';
                            } else {
                                el.style.display = 'block';
                            }
                        });
                        
                        enElements.forEach(el => {
                            el.style.display = 'none';
                        });
                    } else {
                        // Switch to English
                        enElements.forEach(el => {
                            if (el.tagName === 'SPAN' || el.tagName === 'A' || el.tagName === 'BUTTON' || 
                                el.tagName === 'INPUT' || el.tagName === 'SELECT' || el.tagName === 'H3' || 
                                el.tagName === 'H4' || el.tagName === 'P') {
                                el.style.display = 'inline-block';
                            } else {
                                el.style.display = 'block';
                            }
                        });
                        
                        esElements.forEach(el => {
                            el.style.display = 'none';
                        });
                    }
                    
                    // Save language preference
                    const currentLang = document.body.classList.contains('es') ? 'es' : 'en';
                    localStorage.setItem('language', currentLang);
                    console.log("Language switched to:", currentLang);
                } catch (langToggleError) {
                    console.error("Error toggling language:", langToggleError);
                }
            });
        } else {
            console.warn("Language toggle button not found");
        }
        
        // Mobile Menu
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        if (mobileMenuBtn && navLinks) {
            console.log("Found mobile menu elements");
            
            mobileMenuBtn.addEventListener('click', function() {
                try {
                    navLinks.classList.toggle('active');
                    this.classList.toggle('active');
                    
                    // Add styles for mobile menu when active
                    if (navLinks.classList.contains('active')) {
                        navLinks.style.display = 'flex';
                        navLinks.style.flexDirection = 'column';
                        navLinks.style.position = 'absolute';
                        navLinks.style.top = '100%';
                        navLinks.style.left = '0';
                        navLinks.style.width = '100%';
                        navLinks.style.backgroundColor = 'white';
                        navLinks.style.padding = '20px';
                        navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                    } else {
                        navLinks.style.display = '';
                    }
                } catch (menuError) {
                    console.error("Error toggling mobile menu:", menuError);
                }
            });
        } else {
            console.warn("Mobile menu elements not found");
        }
        
        // Header Scroll Effect
        const header = document.querySelector('header');
        
        if (header) {
            window.addEventListener('scroll', function() {
                try {
                    if (window.scrollY > 50) {
                        header.classList.add('scrolled');
                    } else {
                        header.classList.remove('scrolled');
                    }
                } catch (scrollError) {
                    console.error("Error handling scroll effect:", scrollError);
                }
            });
        }
        
        // Carousel Enhancement - Mostrar todas las imágenes fijas
        const carouselTrack = document.querySelector('.carousel-track');
        const slides = document.querySelectorAll('.carousel-slide');
        
        if (carouselTrack && slides.length > 0) {
            // Colocar todos los slides en una fila sin transiciones ni movimiento
            carouselTrack.style.transform = 'translateX(0)';
            carouselTrack.style.width = '100%';
            carouselTrack.style.display = 'flex';
            carouselTrack.style.justifyContent = 'space-between';
            
            // Asegurarse de que las burbujas siempre estén visibles
            const allBubbles = document.querySelectorAll('.floating-bubble');
            if (allBubbles.length > 0) {
                allBubbles.forEach(bubble => {
                    bubble.style.opacity = '1';
                    bubble.style.transform = 'scale(1)';
                    
                    // Mantener la animación de flotación
                    const delay = bubble.dataset.delay || '0s';
                    bubble.style.animationDelay = delay;
                });
            }
        }
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                try {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                        
                        // Close mobile menu if open
                        if (navLinks && navLinks.classList.contains('active')) {
                            navLinks.classList.remove('active');
                            mobileMenuBtn?.classList.remove('active');
                            navLinks.style.display = '';
                        }
                    }
                } catch (scrollError) {
                    console.error("Error handling smooth scroll:", scrollError);
                }
            });
        });
        
        // Form submission - sólo si el formulario existe
        const contactForm = document.querySelector('.contact-form');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                try {
                    e.preventDefault();
                    
                    // Get form data
                    const formData = new FormData(this);
                    const formValues = {};
                    
                    for (let [key, value] of formData.entries()) {
                        formValues[key] = value;
                    }
                    
                    // Here you would typically send the data to your server
                    console.log("Form submitted with values:", formValues);
                    
                    // Reset form
                    this.reset();
                    
                    // Show success message
                    const successMessage = document.createElement('div');
                    successMessage.className = 'success-message';
                    successMessage.textContent = document.body.classList.contains('es') ? 
                        '¡Gracias! Tu mensaje ha sido enviado.' : 
                        'Thank you! Your message has been sent.';
                    
                    this.appendChild(successMessage);
                    
                    // Remove success message after 5 seconds
                    setTimeout(() => {
                        successMessage.remove();
                    }, 5000);
                } catch (formError) {
                    console.error("Error processing form submission:", formError);
                }
            });
        }
        
        console.log("Page initialization complete");
    
    } catch (error) {
        console.error("Critical error during page initialization:", error);
        // Asegurar que la página siga siendo visible a pesar de los errores
        document.body.style.display = 'block';
        document.body.style.visibility = 'visible';
        document.body.style.opacity = '1';
    }
});

// Asegurarse de que la página no desaparezca incluso si hay errores
window.addEventListener('error', function(event) {
    console.error("Caught global error:", event.error || event.message);
    
    // Reestablecer la visibilidad de la página
    document.body.style.display = 'block';
    document.body.style.visibility = 'visible';
    document.body.style.opacity = '1';
    
    // Mostrar mensaje de error solo en modo debug
    if (document.getElementById('debug-console')) {
        const errorNotice = document.createElement('div');
        errorNotice.style.backgroundColor = 'rgba(255, 0, 0, 0.8)';
        errorNotice.style.color = 'white';
        errorNotice.style.padding = '10px';
        errorNotice.style.position = 'fixed';
        errorNotice.style.top = '0';
        errorNotice.style.left = '0';
        errorNotice.style.right = '0';
        errorNotice.style.zIndex = '9999';
        errorNotice.textContent = `Error: ${event.message || 'Ha ocurrido un error'}`;
        
        document.body.appendChild(errorNotice);
        
        setTimeout(() => {
            errorNotice.remove();
        }, 5000);
    }
});

// También asegurarse de que la página sea visible cuando esté completamente cargada
window.addEventListener('load', function() {
    document.body.style.display = 'block';
    document.body.style.visibility = 'visible';
    document.body.style.opacity = '1';
    console.log("Page fully loaded");
});

// Eliminar o comentar el bloque duplicado del carrusel
/*
// Carousel Navigation
const track = document.querySelector('.carousel-track');
const slides = Array.from(document.querySelectorAll('.carousel-slide'));
const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.prev-btn');

if (track && slides.length > 0 && nextButton && prevButton) {
    const slideWidth = slides[0].getBoundingClientRect().width;
    let currentIndex = 0;
    
    // Organizamos los slides
    function setSlidePosition(slide, index) {
        slide.style.left = `${index * 100}%`;
    }
    
    slides.forEach(setSlidePosition);
    
    function moveToSlide(index) {
        // Limitamos el índice al rango válido
        if (index < 0) {
            index = 0;
        } else if (index >= slides.length) {
            index = slides.length - 1;
        }
        
        track.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
        
        // No controlamos visibilidad de burbujas, todas deben estar visibles siempre
    }
    
    // Botón siguiente
    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            moveToSlide(currentIndex + 1);
        } else {
            // Volvemos al primer slide
            moveToSlide(0);
        }
    });
    
    // Botón anterior
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            moveToSlide(currentIndex - 1);
        } else {
            // Vamos al último slide
            moveToSlide(slides.length - 1);
        }
    });
    
    // Autorotación del carrusel
    let carouselInterval = setInterval(() => {
        if (currentIndex < slides.length - 1) {
            moveToSlide(currentIndex + 1);
        } else {
            moveToSlide(0);
        }
    }, 5000);
    
    // Pausamos la autorotación al pasar el mouse sobre el carrusel
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(carouselInterval);
        });
        
        carouselContainer.addEventListener('mouseleave', () => {
            carouselInterval = setInterval(() => {
                if (currentIndex < slides.length - 1) {
                    moveToSlide(currentIndex + 1);
                } else {
                    moveToSlide(0);
                }
            }, 5000);
        });
    }
    
    // Inicializamos con el primer slide
    moveToSlide(0);
}
*/ 