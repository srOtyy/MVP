import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { MesasService } from '../../../core/services/mesas.service';
import { IProducto } from '../../../../models/interface';
import { BbddService } from '../../../core/services/bbdd.service';
@Component({
  selector: 'app-buscador',
  imports: [CommonModule,FormsModule,SharedModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.scss'
})
export class BuscadorComponent implements OnInit{
  @Input() idMesa: string | undefined;
  productos: IProducto[] = [];
  productosFiltrados: IProducto[] = [...this.productos];
  terminoBusqueda: string = '';

  constructor(
    private mesasService: MesasService,
    private bbdd: BbddService
  ){}
  
  filtrarProductos(): void {
    const termino = this.terminoBusqueda.toLowerCase();
    this.productosFiltrados = this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(termino) // Filtra los productos que contienen el término
    );
  }
  ngOnInit(): void {
    this.bbdd.getProductos().subscribe(productos => {
      this.productos = productos;
      this.productosFiltrados = productos; 
    });
  }
  agregarProducto( producto:IProducto){
    if(this.idMesa){
      this.mesasService.agregarProductoComanda(this.idMesa, producto, 1);
    }
  }
}
