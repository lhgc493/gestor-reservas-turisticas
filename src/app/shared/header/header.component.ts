import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/index.service';
import { UsuarioModel } from '../../models/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor( public usuarioService: UsuarioService ) { }

  usuario: UsuarioModel;

  ngOnInit() {
    this.usuario = this.usuarioService.usuario;
  }

}
