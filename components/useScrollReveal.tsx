'use client';

import { useEffect } from 'react';

export default function useScrollReveal() {
  useEffect(() => {
    const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    // Observe existing elements
    document.querySelectorAll(selectors).forEach((el) => observer.observe(el));

    // Watch for new elements added to DOM (for dynamically rendered content)
    const mutation = new MutationObserver(() => {
      document.querySelectorAll(selectors).forEach((el) => {
        if (!el.classList.contains('visible')) {
          observer.observe(el);
        }
      });
    });

    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);
}
