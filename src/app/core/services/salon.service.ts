import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMesa } from '../../../models/interface';
@Injectable({
  providedIn: 'root'
})
export class SalonService {
  private mesaSubject = new BehaviorSubject<IMesa[]>([])
  mesas$ = this.mesaSubject.asObservable()
  
  //CRUD MESAS
  
  agregarMesa(mesa: IMesa){
    const mesasActuales = this.mesaSubject.value
    this.mesaSubject.next([...mesasActuales, mesa])
  }
  eliminarMesa(numero: number){
    const mesasActuales = this.mesaSubject.value.filter( m => m.numero !== numero)
    this.mesaSubject.next(mesasActuales)
  }
  editarEstadoMesa(numero: number){
    const mesasActuales = this.mesaSubject.value.map(m => m.numero === numero ? {...m,estado: !m.estado} : m)
    this.mesaSubject.next(mesasActuales)
  }
  actualizarPosicion(numero: number, posicion:{x:number,y:number}){
    const mesasActuales = this.mesaSubject.value.map(m => m.numero === numero ? {...m,posicion: posicion} : m)
    this.mesaSubject.next(mesasActuales)
    
  }
}
