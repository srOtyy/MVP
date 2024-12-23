import { Component, Input } from '@angular/core';
import {CdkDrag, CdkDragEnd} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { SalonService } from '../../core/services/salon.service';
import { SharedModule } from '../../shared/shared.module';
@Component({
  selector: 'app-mesa',
  imports: [CdkDrag,CommonModule,SharedModule],
  templateUrl: './mesa.component.html',
  styleUrl: './mesa.component.scss',
  standalone: true
})
export class MesaComponent {
  @Input() numero!: number;
  @Input() estado!: boolean;
  @Input() posicion!: {x: number, y: number}
  constructor(private salonService:SalonService){}
  cambiarEstado(numero:number){
    this.salonService.editarEstadoMesa(numero)
  }
  actualizarPosicionMesa(event: CdkDragEnd): void {
    const posicionActual = this.posicion
    const nuevaPosicion = event.source.getFreeDragPosition();
    this.posicion = {x: posicionActual.x + nuevaPosicion.x,y:posicionActual.y + nuevaPosicion.y}
    this.salonService.actualizarPosicion(this.numero, this.posicion);
  }
}
