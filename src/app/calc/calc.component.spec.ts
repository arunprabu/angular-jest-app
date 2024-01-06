import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcComponent } from './calc.component';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CalcComponent', () => {
  let component: CalcComponent;
  let fixture: ComponentFixture<CalcComponent>;
  let template: HTMLElement;
  let debugElement: DebugElement;

  beforeEach(() => {
    // Act
    TestBed.configureTestingModule({
      declarations: [CalcComponent],
      imports: [FormsModule], // importing this for ngModel
    });
    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create CalcComponent', () => {
    expect(component).toBeTruthy();
  });

  // Testing variables
  it('should initialize operands and result with default values 0', () => {
    // Assert
    expect(component.operand1).toEqual('0');
    expect(component.operand2).toEqual('0');
    expect(component.result).toEqual(0);
  });

  // Testing Method
  it('should add two operands properly and update the result', () => {
    // setting input values
    component.operand1 = '100';
    component.operand2 = '50';
    // Triggering the add method
    component.add();
    // check if the result is calculated properly
    expect(component.result).toEqual(150);

    component.operand1 = '3';
    component.operand2 = '2';
    component.add();
    expect(component.result).toEqual(5);
  });

  // Add button should have the label ADD, SUBTRACT, MULTIPLY, DIVIDE
  it('should have buttons with label ADD, SUBTRACT, MULTIPLY, DIVIDE', () => {
    const addButton: HTMLButtonElement = template.querySelector(
      'button.add-btn'
    ) as HTMLButtonElement;
    expect(addButton.textContent).toBe('ADD');

    const subButton: HTMLButtonElement = template.querySelector(
      'button.sub-btn'
    ) as HTMLButtonElement;
    expect(subButton.textContent).toBe('SUBTRACT');
  });

  // Testing Event Handler and result -- for add
  it('should add two operands and produce right result in html template upon add button click', () => {
    // setting input values
    component.operand1 = '100';
    component.operand2 = '50';

    // find out the add button using '.add-btn' from html
    const addBtn = debugElement.query(By.css('.add-btn'));
    // trigger the click event thru program
    addBtn.triggerEventHandler('click', null);
    fixture.detectChanges(); // Triggering UI Updates -- w/o this you can't get the updated content from html elements

    // expect component.result to be 150
    expect(component.result).toBe(150);

    // find the html element in which result is displayed and verify it too
    // const para: HTMLParagraphElement = template.querySelector('.result-box') as HTMLParagraphElement;
    // expect(para.textContent).toBe('Result: 150');

    // Recommending the following instead of the above
    const resultBox = debugElement.query(By.css('.result-box'));
    expect(resultBox.nativeElement.textContent).toBe(' Result: 150 ');
  });

  // TODO: Try the above for subtract
});
