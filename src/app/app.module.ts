import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home/home.component';
import { HoverDirective } from './shared/directives/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
