import { Component, inject, OnInit } from '@angular/core';
import emailjs from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonButtonComponent } from '../common-button/common-button.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CommonButtonComponent,
    FormsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  messages: {
    username: string;
    newMessage: string;
    imageLink: string;
    createdAt: string;
  }[] = [];
  username: string = '';
  newMessage: string = '';
  imageLink: string = '';

  private formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    from_name: '',
    from_email: '',
    message: '',
  });

  async send() {
    emailjs.init('YshAnHysSU2COVmMk');
    await emailjs.send('service_90kljdk', 'template_283jtfl', {
      from_name: this.form.value.from_name,
      from_email: this.form.value.from_email,
      message: this.form.value.message,
    });

    alert('Mensagem Enviada');
    this.form.reset();
  }
}
