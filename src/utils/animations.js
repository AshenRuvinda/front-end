// Enhanced animation utilities
export const fadeIn = (element, duration = 1000, delay = 0) => {
    if (!element) return;
    
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
    
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, delay);
  };
  
  export const slideInFromLeft = (element, duration = 800, delay = 0) => {
    if (!element) return;
    
    element.style.opacity = '0';
    element.style.transform = 'translateX(-50px)';
    element.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
    
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateX(0)';
    }, delay);
  };
  
  export const slideInFromRight = (element, duration = 800, delay = 0) => {
    if (!element) return;
    
    element.style.opacity = '0';
    element.style.transform = 'translateX(50px)';
    element.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
    
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateX(0)';
    }, delay);
  };
  
  export const scaleIn = (element, duration = 600, delay = 0) => {
    if (!element) return;
    
    element.style.opacity = '0';
    element.style.transform = 'scale(0.8)';
    element.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
    
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'scale(1)';
    }, delay);
  };
  
  export const animateCounter = (element, start = 0, end = 100, duration = 2000) => {
    if (!element) return;
    
    const startTime = performance.now();
    const startValue = parseInt(start);
    const endValue = parseInt(end);
    const difference = endValue - startValue;
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (difference * easeOutQuart));
      
      element.textContent = currentValue;
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.textContent = endValue;
      }
    };
    
    requestAnimationFrame(animate);
  };
  
  // Intersection Observer for scroll animations
  export const createScrollObserver = (callback, options = {}) => {
    const defaultOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    };
    
    return new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback(entry.target);
        }
      });
    }, defaultOptions);
  };
  
  // Stagger animation for multiple elements
  export const staggerAnimation = (elements, animationFunction, staggerDelay = 100) => {
    if (!elements || elements.length === 0) return;
    
    Array.from(elements).forEach((element, index) => {
      const delay = index * staggerDelay;
      animationFunction(element, 800, delay);
    });
  };
  
  // Page transition animations
  export const pageTransition = {
    enter: (element) => {
      if (!element) return;
      
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 600ms ease-out, transform 600ms ease-out';
      
      requestAnimationFrame(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      });
    },
    
    exit: (element) => {
      if (!element) return;
      
      element.style.transition = 'opacity 300ms ease-in, transform 300ms ease-in';
      element.style.opacity = '0';
      element.style.transform = 'translateY(-20px)';
    }
  };
  
  // Utility to detect reduced motion preference
  export const respectsReducedMotion = () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  };
  
  // Enhanced fade in that respects user preferences
  export const accessibleFadeIn = (element, duration = 1000, delay = 0) => {
    if (respectsReducedMotion()) {
      // Just make visible without animation
      if (element) {
        element.style.opacity = '1';
        element.style.transform = 'none';
      }
      return;
    }
    
    fadeIn(element, duration, delay);
  };