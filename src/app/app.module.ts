import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorldChatComponent } from './world-chat/world-chat.component';
import { ReceiverMessageComponent } from './world-chat/receiver-message/receiver-message.component';
import { SenderMessageComponent } from './world-chat/sender-message/sender-message.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WorldChatComponent,
    ReceiverMessageComponent,
    SenderMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
