import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroRegComponent } from './hero-reg/hero-reg.component';
import { HeroBaseComponent } from './hero-base/hero-base.component';
import { HeroLoginComponent } from './hero-login/hero-login.component';
import { httpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroRegComponent,
    HeroBaseComponent,
    HeroLoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [httpService],
  bootstrap: [AppComponent],
})
export class AppModule {}