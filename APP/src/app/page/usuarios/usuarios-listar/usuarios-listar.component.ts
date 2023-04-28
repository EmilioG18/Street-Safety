import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from 'src/app/service/usuario.service';

import { MatDialog } from '@angular/material/dialog'
import { UsuariosElimiarComponent } from './usuarios-elimiar/usuarios-elimiar.component';
@Component({
  selector: 'app-usuarios-listar',
  templateUrl: './usuarios-listar.component.html',
  styleUrls: ['./usuarios-listar.component.css']
})
export class UsuariosListarComponent implements OnInit{
  lista:Usuario[]=[];
  dataSource:MatTableDataSource<Usuario>= new MatTableDataSource();
  displayColumns:string[]=['id','username','password','email','nombres_usuario','apellidos_usuario','fecha_nacimiento','idalerta','iddistrito','idsuscripcion','accion1']
  private idMayor: number = 0;
  constructor(private uS:UsuarioService, private dialog: MatDialog){}
  ngOnInit(): void {
    this.uS.list().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    });

    this.uS.getlist().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
    
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(UsuariosElimiarComponent);
  }
  eliminar(id: number) {
    this.uS.eliminar(id).subscribe(() => {
      this.uS.list().subscribe(data => {
        this.uS.setlist(data);/* se ejecuta la línea 27 */
      });
    });
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
  }


