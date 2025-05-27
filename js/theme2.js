document.addEventListener("DOMContentLoaded", () => {
    const html = document.documentElement;
    const saveTheme = localStorage.getItem("theme");
    if (saveTheme) {
        html.setAttribute("theme", saveTheme);
    }
})