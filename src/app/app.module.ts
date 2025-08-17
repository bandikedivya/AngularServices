import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { CarService } from './CarService';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentCComponent } from './component-c/component-c.component';
import { HydCarService } from './HydCarService';


@NgModule({
  declarations: [
    AppComponent,
    ComponentAComponent,
    ComponentBComponent,
    ComponentCComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CarService, HydCarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
