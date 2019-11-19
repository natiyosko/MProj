import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PanelComponent } from './app/panel/panel.component';
import { FooterComponent } from './app/footer/footer.component';
import { MidelComponent } from './app/midel/midel.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    FooterComponent,
    MidelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
