import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-dialog-base',
  imports: [CommonModule,SharedModule],
  templateUrl: './dialog-base.component.html',
  styleUrl: './dialog-base.component.scss'
})
export class DialogBaseComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
