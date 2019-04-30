import { Component,  OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  childCode: string;
  sponsor: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, childCode: 'BDC-193-01', name: 'Hydrogen', sponsor: 'SDC-193-01', symbol: 'H'},
  {position: 1, childCode: 'BDC-193-02', name: 'Hydrogen', sponsor: 'Not Sponsor', symbol: 'H'},
  {position: 2, childCode: 'BDC-193-03', name: 'Helium', sponsor: 'SDC-193-01', symbol: 'He'},
  {position: 3, childCode: 'BDC-193-04', name: 'Lithium', sponsor:'SDC-193-01', symbol: 'Li'},
  {position: 4, childCode: 'BDC-193-05', name: 'Beryllium', sponsor: 'Not Sponsor', symbol: 'Be'},
  {position: 5, childCode: 'BDC-193-06', name: 'Boron', sponsor: 'SDC-193-01', symbol: 'B'},
  {position: 6, childCode: 'BDC-193-07', name: 'Carbon', sponsor: 'SDC-193-01', symbol: 'C'},
  {position: 8, childCode: 'BDC-193-09', name: 'Oxygen', sponsor: 'SDC-193-01', symbol: 'O'},
  {position: 9, childCode: 'BDC-193-010', name: 'Fluorine', sponsor: 'SDC-193-01', symbol: 'F'},
  {position: 10, childCode: 'BDC-193-11', name: 'Neon', sponsor: 'SDC-193-01', symbol: 'Ne'},
];

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.css']
})

//implements OnInit
export class ChildListComponent implements OnInit {

 displayedColumns: string[] = ['position', 'childCode', 'name', 'sponsor', 'symbol', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}