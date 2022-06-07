import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TodosComponent } from './pages/todos/todos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { CompletedFormatPipe } from './completed-format.pipe';
import { CompletedBadgeFormatPipe } from './pipes/completed-badge-format.pipe';
import { CompletedValueFormatPipe } from './pipes/completed-value-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosComponent,
    NavbarComponent,
    CompletedFormatPipe,
    CompletedBadgeFormatPipe,
    CompletedValueFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
