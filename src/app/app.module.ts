import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MakeimpactComponent } from './makeimpact/makeimpact.component';
import { FooterComponent } from './footer/footer.component';
import { Section1Component } from './section1/section1.component';
import { Section3Component } from './section3/section3.component';
import { Newsection2Component } from './newsection2/newsection2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    MakeimpactComponent,
    FooterComponent,
    Section1Component,
    Section3Component,
    Newsection2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
