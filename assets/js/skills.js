document.addEventListener('DOMContentLoaded', function() {
    // Animate skill bars
    const animateSkillBars = () => {
      const skillLevels = document.querySelectorAll('.skill-level');
      
      skillLevels.forEach(level => {
        const rect = level.parentElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight - 100) {
          const width = level.dataset.level + '%';
          level.style.width = width;
        }
      });
    };
  
    // Animate cards on scroll
    const animateCards = () => {
      const cards = document.querySelectorAll('.skill-card, .platform-card');
      
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight - 100) {
          card.style.animationDelay = `${index * 0.1}s`;
          card.style.opacity = '1';
        }
      });
    };
  
    // Initialize animations
    const initAnimations = () => {
      // Set initial state
      document.querySelectorAll('.skill-level').forEach(level => {
        level.style.width = '0';
      });
      
      document.querySelectorAll('.skill-card, .platform-card').forEach(card => {
        card.style.opacity = '0';
      });
      
      // Run initial animations
      animateSkillBars();
      animateCards();
    };
  
    // Debounce function for scroll events
    const debounce = (func, wait = 100) => {
      let timeout;
      return function() {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
      };
    };
  
    // Initialize on load
    initAnimations();
    
    // Animate on scroll
    window.addEventListener('scroll', debounce(() => {
      animateSkillBars();
      animateCards();
    }));
  
    // Add hover effect to all cards
    const cards = document.querySelectorAll('.skill-card, .platform-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 15px 30px rgba(255, 215, 0, 0.1)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
      });
    });
  });
