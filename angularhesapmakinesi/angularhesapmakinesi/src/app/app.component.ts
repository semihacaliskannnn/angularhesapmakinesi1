import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularhesapmakinesi';

  displayValue: string = '';
  operator: string = '';
  operand1: number = 0;

  addToDisplay(number: number) {
    this.displayValue += number;
  }

  addOperator(operator: string) {
    this.operator = operator;
    this.operand1 = parseInt(this.displayValue);
    this.displayValue = '';
  }

  calculate() {
    const operand2 = parseInt(this.displayValue);
    let result = 0;
    switch (this.operator) {
      case '+':
        result = this.operand1 + operand2;
        break;
      case '-':
        result = this.operand1 - operand2;
        break;
      case '*':
        result =this.operand1 * operand2;
        break;
      case '/':
        result=this.operand1 / operand2;  
    }
    this.displayValue = result.toString();
  }

  clear() {
    this.displayValue = '';
    this.operator = '';
    this.operand1 = 0;
  }
  
}
