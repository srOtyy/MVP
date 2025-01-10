import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMesa } from '../../../models/interface';
@Injectable({
  providedIn: 'root'
})
export class BbddService {
  
  private apiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  //mesas
  getMesas(): Observable<IMesa[]> {
    return this.http.get<IMesa[]>(`${this.apiUrl}/mesas`);
  }
  postMesa(mesa: IMesa): Observable<IMesa> {
    return this.http.post<any>(`${this.apiUrl}/mesas`,{mesa})
  }
  editarMesa(mesa: IMesa): Observable<IMesa> {
    return this.http.put<IMesa>(`${this.apiUrl}/mesas/${mesa.id}`, mesa);
  }
}
