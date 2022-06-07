import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationButtonComponent } from './notification-button/notification-button.component';
import { NotificationsManagerComponent } from './notifications-manager/notifications-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationButtonComponent,
    NotificationsManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
