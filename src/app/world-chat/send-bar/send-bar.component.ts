import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ChatRecord } from 'src/app/models/chat-record.mode';
import { ChatApiService } from 'src/app/services/chat-api.service';

@Component({
  selector: 'app-send-bar',
  templateUrl: './send-bar.component.html',
  styleUrls: ['./send-bar.component.scss']
})
export class SendBarComponent implements OnInit {
  @Input() nickname;
  messageToSend: string;
  messageToReply$: Observable<ChatRecord>;
  messageToReply: string;

  constructor(public chatService: ChatApiService) { }

  ngOnInit(): void {
    this.messageToReply$ = this.chatService.receiveMessageToReply().pipe(
      tap((chatRecord: ChatRecord) => this.messageToReply = chatRecord ? chatRecord.message : '')
    );
  }

  sendMessage(): void {
    if (this.messageToSend.trim()) {
      this.chatService.sendMessage({
        nickname: this.nickname,
        message: this.messageToSend,
        date: new Date(),
        replyMessage: this.messageToReply
      });

      this.removeReplyMessage();
      this.messageToSend = '';
    }
  }

  removeReplyMessage() {
    this.chatService.clearMessageToReply();
  }
}
