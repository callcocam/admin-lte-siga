import { Component, OnInit, AfterContentInit, Input, ContentChild } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-input-component',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit , AfterContentInit {
  @Input() label: string;
  @Input() icone: string;
  @Input() errorMessage: string;
  @Input() successMessage: string;

  input: any;

  @ContentChild(NgModel) model: NgModel;
  @ContentChild(FormControlName) control: FormControlName
  constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit(): void {
    this.input = this.model || this.control
    if (this.input === undefined) {
      throw new Error(
        "Esse componente precisa ser usado com uma dictiva ngModel ou FormControlName"
      );
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }
  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }
}
