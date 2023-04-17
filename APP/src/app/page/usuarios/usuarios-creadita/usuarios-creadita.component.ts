import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import * as moment from 'moment';
import { UsuarioService } from 'src/app/service/usuario.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-usuarios-creadita',
  templateUrl: './usuarios-creadita.component.html',
  styleUrls: ['./usuarios-creadita.component.css']
})
export class UsuariosCreaditaComponent implements OnInit {
  form: FormGroup=new FormGroup({});
  usuario: Usuario = new Usuario();
  mensaje:string="";
  maxFecha: Date = moment().add(-1, 'days').toDate();
  
constructor(private uS: UsuarioService,private router:Router){} 
  ngOnInit(): void {
    this.form= new FormGroup({
      id: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      email: new FormControl(),
      nombres_usuario: new FormControl(),
      apellidos_usuario: new FormControl(),
      fecha_nacimiento: new FormControl(),
      idalerta: new FormControl(),
      iddistrito: new FormControl(),
      idsuscripcion: new FormControl(),
    })
  }
  aceptar(): void{
    this.usuario.id=this.form.value['id'];
    this.usuario.username=this.form.value['username'];
    this.usuario.password=this.form.value['password'];
    this.usuario.email=this.form.value['email'];
    this.usuario.nombres_usuario=this.form.value['nombres_usuario'];
    this.usuario.apellidos_usuario=this.form.value['apellidos_usuario'];
    this.usuario.fecha_nacimiento=this.form.value['fecha_nacimiento'];
    this.usuario.idalerta=this.form.value['idalerta'];
    this.usuario.iddistrito=this.form.value['iddistrito'];
    this.usuario.idsuscripcion=this.form.value['idsuscripcion'];
    if (this.form.value['nombres_usuario'].length > 0) {
      this.uS.insert(this.usuario).subscribe(data =>{
        this.uS.list().subscribe(data =>{
          this.uS.setlist
        })
      })
      this.router.navigate(['usuarios']);
    } else {
      this.mensaje = "Ingrese el nombre!!!";
    }

  }

}
