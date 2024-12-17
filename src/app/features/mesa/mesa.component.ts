import { Component } from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-mesa',
  imports: [CdkDrag],
  templateUrl: './mesa.component.html',
  styleUrl: './mesa.component.scss',
  standalone: true
})
export class MesaComponent {

}
