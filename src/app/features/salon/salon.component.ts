import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MesaComponent } from '../mesa/mesa.component';
@Component({
  selector: 'app-salon',
  imports: [SharedModule,MesaComponent],
  templateUrl: './salon.component.html',
  styleUrl: './salon.component.scss'
})
export class SalonComponent {

}
