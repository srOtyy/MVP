import { Component, ViewChild } from '@angular/core';
import { MesasService } from '../../core/services/mesas.service';
import { CommonModule } from '@angular/common';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SharedModule } from '../../shared/shared.module';
import { DrawerService } from '../../core/services/drawer.service';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-panel',
  imports: [SharedModule,CommonModule,MatSlideToggleModule,MatSidenavModule,SidenavComponent],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent {
  constructor(private mesasService:MesasService, private drawerService:DrawerService){}
  
  @ViewChild(MatDrawer, { static: false }) drawer!: MatDrawer;
  
  editando: boolean = false;
  txtEditar: string = "Editar";


  

  cambiarModoEditar(){
    this.mesasService.cambiarModoEditar();
    this.editando = !this.editando;
    this.txtEditar = this.editando ? 'Editando' : 'Editar';
  }
  toggleSidebar() {
    if (this.drawer) {
      this.drawer.toggle(); // Usa el método nativo para abrir o cerrar el drawer
    }
  }
  cambiarDrawer(){  
    this.drawerService.cambiar();

  }
}


