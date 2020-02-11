import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ClientService } from './../client.service';
import { ClientModel } from '../client.model';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class ClientIndexComponent implements OnInit {

  displayedColumns: string[] = ['clientId', 'clientName', 'clientUri', 'enabled', 'action'];
  dataSource = new MatTableDataSource<ClientModel>(ELEMENT_DATA);
  clients: ClientModel[];

  constructor(private clientService: ClientService) {}

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.clientService.getClients().subscribe(clients => this.clients = clients);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

const ELEMENT_DATA: ClientModel[] = [
  {clientId: 'test1', clientName: 'Hydrogen', clientUri: '1.0079', enabled: true },
  {clientId: 'test1', clientName: 'Helium', clientUri: '4.0026', enabled: true},
  {clientId: 'test1', clientName: 'Lithium', clientUri: '6.941', enabled: true},
  {clientId: 'test1', clientName: 'Beryllium', clientUri: '9.0122', enabled: true},
  {clientId: 'test1', clientName: 'Boron', clientUri: '10.811', enabled: true},
  {clientId: 'test1', clientName: 'Carbon', clientUri: '2.0107', enabled: true},
  {clientId: 'test1', clientName: 'Nitrogen', clientUri: '14.0067', enabled: true},
  {clientId: 'sdsd', clientName: 'Oxygen', clientUri: '15.9994', enabled: true},
  {clientId: 'sdsd', clientName: 'Fluorine', clientUri: '18.9984', enabled: true},
  {clientId: 'sdsd', clientName: 'Neon', clientUri: '20.1797', enabled: true},
  {clientId: 'sdsd', clientName: 'Sodium', clientUri: '22.9897', enabled: true},
  {clientId: 'sdsd', clientName: 'Magnesium', clientUri: '24.305', enabled: true},
  {clientId: 'sdsd', clientName: 'Aluminum', clientUri: '26.9815', enabled: true},
  {clientId: 'sdsd', clientName: 'Silicon', clientUri: '8.0855', enabled: false},
  {clientId: 'sdsd', clientName: 'Phosphorus', clientUri: '30.9738', enabled: false},
  {clientId: 'sdsd', clientName: 'Sulfur', clientUri: '32.065', enabled: false},
  {clientId: 'sdsd', clientName: 'Chlorine', clientUri: '35.453', enabled: false},
  {clientId: 'sdsd', clientName: 'Argon', clientUri: '9.948', enabled: false},
  {clientId: 'sdsd', clientName: 'Potassium', clientUri: '39.0983', enabled: false},
  {clientId: 'sdsd', clientName: 'Calcium', clientUri: '40.078', enabled: false},
];
