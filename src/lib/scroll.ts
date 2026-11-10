// Proprietary source — see LICENSE.md for terms.

import type Lenis from 'lenis';

let activeLenis: Lenis | null = null;

export function setLenisInstance(instance: Lenis | null): void {
  activeLenis = instance;
}

export function scrollToElement(selector: string): void {
  if (activeLenis) {
    activeLenis.scrollTo(selector);
    return;
  }

  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
