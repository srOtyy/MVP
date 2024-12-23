import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MesaComponent } from '../mesa/mesa.component';
import { IMesa } from '../../../models/interface';
import { CommonModule } from '@angular/common';
import { SalonService } from '../../core/services/salon.service';
import {FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-salon',
  imports: [SharedModule,CommonModule,MesaComponent],
  templateUrl: './salon.component.html',
  styleUrl: './salon.component.scss'
})
export class SalonComponent implements OnInit{
  mesas: IMesa[] = []
  formulario: FormGroup = new FormGroup({
    numeroMesa: new FormControl(''),//faltan los validators

  })

  constructor(private salonService: SalonService){}
  ngOnInit(): void {
    this.salonService.mesas$.subscribe( mesas => {
      this.mesas = mesas
    })
  }
  agregarMesa(){
    const numero = this.formulario.get('numeroMesa')?.value;
    this.salonService.agregarMesa({numero,estado:true, posicion:{x:0,y:0}})
    this.formulario.reset()
  }
  eliminarMesa(){
    const numero = this.formulario.get('numeroMesa')?.value;
    this.salonService.eliminarMesa(numero)
    this.formulario.reset()
  }
  cambiarEstado(numero: number){
    this.salonService.editarEstadoMesa(numero)
  }
}
