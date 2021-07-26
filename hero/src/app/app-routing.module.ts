import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroRegComponent } from './hero-reg/hero-reg.component';
import { HeroBaseComponent } from './hero-base/hero-base.component';
import { HeroLoginComponent } from './hero-login/hero-login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: HeroLoginComponent },
  { path: 'base', component: HeroBaseComponent },
  { path: 'reg', component: HeroRegComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: '/base', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
