import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroRegComponent } from './hero-reg/hero-reg.component';
import { HeroBaseComponent } from './hero-base/hero-base.component';
import { HeroLoginComponent } from './hero-login/hero-login.component';

const routes: Routes = [
  { path: 'login', component: HeroLoginComponent },
  { path: 'base', component: HeroBaseComponent },
  { path: 'reg', component: HeroRegComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/base', pathMatch: 'full' },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}