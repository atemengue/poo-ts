/** @format */

class Renderer {
  private constructor() {}

  static appTemplate: HTMLDivElement;

  static render(html: string) {
    Renderer.appTemplate.innerHTML = html;
  }
}

export default Renderer;
