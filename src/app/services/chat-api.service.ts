import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ChatRecord } from '../models/chat-record.mode';

@Injectable({
  providedIn: 'root'
})
export class ChatApiService {
  private chatRecords$ = new BehaviorSubject<ChatRecord[]>([]);
  private messageToReply$ = new Subject<ChatRecord>();

  constructor() { }

  sendMessage(ChatRecord: ChatRecord): void {
    const chatRecords = [...this.chatRecords$.value, ChatRecord];
    this.chatRecords$.next(chatRecords);
  }

  receiveMessages(): Observable<ChatRecord[]> {
    return this.chatRecords$.asObservable();
  }

  setMessageToReply(chatRecord: ChatRecord): void {
    this.messageToReply$.next(chatRecord);
  }

  clearMessageToReply(): void {
    this.messageToReply$.next();
  }

  receiveMessageToReply(): Observable<ChatRecord> {
    return this.messageToReply$.asObservable();
  }

  isSender(chatRecord: ChatRecord, nickname: string) {
    return chatRecord.nickname === nickname;
  }
}
