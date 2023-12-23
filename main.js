import './scss/style.scss';

window.addEventListener("DOMContentLoaded", () => {

    const btnOpener = document.querySelector(".btn-open");
    const btnCloser = document.querySelector(".btn-close");
    const navigation = document.querySelector("nav");
    let windowWidth = window.innerWidth;

    //When the page loads it hides the mobile navigation
    if(windowWidth < 740) {
        navigation.classList.add("visibility");
    }
    // On hamburger icon click show navigation
    btnOpener.addEventListener("click", () => {
        navigation.classList.toggle("visibility");
    })
    // On remove icon click hides the navigation
    btnCloser.addEventListener("click", () => {
        navigation.classList.toggle("visibility");
    })

    // On resize show/hide mobile or desktop navigation 
    window.addEventListener("resize", () => {
        if(windowWidth > 740) {
        navigation.classList.remove("visibility");
        }
        location.reload();
    })
    // On orientation show/hide mobile or desktop navigation
    window.addEventListener("orientationchange", () => {
        navigation.classList.toggle("visibility");
    })
})

