import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
@Component({
  selector: 'app-buscador',
  imports: [CommonModule,FormsModule,SharedModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.scss'
})
export class BuscadorComponent {
  productos: string[] = ['cafe con leche', 'cafe', 'cortado','cafe con medialunas','exprimido','medialuna','Tostadas','Tostadas con mermelada','Tostadas con manteca','Tostadas con'];
  productosFiltrados: string[] = [...this.productos];
  terminoBusqueda: string = '';

  filtrarProductos(): void {
    const termino = this.terminoBusqueda.toLowerCase(); // Ignora mayúsculas/minúsculas
    this.productosFiltrados = this.productos.filter(producto =>
      producto.toLowerCase().includes(termino) // Filtra los productos que contienen el término
    );
  }
}
