import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgStyle, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [FormGroupDirective],
})
export class InputComponent {
  @Input() placeholder: string = "";
  @Input() icon: string = "";
  @Input() margin: string = "";
  
}
