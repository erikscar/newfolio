import { Component, inject, OnInit } from '@angular/core';
import emailjs from '@emailjs/browser'
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonButtonComponent } from "../common-button/common-button.component";
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CommonButtonComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
  })

  export class ContactComponent implements OnInit {
    messages: { username: string, newMessage: string, imageLink: string, createdAt: string}[]= []
    username: string = '';
    newMessage: string = '';
    imageLink: string = '';

    constructor(private socketService: SocketService) {}

    ngOnInit(): void {
      this.socketService.on('chatMessage').subscribe((data) => {

        const createdAt = new Date(data.createdAt);
        createdAt.setHours(createdAt.getHours() - 3)

        const milliseconds = new Date().getTime() - createdAt.getTime()
        const minutes = milliseconds / (1000 * 60)
        const hours = minutes / 60;

        if(hours < 1) {
            data.createdAt =  `${Math.floor(minutes)}min` 
        } 
        else {
          data.createdAt = `${Math.floor(hours)}h ${Math.floor(minutes)}min`
        } 
        this.messages.push(data)
      })

    }

    sendMessage(): void {
        this.socketService.emit('chatMessage', {
          username: this.username,
          newMessage: this.newMessage,
          imageLink: this.imageLink,
        });
        this.username = '';
        this.newMessage = '';
        this.imageLink = '';
    }
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

      alert("Mensagem Enviada")
      this.form.reset()
  }

  isImage(url: string): boolean {
    const image = new Image()
    image.src = url
    return image.complete && image.height > 0
  }
}
