import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  private abrirDrawer = new BehaviorSubject<boolean>(false);
  abrirDrawer$ = this.abrirDrawer.asObservable();
  constructor() { }

  abrir() {
    this.abrirDrawer.next(true);
  }
  
  cerrar() {
    this.abrirDrawer.next(false);
  }

  cambiar() {
    this.abrirDrawer.next(!this.abrirDrawer.value);
  }
}
