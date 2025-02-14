import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMesa, IProducto } from '../../../models/interface';
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
  crearMesa(numero: number, estado:boolean, posicion:{x:number,y:number} ,mozo:string, comanda: IProducto[]): Observable<IMesa> {
    return this.http.post<any>(`${this.apiUrl}/mesas`, {numero, estado: true , posicion:{x:0,y:0},mozo, comanda: []})
  }
  editarMesa(mesa: IMesa): Observable<IMesa> {
    return this.http.put<IMesa>(`${this.apiUrl}/mesas/${mesa.id}`, mesa);
  }
  eliminarMesa(id: string): Observable<IMesa> {
    return this.http.delete<IMesa>(`${this.apiUrl}/mesas/${id}`);
  }
  //productos
  getProductos(): Observable<IProducto[]>{
    return this.http.get<IProducto[]>(`${this.apiUrl}/productos`);
  }
}
