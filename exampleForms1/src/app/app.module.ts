import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormulairePersonneComponent } from './formulaire-personne/formulaire-personne.component';
import { FormulaireLoginComponent } from './formulaire-login/formulaire-login.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    FormulairePersonneComponent,
    FormulaireLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
