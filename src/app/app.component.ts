import {AfterViewInit, Component, OnInit} from '@angular/core';

// import {Handsontable} from 'handsontable-pro';

declare var Handsontable: any;

// const container = document.getElementById('example');
// const hot = new Handsontable(container, {
//   data: data,
//   rowHeaders: true,
//   colHeaders: true,
//   filters: true,
//   dropdownMenu: true
// });
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';
  private data: any[];
  private options: any;

  constructor() {
    this.data = [
      ['', 'Tesla', 'Volvo', 'Toyota', 'Honda'],
      ['2017', 10, 11, 12, 13],
      ['2018', 20, 11, 14, 13],
      ['2019', 30, 15, 12, 13]
    ]; // tslint:disable-line:no-string-literal
    this.options = {
      colHeaders: true,
      rowHeaders: true,
      stretchH: 'all',
      columnSorting: true,
      contextMenu: true,
      filters: true,
      dropdownMenu: true
    };
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    // const container = document.getElementById('example');
    // console.log(container);
    //
    //
    // const hot = new Handsontable(container, {
    //   data: this.data,
    //   rowHeaders: true,
    //   colHeaders: true,
    //   filters: true,
    //   dropdownMenu: true
    // });
    //

  }

}
