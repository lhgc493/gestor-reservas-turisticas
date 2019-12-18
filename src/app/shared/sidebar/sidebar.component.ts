import { Component, OnInit } from '@angular/core';

import { SidebarService, UsuarioService } from '../../services/index.service';
import { UsuarioModel } from '../../models/usuario.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(
    public sidebar: SidebarService,
    public usuarioService: UsuarioService
  ) { }
  
  usuario: UsuarioModel;

  ngOnInit() {
    this.usuario = this.usuarioService.usuario;
  }

}
