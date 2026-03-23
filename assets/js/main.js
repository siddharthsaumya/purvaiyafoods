// Main JavaScript File for Spice Blends Website - Responsive Version

// ============================================
// PAGE LOADER - WAIT FOR IMAGES TO LOAD
// ============================================

window.addEventListener('load', function() {
  // All images are now loaded
  const loader = document.getElementById('loader');
  if (loader) {
    // Add hidden class to fade out the loader
    loader.classList.add('hidden');
    
    // Remove the loader element from DOM after animation completes
    setTimeout(() => {
      loader.remove();
    }, 500);
  }
});

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  initFormValidation();
  initScrollAnimations();
  initMobileMenu();
  initProductTabs();
});

// ============================================
// NAVIGATION & HEADER
// ============================================

function initNavigation() {
  // Add active color to current page navigation
  const pathname = window.location.pathname;
  const currentPage = pathname.substring(pathname.lastIndexOf('/') + 1) || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    let href = link.getAttribute('href');
    // Normalize href for comparison (remove ../ prefixes)
    const hrefPage = href.substring(href.lastIndexOf('/') + 1);
    
    // Check if current page matches
    if (hrefPage === currentPage || 
        (currentPage === '' && href === 'index.html') ||
        ((currentPage === '' || currentPage === 'index.html') && 
         (href === '../index.html' || href === 'index.html'))) {
      link.style.color = 'var(--secondary-color)';
      link.style.fontWeight = '600';
    }
  });

  // Smooth scroll for anchor links and close mobile menu
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          // Close mobile menu if open
          closeMobileMenu();
        }
      }
    });
  });
  
  // Close menu when clicking on regular navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Don't prevent default - allow page navigation
      // Just close the menu after a brief delay to show the click effect
      setTimeout(() => {
        closeMobileMenu();
      }, 100);
    });
  });
}

// ============================================
// FORM VALIDATION
// ============================================

function initFormValidation() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      if (!validateForm(this)) {
        e.preventDefault();
      }
    });
  });
}

function validateForm(form) {
  const inputs = form.querySelectorAll('input[required], textarea[required]');
  let isValid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      showError(input, 'This field is required');
      isValid = false;
    } else {
      clearError(input);
    }

    // Email validation
    if (input.type === 'email' && input.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value)) {
        showError(input, 'Please enter a valid email');
        isValid = false;
      }
    }
  });

  return isValid;
}

function showError(input, message) {
  input.style.borderColor = '#e74c3c';
  let errorEl = input.nextElementSibling;
  
  if (!errorEl || !errorEl.classList.contains('error-message')) {
    errorEl = document.createElement('span');
    errorEl.className = 'error-message';
    errorEl.style.color = '#e74c3c';
    errorEl.style.fontSize = '12px';
    errorEl.style.marginTop = '-16px';
    errorEl.style.marginBottom = '8px';
    errorEl.style.display = 'block';
    input.parentNode.insertBefore(errorEl, input.nextSibling);
  }
  
  errorEl.textContent = message;
}

function clearError(input) {
  input.style.borderColor = '';
  const errorEl = input.nextElementSibling;
  
  if (errorEl && errorEl.classList.contains('error-message')) {
    errorEl.remove();
  }
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Skip animations for philosophy2 section
        const isInPhilosophy2 = entry.target.closest('#philosophy2');
        
        if (!isInPhilosophy2) {
          // Add fade-in animation to cards (except in philosophy2)
          if (entry.target.classList.contains('card') || entry.target.classList.contains('feature-box') || entry.target.classList.contains('testimonial')) {
            entry.target.classList.add('fade-in');
          }
        }
        
        // Handle number counter animation for icon-count elements
        if (entry.target.classList.contains('icon-count') && entry.target.getAttribute('data-target')) {
          animateCounter(entry.target);
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all cards, feature boxes, testimonials, and counters
  document.querySelectorAll('.card, .feature-box, .testimonial, .icon-count').forEach(el => {
    observer.observe(el);
  });
}

// ============================================
// NUMBER COUNTER ANIMATION
// ============================================

function animateCounter(element) {
  const target = parseFloat(element.getAttribute('data-target'));
  const type = element.getAttribute('data-type');
  const duration = 2000; // 2 seconds animation
  const startTime = Date.now();
  let hasAddedSuffix = false;

  function updateCounter() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function for smooth animation
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = target * easeOut;
    
    // Format the display value
    let displayValue;
    if (type === 'decimal') {
      displayValue = current.toFixed(1);
    } else {
      displayValue = Math.floor(current);
    }
    
    // Add suffix only when animation is complete
    if (progress === 1 && !hasAddedSuffix) {
      if (type === 'number') {
        displayValue = displayValue + '+';
      } else if (type === 'decimal') {
        displayValue = displayValue + '/5';
      }
      hasAddedSuffix = true;
    }
    
    element.textContent = displayValue;
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }
  
  updateCounter();
}

// ============================================
// MOBILE MENU - RESPONSIVE NAVIGATION
// ============================================

function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');
  const navLinks = document.querySelectorAll('nav ul li a');
  
  // Menu toggle click handler
  if (menuToggle) {
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      toggleMobileMenu();
    });
  }

  // Close menu when clicking on a navigation link (but allow navigation)
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Allow default link behavior, but close menu if not an anchor link
      const href = this.getAttribute('href');
      if (!href.startsWith('#')) {
        // For page navigation, close menu immediately so next page loads with menu closed
        closeMobileMenu();
      }
    });
  });

  // Close menu when clicking outside the nav area
  document.addEventListener('click', function(e) {
    const nav = document.querySelector('nav');
    
    if (navMenu && navMenu.classList.contains('active')) {
      // Check if click is outside nav element
      if (nav && !nav.contains(e.target)) {
        e.preventDefault();
        closeMobileMenu();
      }
    }
  });

  // Close menu on window resize to desktop view
  window.addEventListener('resize', function() {
    if (window.innerWidth > 767) {
      closeMobileMenu();
    }
  });
}

function toggleMobileMenu() {
  const navMenu = document.querySelector('nav ul');
  if (navMenu) {
    navMenu.classList.toggle('active');
  }
}

function closeMobileMenu() {
  const navMenu = document.querySelector('nav ul');
  if (navMenu) {
    navMenu.classList.remove('active');
  }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function addToCart(productName) {
  alert('Added "' + productName + '" to cart! (This is a demo)');
}

// ============================================
// BUTTON CLICK HANDLERS
// ============================================

// Handle responsive button behaviors
document.addEventListener('DOMContentLoaded', function() {
  // Add touch-friendly button behaviors for mobile
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(btn => {
    btn.addEventListener('mouseout', function() {
      this.style.transform = '';
    });
  });
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Filter products/items
function filterItems(category) {
  const items = document.querySelectorAll('[data-category]');
  
  items.forEach(item => {
    if (category === 'all' || item.dataset.category === category) {
      item.style.display = 'block';
      item.classList.add('fade-in');
    } else {
      item.style.display = 'none';
    }
  });

  // Update active filter button
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-filter="${category}"]`)?.classList.add('active');
}

// Lazy load images
function initLazyLoad() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLazyLoad);
} else {
  initLazyLoad();
}

// Add to cart simulation
function addToCart(productName) {
  const notification = document.createElement('div');
  notification.textContent = `${productName} added to cart!`;
  notification.style.cssText = `
    position: fixed;
    top: 80px;
    right: 20px;
    background-color: var(--secondary-color);
    color: var(--text-dark);
    padding: 16px 24px;
    border-radius: var(--border-radius-md);
    z-index: 999;
    animation: slideUp 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// ============================================
// PRODUCT PAGE TABS
// ============================================

function initProductTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tabName = this.getAttribute('data-tab');
      
      // Remove active class from all buttons and contents
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked button and corresponding content
      this.classList.add('active');
      document.getElementById(tabName)?.classList.add('active');
    });
  });
}

// Quantity increment/decrement
function updateQuantity(elementId, change) {
  const input = document.getElementById(elementId);
  if (input) {
    let value = parseInt(input.value) + change;
    if (value >= 1) {
      input.value = value;
    }
  }
}

// Newsletter subscription
function subscribeNewsletter(email) {
  if (!email || !email.includes('@')) {
    alert('Please enter a valid email address');
    return false;
  }
  
  // In a real application, this would send to a server
  alert('Thank you for subscribing!');
  document.querySelector('input[type="email"]').value = '';
  return false;
}
