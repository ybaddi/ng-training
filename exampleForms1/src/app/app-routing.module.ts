import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireLoginComponent } from './formulaire-login/formulaire-login.component';
import { FormulairePersonneComponent } from './formulaire-personne/formulaire-personne.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

const routes: Routes = [
  {path:"form1", component: FormulaireComponent},
  {path:"form2", component: FormulairePersonneComponent},
  {path:"form3", component: FormulaireLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
