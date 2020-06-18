import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as Handsontable from 'handsontable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  public data: any[];
  public options: any;
  public headers: any[];

  constructor() {
    this.data = Handsontable.helper['createSpreadsheetData'](100, 1000);

    // this.headers = ['', 'Tesla', 'Volvo', 'Toyota', 'Honda'];

    this.options = {
      colWidths: 100,
      width: '100%',
      height: 320,
      rowHeights: 23,
      rowHeaders: true,
      colHeaders: true,
      currentRowClassName: 'currentRow',
      currentColClassName: 'currentCol',
      fixedColumnsLeft: 3,
      fixedRowsTop: 2,
    };
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

}
