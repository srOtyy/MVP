import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MesasService } from '../../../core/services/mesas.service';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { BbddService } from '../../../core/services/bbdd.service';

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
  constructor(private mesasService:MesasService, private bbdd:BbddService){}

  agregarMesa(){
    const numero = this.formulario.get('numeroMesa')?.value;
    const mozo = this.formulario.get('mozoMesa')?.value;
    this.bbdd.crearMesa(numero , estado:true , posicion:{x:0,y:0},mozo, comanda: []).subscribe() 
    this.mesasService.agregarMesa({numero,estado:true, posicion:{x:0,y:0},mozo, comanda: []})
    this.formulario.reset()
  }
  eliminarMesa(){
    const numero = this.formulario.get('numeroMesa')?.value;
    const idMesa = this.mesasService.buscarMesaPorNumero(numero)
    if(idMesa){
      this.bbdd.eliminarMesa(idMesa).subscribe()
      this.mesasService.eliminarMesa(numero)
    }
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
