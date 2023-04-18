export const handleClick = (anchor) => {
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


 export const SECTIONS = [
    { title: "HOME", id: "#hero-section" },
    { title: "ABOUT", id: "#about-section" },
    { title: "MENU", id: "#menu-section" },
    { title: "ORDER ONLINE", id: "#home" },
    { title: "LOGIN", id: "#login" },
  ];