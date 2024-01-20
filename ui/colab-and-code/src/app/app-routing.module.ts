import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './service/guard/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('../app/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('../app/registration/registration.module').then(m => m.RegistrationModule) },
  { path: 'login', loadChildren: () => import('../app/login/login.module').then(m => m.LoginModule) },


  { path: 'coderoom', loadChildren: () => import('../app/coderoom/coderoom.module').then(m => m.CoderoomModule), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
