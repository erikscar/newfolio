import { Component, inject } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { InputComponent } from "../input/input.component";
import emailjs from '@emailjs/browser'
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ButtonComponent, InputComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
  })
  export class ContactComponent {

  private formBuilder = inject(FormBuilder)
  form = this.formBuilder.group({
    from_name: '',
    from_email: '', 
    message: ''
  })

  async send() {
    emailjs.init('YshAnHysSU2COVmMk')
    await emailjs.send("service_90kljdk","template_283jtfl",{
      from_name: this.form.value.from_name,
      from_email: this.form.value.from_email,
      message: this.form.value.message,
      });

      alert("CERTO")
      this.form.reset()
  }
  
}
