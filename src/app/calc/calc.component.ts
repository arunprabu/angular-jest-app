import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styles: [
    `
      .box {
        height: 100px;
        width: 500px;
        background: #dedede;
        text-align: center;
        padding: 10px;
      }
    `,
  ],
})
export class CalcComponent {
  operand1: string = '0';
  operand2: string = '0';
  result: number = 0;

  add() {
    this.result = parseFloat(this.operand1) + parseFloat(this.operand2);
  }

  subtract() {
    this.result = parseFloat(this.operand1) - parseFloat(this.operand2);
  }
}
