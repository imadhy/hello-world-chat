import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorldChatComponent } from './world-chat/world-chat.component';
import { FormsModule } from '@angular/forms';
import { MessageBubbleComponent } from './world-chat/message-bubble/message-bubble.component';
import { SendBarComponent } from './world-chat/send-bar/send-bar.component';
import { TruncMessagePipe } from './pipes/trunc-message.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WorldChatComponent,
    MessageBubbleComponent,
    SendBarComponent,
    TruncMessagePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
