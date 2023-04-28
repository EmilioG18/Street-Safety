import { Component,OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-usuarios-elimiar',
  templateUrl: './usuarios-elimiar.component.html',
  styleUrls: ['./usuarios-elimiar.component.css']
})
export class UsuariosElimiarComponent implements OnInit{
constructor(private uS:UsuarioService,private dialogRef:MatDialogRef<UsuariosElimiarComponent>){}
  ngOnInit(): void {}
  confirmar(estado:boolean){
    this.uS.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
