import { Request } from '@/request/Request';

export class Main {
  constructor(selector, options) {
    this.root = selector;
    this.components = options.components || [];
    this.request = new Request();
  }
  render() {
    this.components.forEach((Component) => {
      const component = new Component(this.request);
      const rootChild = document.createElement(component.tag);
      rootChild.classList.add(component.classTag);
      this.root.appendChild(component.render(rootChild));
      component.initListener();
    });
  }
}
