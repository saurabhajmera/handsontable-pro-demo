import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SaHandsontableModule} from './sa-handsontable/sa-handsontable.module';
import { HotTableComponent } from './hot-table/hot-table.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SaHandsontableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
