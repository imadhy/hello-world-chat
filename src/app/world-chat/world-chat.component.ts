import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatRecord } from '../models/chat-record.mode';
import { ChatApiService } from '../services/chat-api.service';

@Component({
  selector: 'app-world-chat',
  templateUrl: './world-chat.component.html',
  styleUrls: ['./world-chat.component.scss']
})
export class WorldChatComponent implements OnInit {
  @Input() nickname;
  @ViewChild('chat', { static: true }) chatFrame: ElementRef;
  receiveMessages$: Observable<ChatRecord[]>;

  constructor(private chatService: ChatApiService) { }

  ngOnInit(): void {
    this.receiveMessages$ = this.chatService.receiveMessages();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.chatFrame.nativeElement.scrollTop = this.chatFrame.nativeElement.scrollHeight;
  }
}
