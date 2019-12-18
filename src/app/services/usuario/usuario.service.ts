import { Injectable } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { URL_SERVICIOS } from '../../config/config';
import swal from 'sweetalert';
import { SubirarchivoService } from '../subirArchivo/subirarchivo.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: UsuarioModel;
  token: string;

  constructor(public http: HttpClient, public router: Router, public subirArchivoServ: SubirarchivoService) {
    this.cargarStorage();
  }

  estaLogeado() {
    return(this.token.length > 5) ? true : false;
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario')) ;
    } else {
      this.token = '';
      this.usuario = null;
    }
  }

  guardarStorage(id: string, token: string, usuario: UsuarioModel) {

    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.usuario = usuario;
    this.token = token;
  }

  logout() {
    this.usuario = null;
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['./login']);
  }


  loginGoogle(token: string) {
    const url = URL_SERVICIOS + '/login/google';
    return this.http.post(url, {token}).pipe(map((resp: any) => {
      this.guardarStorage(resp.id, resp.token, resp.usuario);
      return true;
    }));
  }

  login( usuario: UsuarioModel, recuerdame: boolean = false) {

    if (recuerdame) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }

    const url = URL_SERVICIOS + '/login';
    return this.http.post(url, usuario)
    .pipe(map((resp: any) => {
      // localStorage.setItem('id', resp.id);
      // localStorage.setItem('token', resp.token);
      // localStorage.setItem('usuario', JSON.stringify(resp.usuario));
      this.guardarStorage(resp.id, resp.token, resp.usuario);
      return true;
    }));
  }


 crearUsuario(usuario: UsuarioModel ) {
  const url = URL_SERVICIOS + '/usuario';
  return this.http.post(url, usuario).pipe( map((resp: any) => {
    swal('usuario', 'creado con exito', 'success');
    return resp.usuario;
  }));

 }

 actualizaUsuario(usuario: UsuarioModel) {
  let url = URL_SERVICIOS + '/usuario/' + usuario._id;
  url += '?token=' + this.token;
  console.log(usuario);

  return this.http.put(url, usuario)
  .pipe(map( (resp: any) => {
    const usuarioDB: UsuarioModel = resp.usuario;
    this.guardarStorage(usuarioDB._id, this.token, usuarioDB);
    swal('Usuario Actulaizado', usuario.nombre, 'success');
    return true;
  }));

 }

 // para subir imagen

 cambiarImagen( archivo: File, id: string) {
    this.subirArchivoServ.subirArchivo(archivo, 'usuarios', id )
    .then((resp: any) => {
      this.usuario.img = resp.usuario.img;
      swal('Imagen actualizada', this.usuario.nombre, 'success');
      this.guardarStorage(id, this.token, this.usuario);
    })
    .catch( resp => {
      console.log(resp);
    });
 }

}
