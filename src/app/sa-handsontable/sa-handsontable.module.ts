import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HotTableComponent} from '../hot-table/hot-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HotTableComponent],
  exports: [HotTableComponent]
})
export class SaHandsontableModule { }
