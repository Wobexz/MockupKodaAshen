declare const gsap: any;
declare const ScrollTrigger: any;

gsap.registerPlugin(ScrollTrigger);

export const animateOnScroll = (targets: string | Element[]): void => {
  const elements = typeof targets === 'string'
    ? Array.from(document.querySelectorAll(targets))
    : targets;

  elements.forEach((el) => {
    gsap.fromTo(
      el,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });
};

export const initParallaxLayers = (containerSelector: string): void => {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  const layers = Array.from(container.querySelectorAll<HTMLElement>('[data-depth]'));

  container.addEventListener('mousemove', (event) => {
    const rect = container.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    layers.forEach((layer) => {
      const depth = Number(layer.dataset.depth || '0');
      const moveX = x * depth * 50;
      const moveY = y * depth * 50;
      gsap.to(layer, { x: moveX, y: moveY, duration: 0.8, ease: 'expo.out' });
    });
  });
};

export const initCharacterTilt = (selector: string): void => {
  const card = document.querySelector<HTMLElement>(selector);
  if (!card) return;

  card.addEventListener('mousemove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    const rotateY = x * 18;
    const rotateX = -y * 18;

    gsap.to(card, {
      rotateY,
      rotateX,
      duration: 0.5,
      ease: 'expo.out',
      transformPerspective: 900,
    });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.8, ease: 'elastic.out(1, 0.4)' });
  });
};

export const initScrollRevealSections = (): void => {
  const sections = document.querySelectorAll<HTMLElement>('.section');
  sections.forEach((section, index) => {
    gsap.from(section, {
      opacity: 0,
      y: 40,
      duration: 1.1,
      ease: 'expo.out',
      delay: 0.08 * index,
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
        once: true,
      },
    });
  });
};

export const initFloatingParticles = (selector: string): void => {
  const layer = document.querySelector<HTMLElement>(selector);
  if (!layer) return;

  const particles = Array.from({ length: 18 }).map(() => {
    const el = document.createElement('span');
    el.className = 'particle';
    layer.appendChild(el);
    return el;
  });

  particles.forEach((particle) => {
    const size = Math.random() * 6 + 2;
    const duration = Math.random() * 8 + 6;
    const delay = Math.random() * 2;
    gsap.set(particle, {
      width: size,
      height: size,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      opacity: Math.random() * 0.6 + 0.2,
    });

    gsap.to(particle, {
      y: `+=${Math.random() * 80 + 40}`,
      x: `+=${Math.random() * 60 - 30}`,
      duration,
      delay,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  });
};

export const initSmoothAnchors = (): void => {
  const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        event.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
};
