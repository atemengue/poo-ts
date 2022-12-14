/** @format */

class Renderer {
  constructor(private appTemplate: HTMLDivElement) {
    this.appTemplate.innerHTML =
      '<h2>Bienvenu a UBA!</h2><br /><h5>Vos Comptes:</h5><br />';
  }

  render(html: string) {
    this.appTemplate.innerHTML = html;
  }

  renderError(message: string) {
    this.appTemplate.innerHTML += `<br /><br /><div class="alert alert-danger">${message}</div>`;
  }
}

export default Renderer;
