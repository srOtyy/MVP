import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMesa } from '../../../models/interface';
import { BbddService } from './bbdd.service';
@Injectable({
  providedIn: 'root'
})
export class MesasService {
  constructor( private bbdd:BbddService) { }
  private modoEditarSubject = new BehaviorSubject<boolean>(false);
  modoEditar$ = this.modoEditarSubject.asObservable();
  
  private mesasSubject = new BehaviorSubject<IMesa[]>([])
  mesas$ = this.mesasSubject.asObservable()
  
  inicializarServicio(){
    this.bbdd.getMesas().subscribe( mesas => this.mesasSubject.next(mesas))
  }
  actualizarMesas(){
    this.inicializarServicio()
  }

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
