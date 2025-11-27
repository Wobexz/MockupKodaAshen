export class ParallaxField {
  private container: HTMLElement;
  private intensity: number;
  private layers: HTMLElement[];

  constructor(container: HTMLElement, intensity = 30) {
    this.container = container;
    this.intensity = intensity;
    this.layers = Array.from(container.querySelectorAll('[data-parallax]')) as HTMLElement[];
    this.bind();
  }

  private bind() {
    window.addEventListener('pointermove', (event) => {
      const { innerWidth, innerHeight } = window;
      const x = (event.clientX / innerWidth - 0.5) * 2;
      const y = (event.clientY / innerHeight - 0.5) * 2;
      this.layers.forEach((layer, index) => {
        const depth = (index + 1) / this.layers.length;
        const translateX = -x * this.intensity * depth;
        const translateY = -y * this.intensity * depth;
        layer.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
      });
    });
  }
}
