import { Injectable } from '@angular/core';
import Pusher from 'pusher-js';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private pusher: Pusher;
  private channel: any;

  constructor() {
    this.pusher = new Pusher('942f87836f7b0a8948b2', {
      cluster: 'sa1',
    })

    this.channel = this.pusher.subscribe('chat-channel');
   }

   on(event: string) {
    return new Observable((observer) => {
      this.channel.bind(event, (data: any) => {
        observer.next(data);
      });
    });
  }
}
