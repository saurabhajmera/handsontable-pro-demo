import {AfterViewInit, Component, OnInit} from '@angular/core';


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
    this.data = [
      ['', 'X','S','3', 'Volvo', 'Toyota', 'Honda'],
      ['2017',10, 11, 12, 10, 11, 12, 13],
      ['2018',10, 11, 12, 20, 11, 14, 13],
      ['2019',10, 11, 12, 30, 15, 12, 13]
    ];

    this.headers = ['', 'Tesla', 'Volvo', 'Toyota', 'Honda'];

    this.options = {
      rowHeaders: true,
      stretchH: 'all',
      columnSorting: true,
      contextMenu: true,
      filters: true,
      dropdownMenu: true,
      nestedHeaders: [
        ['', {label: 'Tesla', colspan: 3}, 'Volvo', 'Toyota', 'Honda']
      ]
    };
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

}
