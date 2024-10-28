export function darkMode() {
    const darkModeBtn = document.querySelector('#darkModeBtn');
    const sunIcon = document.querySelector('#sunIcon');
    const moonIcon = document.querySelector('#moonIcon');

    // Función para actualizar los iconos
    function updateIcons(isDark) {
        if (isDark) {
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        } else {
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        }
    }

    // Verifica si el tema guardado en localStorage es 'dark'
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark');
        updateIcons(true);
    } else {
        updateIcons(false);
    }

    darkModeBtn.addEventListener('click', () => {
        // Alterna la clase 'dark' en el elemento raíz
        document.documentElement.classList.toggle('dark');

        // Guarda la preferencia del usuario en localStorage
        if (document.documentElement.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
            updateIcons(true);
        } else {
            localStorage.setItem('theme', 'light');
            updateIcons(false);
        }
    });
}