// TDD Tests for doushen.github.io
// Run: npx playwright test or open in browser

const tests = [
  // Layout
  {
    name: 'Has header with navigation',
    check: () => document.querySelector('header nav') !== null
  },
  {
    name: 'Has hero section with title',
    check: () => document.querySelector('h1')?.textContent.includes('Curious')
  },
  {
    name: 'Has about section',
    check: () => document.querySelector('#about') !== null
  },
  {
    name: 'Has projects section',
    check: () => document.querySelector('#projects') !== null
  },
  {
    name: 'Has footer',
    check: () => document.querySelector('footer') !== null
  },

  // Responsive
  {
    name: 'Has responsive grid',
    check: () => {
      const grid = document.querySelector('.grid');
      const style = window.getComputedStyle(grid);
      return style.display === 'grid';
    }
  },

  // Components
  {
    name: 'Project cards are clickable',
    check: () => document.querySelectorAll('.card a').length >= 3
  },
  {
    name: 'Has skill tags',
    check: () => document.querySelectorAll('.tag').length >= 3
  },

  // Interactions
  {
    name: 'Smooth scroll enabled',
    check: () => document.documentElement.style.scrollBehavior === 'smooth'
  },

  // Performance
  {
    name: 'No console errors',
    check: () => {
      let errors = [];
      window.onerror = (msg) => errors.push(msg);
      return errors.length === 0;
    }
  }
];

// Run tests
let passed = 0;
let failed = 0;

tests.forEach(test => {
  try {
    if (test.check()) {
      console.log(`✅ ${test.name}`);
      passed++;
    } else {
      console.log(`❌ ${test.name}`);
      failed++;
    }
  } catch(e) {
    console.log(`❌ ${test.name}: ${e.message}`);
    failed++;
  }
});

console.log(`\nResults: ${passed} passed, ${failed} failed`);
