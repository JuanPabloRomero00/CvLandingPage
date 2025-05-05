document.addEventListener("DOMContentLoaded", () => {
  // Fade-in
  const fadeEls = document.querySelectorAll(".fade-in");
  const fadeUps = document.querySelectorAll(".fade-in-up");
  fadeUps.forEach((el) => observer.observe(el));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );
  fadeEls.forEach((el) => observer.observe(el));

  // Acordeón
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
  //scroll to top button
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
