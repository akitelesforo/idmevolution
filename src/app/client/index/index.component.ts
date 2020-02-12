import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ClientService } from './../client.service';
import { ClientViewModel } from '../client.model';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class ClientIndexComponent implements OnInit {

  displayedColumns: string[] = ['clientId', 'clientName', 'clientUri', 'enabled', 'action'];
  dataSource: MatTableDataSource<ClientViewModel>;
  clients: ClientViewModel[];

  constructor(private clientService: ClientService) {}

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.clientService.getClients().subscribe((clientResult) => {
      console.log(clientResult);
      this.clients = clientResult;
      this.dataSource = new MatTableDataSource<ClientViewModel>(this.clients);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
