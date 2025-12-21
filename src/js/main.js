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
    
    // Добавляем класс для анимаций после загрузки
    setTimeout(() => {
      document.body.classList.add('theme-transition-ready');
    }, 100);
  }
  
  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.updateToggleIcon(theme);
  }
  
  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.currentTheme = newTheme;
    this.setTheme(newTheme);
    
    // Анимация переключения
    this.animateToggle();
  }
  
  updateToggleIcon(theme) {
    const circle = document.querySelector('.theme-toggle__circle');
    if (theme === 'dark') {
      circle.style.transform = 'rotate(180deg) scale(1.1)';
    } else {
      circle.style.transform = 'rotate(0deg) scale(1)';
    }
  }
  
  animateToggle() {
    const circle = document.querySelector('.theme-toggle__circle');
    
    // Добавляем класс для анимации
    circle.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
    
    // Эффект "пульсации"
    this.themeToggle.style.transform = 'scale(1.15)';
    setTimeout(() => {
      this.themeToggle.style.transform = 'scale(1)';
    }, 150);
  }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  new ThemeSwitcher();
});
