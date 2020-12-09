export interface ChatRecord {
  nickname: string;
  message: string;
  date: Date;
  replyMessage?: string;
}