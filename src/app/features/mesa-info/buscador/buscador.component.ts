import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { MesasService } from '../../../core/services/mesas.service';
import { IProducto } from '../../../../models/interface';
@Component({
  selector: 'app-buscador',
  imports: [CommonModule,FormsModule,SharedModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.scss'
})
export class BuscadorComponent implements OnInit{
  @Input() mesaNumero: number | undefined;
  productos: IProducto[] = [
    {nombre: 'Cafe', precio: 120},
    {nombre: 'Medialuna', precio: 90},
    {nombre: 'Exprimido', precio: 180},
    {nombre: 'Tostadas', precio: 140},
    {nombre: 'Cafe con leche', precio: 170},
    {nombre: 'Cafe', precio: 120},
    {nombre: 'Medialuna', precio: 90},
    {nombre: 'Exprimido', precio: 180},
    {nombre: 'Tostadas', precio: 140},
    {nombre: 'Cafe con leche', precio: 170},
    {nombre: 'Cafe', precio: 120},
    {nombre: 'Medialuna', precio: 90},
    {nombre: 'Exprimido', precio: 180},
    {nombre: 'Tostadas', precio: 140},
    {nombre: 'Cafe con leche', precio: 170}
  ];
  productosFiltrados: IProducto[] = [...this.productos];
  terminoBusqueda: string = '';

  constructor(private mesasService: MesasService){}
  filtrarProductos(): void {
    const termino = this.terminoBusqueda.toLowerCase(); // Ignora mayúsculas/minúsculas
    this.productosFiltrados = this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(termino) // Filtra los productos que contienen el término
    );
  }
  ngOnInit(): void {
    if(this.mesaNumero){
      console.log("mesa encontrada:", this.mesaNumero);
    }else{
      console.log("No se encontro la mesa");
    }
  }
  agregarProducto( producto:IProducto){
    if(this.mesaNumero){
      this.mesasService.agregarProductoComanda(this.mesaNumero, producto, 1);
    }
  }
}
