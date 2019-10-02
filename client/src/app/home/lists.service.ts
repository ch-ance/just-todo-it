import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ListResponse } from './list-response';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  constructor(private _httpClient: HttpClient) {}

  AUTH_SERVER = 'http://localhost:5000/api/lists';

  fetchList(id: String): Observable<ListResponse> {
    console.log(`requesting list with id: ${id}`);

    return this._httpClient.get(`${this.AUTH_SERVER}/${id}`).pipe(
      tap(async (res: ListResponse) => {
        console.log('RES: ', res);
      })
    );
  }
}
