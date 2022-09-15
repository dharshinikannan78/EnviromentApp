import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  messages: any[];
  messageInput: string;
  isFocus: boolean;

  constructor() { }

  ngOnInit() {
    this.messages = [
      {
        isSender: false,
        avatar: 'assets/img/avatars/10.jpg',
        type: 'text',// text || image
        body: 'Hey I\'m John here. Happy to help!? ',
        timestamp: 'July 18, 2022 9:48 AM'
      },
      {
        isSender: true,
        type: 'text',// text || image
        body: 'I need  to know about the Nugets?',
        timestamp: 'July 18, 2022 9:50 AM'
      },
      {
        isSender: false,
        avatar: 'assets/img/avatars/10.jpg',
        type: 'text',// text || image
        body: 'You Need any help',
        timestamp: 'July 18, 2022 9:52 AM'
      },
      {
        isSender: true,
        type: 'text',// text || image
        body: 'Where are you, buddy?',
        timestamp: 'July 18, 2022 9:53 AM'
      },
      {
        isSender: false,
        avatar: 'assets/img/avatars/10.jpg',
        type: 'text',// text || image
        body: 'I\'m almost there',
        timestamp: 'July 18, 2022 9:53 AM'
      }
    ];
  }

  toggleFocus(isFocus: boolean) {
    this.isFocus = isFocus;
  }

  nl2br(text: string) {
    if (!text) return text;

    return text.replace(/\n/ig, '<br>');
  }

}
