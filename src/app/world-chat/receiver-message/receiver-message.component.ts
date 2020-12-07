import { Component, Input, OnInit } from '@angular/core';
import { ChatRecord } from 'src/app/models/chat-record.mode';

@Component({
  selector: 'app-receiver-message',
  templateUrl: './receiver-message.component.html',
  styleUrls: ['./receiver-message.component.scss']
})
export class ReceiverMessageComponent implements OnInit {
  @Input() chatRecord: ChatRecord;

  constructor() { }

  ngOnInit(): void {
  }

}
