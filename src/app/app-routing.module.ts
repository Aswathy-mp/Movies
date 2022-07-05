import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndividualComponent } from './individual/individual.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [{path:'login',component:LoginComponent},
                        {path:'register',component:RegisterComponent},
                        {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
                        {path:'single/:imdbID',component:IndividualComponent,canActivate:[AuthGuard]},
                        {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
                        {path:'',component:RegisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
