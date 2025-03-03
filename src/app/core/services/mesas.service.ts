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
  //Revisar esta funcion mas adelante
  agregarProductoComanda(
    id: string,
    producto: { nombre: string; precio: number },
    cantidad: number
  ) {
    const mesasActuales = this.mesasSubject.value.map((m) => {
      if (m.id === id) {
        // Crear una nueva mesa con la comanda actualizada
        const nuevaComanda = [...m.comanda, { producto, cantidad }];
        console.log('Nueva comanda:', nuevaComanda);
  
        const mesaActualizada = { ...m, comanda: nuevaComanda };
        this.bbdd.editarMesa(mesaActualizada).subscribe({
          next: () => console.log(`Mesa ${id} actualizada correctamente`),
          error: (err) => console.error(`Error al actualizar mesa ${id}:`, err),
        });

        return mesaActualizada;
      }
      return m;
    });
  
    this.mesasSubject.next(mesasActuales);
  }
  
 

  buscarMesaPorNumero(numero: number): string | undefined{
    const mesa = this.mesasSubject.value.find(m => (m.numero == numero))
    if( mesa ){
      return mesa.id
    }else{
      console.log("Mesa no encontrada");
      return undefined
    }
  }
  cambiarModoEditar(){
    this.modoEditarSubject.next(!this.modoEditarSubject.value);
  }
}
