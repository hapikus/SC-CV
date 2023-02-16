const darkModeButton = document.querySelector('.dark-mode-button');

// check localStorage
if (localStorage.getItem('darkMode') === 'dark') {
    darkModeButton.classList.add('dark-mode-button--active');
    document.body.classList.add('dark');
}

//check system settings
if (localStorage.getItem('darkMode') !== 'ligth' 
    && window.matchMedia 
    && window.matchMedia("(prefers-colors-scheme: dark)").matches) {
    localStorage.setItem('darkMode', 'dark');
    darkModeButton.classList.add('dark-mode-button--active');
    document.body.classList.add('dark');
}

// dark-mode switch
darkModeButton.onclick = function() {
    darkModeButton.classList.toggle('dark-mode-button--active');
    let isDark = document.body.classList.toggle('dark');

    if (isDark) {
        localStorage.setItem('darkMode', 'dark');
    } else {
        localStorage.setItem('darkMode', 'ligth');
    }
}