class Calculator {
  private display: HTMLInputElement;
  private buttons: HTMLDivElement;

  constructor() {
      this.display = document.querySelector('.display') as HTMLInputElement;
      this.buttons = document.querySelector('.buttons') as HTMLDivElement;
      this.createButtons();
      this.addListeners();
  }

  private createButtons(): void {
      const buttonValues: string[] = [
          '7', '8', '9', '/',
          '4', '5', '6', '*',
          '1', '2', '3', '-',
          '0', '.', '=', '+',
          'C'
      ];

      for (const value of buttonValues) {
          const button = document.createElement('button');
          button.textContent = value;
          button.classList.add('button');
          this.buttons.appendChild(button);
      }
  }

  private addListeners(): void {
      this.buttons.addEventListener('click', (event) => {
          const target = event.target as HTMLButtonElement;
          console.log(target);
          if (target.tagName === 'BUTTON') {
              this.handleButtonClick(target.textContent);
          }
      });
  }

  private handleButtonClick(value: string): void {
      switch (value) {
          case '=':
              try {
                  this.display.value = eval(this.display.value);
              } catch (e) {
                  this.display.value = 'Error';
              }
              break;
          case 'C':
              this.display.value = '';
              break;
          default:
              this.display.value += value;
              break;
      }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Calculator();
});
