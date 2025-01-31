// Add smooth scrolling to navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').substring(1);
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Example animation on button click
  document.querySelector('.cta-btn').addEventListener('click', () => {
    alert("Get started button clicked!");
  });

  
  window.addEventListener('load', () => {
    const image = document.querySelector('.styled-image');
    image.style.opacity = 0;
    image.style.transition = 'opacity 2s ease-in-out';
    setTimeout(() => (image.style.opacity = 1), 200);
  });

  
  document.addEventListener("DOMContentLoaded", () => {
    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transition = `opacity 0.5s ease ${(index + 1) * 0.2}s, transform 0.5s ease ${(index + 1) * 0.2}s`;
      card.style.transform = "translateY(20px)";
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, 100);
    });
  });

  
  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.3}s`;
    });
  });

  

  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".feature-item, .content, .contact-btn");
    
    elements.forEach((el, index) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = `opacity 0.5s ease ${(index + 1) * 0.2}s, transform 0.5s ease ${(index + 1) * 0.2}s`;

        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, 100);
    });
});


document.addEventListener("DOMContentLoaded", () => {
  const testimonialBox = document.querySelector(".testimonial-box");
  testimonialBox.style.opacity = "1";
  testimonialBox.style.transform = "translateY(0)";
});



document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Your message has been sent successfully!");
      form.reset();
  });
});


document.addEventListener("DOMContentLoaded", function () {
  let socialIcons = document.querySelectorAll(".social-icons a");

  socialIcons.forEach(icon => {
      icon.addEventListener("mouseover", function () {
          icon.style.transform = "rotate(10deg) scale(1.2)";
      });

      icon.addEventListener("mouseout", function () {
          icon.style.transform = "rotate(0deg) scale(1)";
      });
  });
});



  