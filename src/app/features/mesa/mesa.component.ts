import { Component, Input, OnInit } from '@angular/core';
import {CdkDrag, CdkDragEnd} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MesasService } from '../../core/services/mesas.service';
import { Router } from '@angular/router';
  
@Component({
  selector: 'app-mesa',
  imports: [CdkDrag,CommonModule,SharedModule],
  templateUrl: './mesa.component.html',
  styleUrl: './mesa.component.scss',
  standalone: true
})
export class MesaComponent implements OnInit{
  @Input() numero!: number;
  @Input() estado!: boolean;
  @Input() posicion!: {x: number, y: number}

  modoEdit !:boolean;

  constructor(private mesaService:MesasService, private router: Router){}
  ngOnInit(): void {
    this.mesaService.modoEditar$.subscribe((modo) => {
      this.modoEdit = modo
    })
    console.log("mesa ee",this.numero, this.estado, this.posicion)
  }
  cambiarEstado(numero:number){
    this.mesaService.editarEstadoMesa(numero)
  }
  actualizarPosicionMesa(event: CdkDragEnd): void {
    const posicionActual = this.posicion
    const nuevaPosicion = event.source.getFreeDragPosition();
    this.posicion = {x: posicionActual.x + nuevaPosicion.x,y:posicionActual.y + nuevaPosicion.y}
    this.mesaService.actualizarPosicion(this.numero, this.posicion);
  }
  irARutaConParametros(numero: number) {
    if(!this.modoEdit){
      this.router.navigate(['/mesa', numero]);
    }
  }
}
