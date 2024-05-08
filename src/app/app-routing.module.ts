import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { 
    path : '' , component:HomeComponent
  },
  {
    path :'sign-up', component : SignUpComponent
  },
  {
    path :'log-in' ,component : LogInComponent
  },
  {
    path :'home', component : HomeComponent
  },
  {
    path :'**' ,component : NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
