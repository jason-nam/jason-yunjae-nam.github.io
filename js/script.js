// const timeContainer = document.getElementById("time-container");
// const BIRTH_DAY = "12-10-1815";
// const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
// const intlNumberFormatter = new Intl.NumberFormat("en-US");

// setInterval(() => {
//   const now = new Date();
//   const difference = Math.floor(
//     (now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000
//   );

//   timeContainer.innerText = intlNumberFormatter.format(difference);
// }, 1000);


document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const navMenu = document.querySelector(".nav-menu");

  menuBtn.addEventListener("click", () => {
    // Toggle the "active" class on the menu button
    menuBtn.classList.toggle("active");

    // Toggle the "active" class on the navigation menu
    navMenu.classList.toggle("active");
  });

  // Close the navigation menu when a navigation item is clicked (for better user experience)
  const navItems = document.querySelectorAll(".navigation-item a");
  navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuBtn.classList.remove("active");
    });
  });
});