import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './../services/config.service';
import { retry, catchError, map } from 'rxjs/operators';
import { ClientViewModel } from './client.model';
import { Observable } from 'rxjs';

@Injectable()
export class ClientService {
  constructor(private http: HttpClient, private config: ConfigService) { }

  getClients(): Observable<ClientViewModel[]> {
    return this.http.get<ClientViewModel[]>(this.config.resourceApiURI + '/clients')
                    .pipe(
                      // tslint:disable-next-line: no-shadowed-variable
                       map(data => data.map(data => new ClientViewModel().deserialize(data))),
                      catchError(this.config.handleError) // then handle the error
                    );
  }


}
