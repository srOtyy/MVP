import { Component } from '@angular/core';
import { IMesa } from '../../../models/interface';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MesasService } from '../../core/services/mesas.service';
import { BuscadorComponent } from './buscador/buscador.component';
import { IComandaProducto } from '../../../models/interface';
import { BbddService } from '../../core/services/bbdd.service';
@Component({
  selector: 'app-mesa-info',
  imports: [SharedModule, CommonModule, BuscadorComponent],
  templateUrl: './mesa-info.component.html',
  styleUrl: './mesa-info.component.scss'
})
export class MesaInfoComponent {
  mesa: IMesa | undefined ;
  numeroMesa: number = 0;
  comanda: IComandaProducto[] = [
    {producto: {nombre: 'Cafe', precio: 120}, cantidad: 1},
    {producto: {nombre: 'Medialuna', precio: 90}, cantidad: 3},
    {producto: {nombre: 'Exprimido', precio: 180}, cantidad: 2},
    {producto: {nombre: 'Tostadas', precio: 140}, cantidad: 1},
    {producto: {nombre: 'Cafe con leche', precio: 170}, cantidad: 1},
  ]
  
  constructor(  
    private route: ActivatedRoute,
    private router: Router, 
    private mesasService: MesasService,
    private http: BbddService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.numeroMesa = +params['numero'];
    });
    this.mesasService.mesas$.subscribe(mesas => {
      this.mesa = mesas.find(m => m.numero == this.numeroMesa);
    })
  }
  volverAlSalon(){
    this.router.navigate(['/salon']);
  }
  botonPrueba(){
    
  }
}
