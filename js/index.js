const mainNavLinks = document.querySelectorAll(".main-nav a");
const headerEl = document.querySelector(".header");
const btnMobileNav = document.querySelector(".btn-mobile-nav");


btnMobileNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open"); 
  const closeIcon = document.querySelector(".icon-mobile-nav[name='close-outline']");
  const menuIcon = document.querySelector(".icon-mobile-nav[name='menu-outline']");

  if (headerEl.classList.contains("nav-open")) {
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  } else {
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  }
});


mainNavLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.remove("nav-open");
      const closeIcon = document.querySelector(".icon-mobile-nav[name='close-outline']");
      const menuIcon = document.querySelector(".icon-mobile-nav[name='menu-outline']");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
    }
  });
});





const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    project.addEventListener('click', function () {
        const id = project.id;

        switch (id) {
            case 'project-1':
                window.open('https://github.com/A-1198/Workout-Buddy-', '_blank');
                break;
            case 'project-2':
                window.open('https://github.com/A-1198/Library-Management-System', '_blank');
                break;
            case 'project-3':
                window.open('https://github.com/A-1198/Shopping-with-Ayush', '_blank');
                break;
            case 'project-4':
                window.open('https://omnifood-ayush-raj.netlify.app/', '_blank');
                break;
            case 'project-5':
                window.open('https://github.com/A-1198/Sentimental_Analysis', '_blank');
                break;
            case 'project-6':
                window.open('https://github.com/A-1198/Ayush-s-Mini-Vlog', '_blank');
                break;
        }
    });
});
