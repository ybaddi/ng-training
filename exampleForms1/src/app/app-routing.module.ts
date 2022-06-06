import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulairePersonneComponent } from './formulaire-personne/formulaire-personne.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

const routes: Routes = [
  {path:"form1", component: FormulaireComponent},
  {path:"form2", component: FormulairePersonneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
