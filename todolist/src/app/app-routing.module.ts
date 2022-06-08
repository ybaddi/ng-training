import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TodosComponent } from './pages/todos/todos.component';

const routes: Routes = [
{path:"", component:LoginComponent},
{path:"auth/login", component:LoginComponent},
{path:"todos", component:TodosComponent, canActivate: [AuthGuard]},
{path:"home", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
