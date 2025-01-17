import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MesasService } from '../../../core/services/mesas.service';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-mesa-dialog',
  imports: [CommonModule,SharedModule],
  templateUrl: './mesa-dialog.component.html',
  styleUrl: './mesa-dialog.component.scss'
})
export class MesaDialogComponent {
  formulario: FormGroup = new FormGroup({
    numeroMesa: new FormControl('', Validators.required),
    mozoMesa: new FormControl('', Validators.required),
  })
  constructor(private mesasService:MesasService){}
  agregarMesa(){
    const numero = this.formulario.get('numeroMesa')?.value;
    const mozo = this.formulario.get('mozoMesa')?.value;
    this.mesasService.agregarMesa({numero,estado:true, posicion:{x:0,y:0},mozo, comanda: [],id:this.randomId()})
    this.formulario.reset()
  }
  eliminarMesa(){
    const numero = this.formulario.get('numeroMesa')?.value;
    this.mesasService.eliminarMesa(numero)
    this.formulario.reset()
  }
  randomId() {
    let result = '';
    const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const caracteresLargo = caracteres.length;
    let counter = 0;
    while (counter < 4) {
      result += caracteres.charAt(Math.floor(Math.random() * caracteresLargo));
      counter += 1;
    }
    return result;
}
}
