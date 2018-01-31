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
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    const container = document.getElementById('example');
    console.log(container);

    const data = [
      ['', 'Tesla', 'Volvo', 'Toyota', 'Honda'],
      ['2017', 10, 11, 12, 13],
      ['2018', 20, 11, 14, 13],
      ['2019', 30, 15, 12, 13]
    ];

    const hot = new Handsontable(container, {
      data: data,
      rowHeaders: true,
      colHeaders: true,
      filters: true,
      dropdownMenu: true
    });


  }

}
