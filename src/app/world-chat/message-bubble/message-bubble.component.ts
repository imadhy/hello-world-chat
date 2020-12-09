import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ChatApiService } from 'src/app/services/chat-api.service';
import { ChatRecord } from '../../models/chat-record.mode';

@Component({
  selector: 'app-message-bubble',
  templateUrl: './message-bubble.component.html',
  styleUrls: ['./message-bubble.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageBubbleComponent implements OnInit {
  @Input() chatRecord: ChatRecord;
  @Input() nickname: string;

  get isSender() {
    return this.chatService.isSender(this.chatRecord, this.nickname);
  }

  constructor(private chatService: ChatApiService) { }

  ngOnInit(): void { }

  replyToMessage() {
    if (!this.isSender) {
      this.chatService.setMessageToReply(this.chatRecord);
    }
  }
}
