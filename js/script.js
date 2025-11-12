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
    "Experiencia en Stack MERN",
    "JavaScript Developer",
    "React & Node.js Developer"
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


  // ===== ELEMENT ANIMATION SYSTEM =====
  const animationElements = document.querySelectorAll('.slide-in-left, .slide-in-right, .scale-in, .stagger-animation');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('stagger-animation')) {
          const staggerElements = document.querySelectorAll('.stagger-animation');
          const elementIndex = Array.from(staggerElements).indexOf(entry.target);
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, elementIndex * 150);
        } else {
          entry.target.classList.add('visible');
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  animationElements.forEach((el) => observer.observe(el));


  
  // ===== ACCORDION =====
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
        setTimeout(() => {
          content.style.maxHeight = content.scrollHeight + 20 + "px";
        }, 10);
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


  // ===== EMAIL FUNCTIONALITY =====
  const emailBtn = document.getElementById("emailBtn");
  
  emailBtn.addEventListener("click", () => {
    const email = "romerojuanpablo.00@gmail.com";
    const subject = "Oportunidad Laboral";
    const body = "Hola Juan Pablo, te escribo por tu CV online.";
    
    // Intento mailto primero
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    // Si mailto no funciona después de 500ms, redirigir a Gmail web
    setTimeout(() => {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailUrl, '_blank');
    }, 500);
  });

});
