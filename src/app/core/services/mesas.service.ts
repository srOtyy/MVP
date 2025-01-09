import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMesa } from '../../../models/interface';
@Injectable({
  providedIn: 'root'
})
export class MesasService {
  private modoEditarSubject = new BehaviorSubject<boolean>(false);
  modoEditar$ = this.modoEditarSubject.asObservable();
  
  private mesasSubject = new BehaviorSubject<IMesa[]>([
    {numero: 1, estado: false, comanda: [], posicion: {x: 0, y: 0}, mozo: "Oty"},
    ])
  mesas$ = this.mesasSubject.asObservable()
  
  //CRUD MESAS
  
  agregarMesa(mesa: IMesa){
    const mesasActuales = this.mesasSubject.value
    this.mesasSubject.next([...mesasActuales, mesa])
    console.log(this.mesasSubject.value, "mesa agregada");
  }
  eliminarMesa(numero: number){
    const mesasActuales = this.mesasSubject.value.filter( m => m.numero !== numero)
    this.mesasSubject.next(mesasActuales)
  }
  editarEstadoMesa(numero: number){
    const mesasActuales = this.mesasSubject.value.map(m => m.numero === numero ? {...m,estado: !m.estado} : m)
    this.mesasSubject.next(mesasActuales)
  }


  actualizarPosicion(numero: number, posicion:{x:number,y:number}){
    const mesasActuales = this.mesasSubject.value.map(m => m.numero === numero ? {...m,posicion: posicion} : m)
    this.mesasSubject.next(mesasActuales)
    
  }

  agregarProductoComanda(numeroMesa: number, producto: {nombre: string, precio: number}, cantidad: number){
    const mesasActuales = this.mesasSubject.value.map(m => m.numero == numeroMesa ? {...m, comanda: [...m.comanda,{producto, cantidad}]} : m)
    this.mesasSubject.next(mesasActuales)
    console.log(this.buscarMesa(numeroMesa))
  }
  // Estas de aca no se donde las uso pero las dejo
  buscarMesa(numero: number): IMesa | undefined{
    return this.mesasSubject.value.find(m => (m.numero == numero))
  }
  cambiarModoEditar(){
    this.modoEditarSubject.next(!this.modoEditarSubject.value);
  }
}
