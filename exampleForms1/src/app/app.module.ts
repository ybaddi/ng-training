import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

import { FormsModule } from '@angular/forms';
import { FormulairePersonneComponent } from './formulaire-personne/formulaire-personne.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    FormulairePersonneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
