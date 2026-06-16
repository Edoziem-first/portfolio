function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

const revealElements = document.querySelectorAll(
  ".section-title, .about-text, .about-card, .service-card, .portfolio-card, form, .contact-info"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

function revealOnScroll() {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

function getFormData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value;

  return { name, email, service, message };
}

function sendWhatsApp() {
  const { name, email, service, message } = getFormData();

  const phoneNumber = "2347082466224"; // Replace with your WhatsApp number

  const whatsappMessage = `
Hello Edoziem Services,

My name is ${name}.
Email: ${email}
Service Needed: ${service}

Message:
${message}
`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(url, "_blank");
}

function sendEmail() {
  const { name, email, service, message } = getFormData();

  const businessEmail = "edoziemservices@gmail.com"; // Replace with your real email

  const subject = `New Service Request - ${service}`;

  const body = `
Hello Edoziem Services,

My name is ${name}.
Email: ${email}
Service Needed: ${service}

Message:
${message}
`;

  const mailtoLink = `mailto:${businessEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
}

const typingElement = document.getElementById("typing");

const words = [
  "Web Developer",
  "Video Editor",
  "Digital Creator",
  "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1200);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  const speed = isDeleting ? 60 : 100;
  setTimeout(typeEffect, speed);
}

typeEffect();

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const counters = document.querySelectorAll(".counter");

const animateCounters = () => {
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");

    let count = 0;

    const updateCounter = () => {
      const increment = target / 80;

      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
};

let counterStarted = false;

window.addEventListener("scroll", () => {
  const statsSection = document.querySelector(".stats");

  if (
    statsSection &&
    statsSection.getBoundingClientRect().top < window.innerHeight &&
    !counterStarted
  ) {
    counterStarted = true;
    animateCounters();
  }
});

const skillProgress = document.querySelectorAll(".skill-progress");

let skillsStarted = false;

window.addEventListener("scroll", () => {
  const skillsSection = document.querySelector(".skills");

  if (
    skillsSection &&
    skillsSection.getBoundingClientRect().top < window.innerHeight - 100 &&
    !skillsStarted
  ) {
    skillsStarted = true;

    skillProgress.forEach((bar) => {
      const width = bar.getAttribute("data-width");
      bar.style.width = width + "%";
    });
  }
});

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

const particlesContainer = document.getElementById("particles");

function createParticle() {
  const particle = document.createElement("div");

  particle.classList.add("particle");

  const size = Math.random() * 6 + 2;

  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  particle.style.left = `${Math.random() * 100}%`;

  particle.style.animationDuration =
    `${Math.random() * 8 + 8}s`;

  particlesContainer.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 16000);
}

setInterval(createParticle, 300);

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hide-loader");
  }, 1000);
});

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  if(document.body.classList.contains("light-mode")) {
    themeToggle.innerHTML = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    themeToggle.innerHTML = "🌙";
    localStorage.setItem("theme", "dark");
  }

});

window.addEventListener("load", () => {

  const savedTheme = localStorage.getItem("theme");

  if(savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeToggle.innerHTML = "☀️";
  }

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") === "#" + current
    ) {
      link.classList.add("active");
    }

  });

});

const scrollProgress = document.getElementById("scrollProgress");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  const documentHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const scrollPercent = (scrollTop / documentHeight) * 100;

  scrollProgress.style.width = scrollPercent + "%";
});

const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  cursorDot.style.left = e.clientX + "px";
  cursorDot.style.top = e.clientY + "px";
});

function openProjectModal(title, image, description, demoLink, githubLink) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalImage").src = image;
  document.getElementById("modalDescription").innerText = description;

  const demoBtn = document.getElementById("modalDemo");
  const githubBtn = document.getElementById("modalGithub");

  if (demoLink) {
    demoBtn.style.display = "inline-block";
    demoBtn.href = demoLink;
  } else {
    demoBtn.style.display = "none";
  }

  if (githubLink) {
    githubBtn.style.display = "inline-block";
    githubBtn.href = githubLink;
  } else {
    githubBtn.style.display = "none";
  }

  document.getElementById("projectModal").classList.add("active");
}

function closeProjectModal() {
  document.getElementById("projectModal").classList.remove("active");
}