// theme.js
class ThemeSwitcher {
  constructor() {
    this.themeToggle = document.getElementById('themeToggle');
    this.currentTheme = localStorage.getItem('theme') || 'light';
    
    this.init();
  }
  
  init() {
    // Устанавливаем начальную тему
    this.setTheme(this.currentTheme);
    
    // Вешаем обработчик на кнопку
    this.themeToggle.addEventListener('click', () => this.toggleTheme());
    
    // Плавное появление кнопки
    this.fadeInButton();
  }
  
  setTheme(theme) {
    // Добавляем класс для плавного перехода
    document.body.classList.add('theme-changing');
    
    // Устанавливаем новую тему
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.updateToggleIcon(theme);
    
    // Удаляем класс после завершения перехода
    setTimeout(() => {
      document.body.classList.remove('theme-changing');
    }, 500);
  }
  
  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.currentTheme = newTheme;
    this.setTheme(newTheme);
    
    // Анимация переключения кнопки
    this.animateToggle();
  }
  
  updateToggleIcon(theme) {
    const sunIcon = document.querySelector('.theme-toggle__icon--sun');
    const moonIcon = document.querySelector('.theme-toggle__icon--moon');
    
    // Анимация меняется через CSS, но можно добавить дополнительные эффекты
    if (theme === 'dark') {
      this.themeToggle.style.backgroundColor = '#232536';
    } else {
      this.themeToggle.style.backgroundColor = '#ffd050';
    }
  }
  
  animateToggle() {
    // Эффект "пульсации" кнопки
    this.themeToggle.style.transform = 'scale(1.15) rotate(180deg)';
    this.themeToggle.style.transition = 'transform 0.4s ease, background-color 0.5s ease';
    
    // Эффект "отскока"
    setTimeout(() => {
      this.themeToggle.style.transform = 'scale(0.95) rotate(180deg)';
    }, 200);
    
    setTimeout(() => {
      this.themeToggle.style.transform = 'scale(1) rotate(0deg)';
    }, 400);
  }
  
  fadeInButton() {
    // Плавное появление кнопки после загрузки
    setTimeout(() => {
      this.themeToggle.style.opacity = '0';
      this.themeToggle.style.transition = 'opacity 0.5s ease';
      setTimeout(() => {
        this.themeToggle.style.opacity = '1';
      }, 100);
    }, 500);
  }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  new ThemeSwitcher();
});
