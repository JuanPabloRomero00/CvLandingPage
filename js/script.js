document.addEventListener("DOMContentLoaded", () => {
  
  // ===== VIDEO BACKGROUND =====
  const bgVideo = document.getElementById('bg-video');
  if (bgVideo) {
    bgVideo.addEventListener('error', () => {
      console.log('Background video failed to load');
      bgVideo.style.display = 'none';
    });
  }
  
  // ===== TYPING ANIMATION =====
  const typingElement = document.getElementById("typing-text");
  const phrases = [
    "Desarrollador Web Full Stack",
    "Especialista en Stack MERN",
    "JavaScript Developer",
    "React & Node.js Expert"
  ];
  
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  
  function typeWriter() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 500;
    }
    
    setTimeout(typeWriter, typingSpeed);
  }
  
  typeWriter();

  // ===== ENHANCED ANIMATION SYSTEM =====
  const animationElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .stagger-animation');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Agregar delay escalonado para elementos stagger
        if (entry.target.classList.contains('stagger-animation')) {
          const staggerElements = document.querySelectorAll('.stagger-animation');
          const elementIndex = Array.from(staggerElements).indexOf(entry.target);
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, elementIndex * 150); // 150ms delay entre elementos
        } else {
          entry.target.classList.add('visible');
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  animationElements.forEach((el) => observer.observe(el));

  // ===== SMOOTH SCROLL TRANSITIONS =====
  const navLinks = document.querySelectorAll('.hero-nav a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        // Smooth scroll personalizado
        const headerOffset = 80;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Highlight temporal de la sección
        targetSection.style.transform = 'scale(1.02)';
        targetSection.style.transition = 'transform 0.3s ease';
        
        setTimeout(() => {
          targetSection.style.transform = 'scale(1)';
        }, 300);
      }
    });
  });
  
  // ===== SCROLL PROGRESS INDICATOR =====
  const createScrollProgressIndicator = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = scrollPercent + '%';
    });
  };
  
  createScrollProgressIndicator();
  
  // ===== DYNAMIC PARTICLES =====
  const createParticles = () => {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
      overflow: hidden;
    `;
    document.body.appendChild(particleContainer);
    
    const createParticle = () => {
      const particle = document.createElement('div');
      const size = Math.random() * 4 + 2;
      const animationDuration = Math.random() * 15 + 10;
      const delay = Math.random() * 5;
      
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(0, 133, 132, 0.3);
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        animation: particleFloat ${animationDuration}s linear ${delay}s infinite;
      `;
      
      particleContainer.appendChild(particle);
      
      // Remover partícula después de la animación
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, (animationDuration + delay) * 1000);
    };
    
    // Crear partículas periódicamente
    setInterval(createParticle, 3000);
    
    // Crear algunas partículas iniciales
    for (let i = 0; i < 5; i++) {
      setTimeout(createParticle, i * 600);
    }
  };
  
  createParticles();
  const accordions = document.querySelectorAll(".accordion");
  accordions.forEach((acc) => {
    const btn = acc.querySelector(".accordion-btn");
    const content = acc.querySelector(".accordion-content");
    
    btn.addEventListener("click", () => {
      const isOpen = acc.classList.contains("active");
      
      accordions.forEach((a) => {
        a.classList.remove("active");
        a.querySelector(".accordion-content").style.maxHeight = null;
      });
      
      if (!isOpen) {
        acc.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
  
  // ===== SCROLL TO TOP BUTTON =====
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

});
