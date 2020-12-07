import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatRecord } from '../models/chat-record.mode';
import { ChatApiService } from '../services/chat-api.service';

@Component({
  selector: 'app-world-chat',
  templateUrl: './world-chat.component.html',
  styleUrls: ['./world-chat.component.scss']
})
export class WorldChatComponent implements OnInit, OnDestroy {
  @Input() nickname;
  messageToSend: string;
  messages: ChatRecord[] = [];
  subscription: Subscription;

  constructor(private chatService: ChatApiService) { }

  ngOnInit(): void {
    this.subscription = this.chatService.receiveMessages().subscribe((message: ChatRecord) => {
      if (message) {
        this.messages = [...this.messages, message];
      }
    });
  }

  OnDestroy() {
    this.subscription.unsubscribe();
  }

  sendMessage(): void {
    if (this.messageToSend) {
      this.chatService.sendMessage({
        nickname: this.nickname,
        message: this.messageToSend,
        date: new Date()
      });

      this.messageToSend = '';
    }
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
