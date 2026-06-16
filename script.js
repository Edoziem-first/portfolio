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