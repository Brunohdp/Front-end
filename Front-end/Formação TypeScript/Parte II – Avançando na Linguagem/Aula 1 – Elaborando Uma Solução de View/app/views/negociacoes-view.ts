export class NegociacoesView {

  private elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  template(): string {
    return `
    <table class="table table-hover tamble-bordered">
      <thead>
          <tr>
              <th>DATA</th>
              <th>QUANTIDADE</th>
              <th>VALOR</th>
          </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
    `;
  }

  update(): void {
    this.elemento.innerHTML = this.template();
  }

}