import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ChatRecord } from '../models/chat-record.mode';

@Injectable({
  providedIn: 'root'
})
export class ChatApiService {
  private chatRecords$ = new Subject<ChatRecord>();

  constructor() { }

  sendMessage(ChatRecord: ChatRecord): void {
    this.chatRecords$.next(ChatRecord);
  }

  receiveMessages(): Observable<ChatRecord> {
    return this.chatRecords$.asObservable();
  }

  // getChatHistory(): ChatRecord[] {
  //   return this.chatHistory;
  // }
}
