import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from '../../shared/shared.module';
import { SalonComponent } from '../salon/salon.component';
import { DrawerService } from '../../core/services/drawer.service';
import { MatDialog } from '@angular/material/dialog';
import { MesaDialogComponent } from '../dialogs/mesa-dialog/mesa-dialog.component';
import { DialogBaseComponent } from '../dialogs/dialog-base/dialog-base.component';
@Component({
  selector: 'app-sidenav',
  imports: [CommonModule,MatSidenavModule,SharedModule,SalonComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit{

  readonly dialog = inject(MatDialog);
  abrirDrawer = false;
  constructor(private drawerService: DrawerService) { }
  ngOnInit(): void {
    this.drawerService.abrirDrawer$.subscribe((abrir) => {
      this.abrirDrawer = abrir;
    });
  }

  abrirDialog() {
    this.dialog.open(DialogBaseComponent, {
      data: {
        componente: MesaDialogComponent,
      },
      width: '400px'
    });
  }

}
