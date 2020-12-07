import { Component, Input, OnInit } from '@angular/core';
import { ChatRecord } from 'src/app/models/chat-record.mode';

@Component({
  selector: 'app-sender-message',
  templateUrl: './sender-message.component.html',
  styleUrls: ['./sender-message.component.scss']
})
export class SenderMessageComponent implements OnInit {
  @Input() chatRecord: ChatRecord;

  constructor() { }

  ngOnInit(): void {
  }

}
