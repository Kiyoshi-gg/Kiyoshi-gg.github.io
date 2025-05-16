document.addEventListener("DOMContentLoaded", () => {
    const html = document.documentElement;
    const saveTheme = localStorage.getItem("theme");
    if (saveTheme) {
        html.setAttribute("theme", saveTheme);
    }
    document.getElementById("light-theme").addEventListener("click",() => {
        html.setAttribute("theme","light");
        localStorage.setItem("theme","light");
    })
    document.getElementById("dark-theme").addEventListener("click",() => {
        html.setAttribute("theme","dark");
        localStorage.setItem("theme","dark");
    })
})