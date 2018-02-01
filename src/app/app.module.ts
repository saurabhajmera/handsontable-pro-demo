import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SaHandsontableModule} from './sa-handsontable/sa-handsontable.module';
import { HotTableComponent } from './hot-table/hot-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HotTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SaHandsontableModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
