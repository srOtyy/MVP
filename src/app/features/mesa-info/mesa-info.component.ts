import { Component } from '@angular/core';
import { IMesa } from '../../../models/interface';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MesasService } from '../../core/services/mesas.service';
import { BuscadorComponent } from './buscador/buscador.component';
@Component({
  selector: 'app-mesa-info',
  imports: [SharedModule, CommonModule, BuscadorComponent],
  templateUrl: './mesa-info.component.html',
  styleUrl: './mesa-info.component.scss'
})
export class MesaInfoComponent {
  mesa: IMesa | undefined = undefined;
  numeroMesa: number = 0;
  pedidos = [
    {
      producto: 'Café Americano',
      cantidad: 2,
      precio: 150
    },
    {
      producto: 'Medialuna',
      cantidad: 3,
      precio: 100
    },
    {
      producto: 'Jugo de Naranja',
      cantidad: 1,
      precio: 200
    },
    {
      producto: 'Tostadas',
      cantidad: 2,
      precio: 120
    },
    {
      producto: 'Pan de Campo',
      cantidad: 2,
      precio: 220
    },
    {
      producto: 'Queso y Jamón',
      cantidad: 2,
      precio: 120
    }
  ];
  
  constructor(private route: ActivatedRoute,private router: Router, private mesasService: MesasService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.numeroMesa = +params['numero'];
      this.mesa = this.mesasService.buscarMesa(this.numeroMesa);
    });
    console.log(this.mesa);
  }
  volverAlSalon(){
    this.router.navigate(['/salon']);
  }

}
