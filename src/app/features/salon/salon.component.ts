import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MesaComponent } from '../mesa/mesa.component';
import { IMesa } from '../../../models/interface';
import { CommonModule } from '@angular/common';
import { MesasService } from '../../core/services/mesas.service';



@Component({
  selector: 'app-salon',
  imports: [SharedModule,CommonModule,MesaComponent],
  templateUrl: './salon.component.html',
  styleUrl: './salon.component.scss'
})
export class SalonComponent implements OnInit{
  mesas: IMesa[] = []
  

  constructor(private mesasService: MesasService){}
  ngOnInit(): void {
    this.mesasService.mesas$.subscribe( mesas => {
      this.mesas = mesas
    })
    this.mesasService.inicializarServicio()

  }
  
 
}
