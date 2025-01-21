import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { InputComponent } from "../input/input.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ButtonComponent, InputComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
