import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';
import { DelitosService } from 'src/app/service/delitos.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Delitos } from 'src/app/model/Delitos';

@Component({
  selector: 'app-delitos-creadita',
  templateUrl: './delitos-creadita.component.html',
  styleUrls: ['./delitos-creadita.component.css']
})
export class DelitosCreaditaComponent implements OnInit {
  form: FormGroup=new FormGroup({});
  delitos: Delitos=new Delitos();
  mensaje: string="";

  constructor(private dS: DelitosService, private router:Router){}
  ngOnInit(): void {
      this.form= new FormGroup({
        idDelito: new FormControl(),
        Hora: new FormControl(),
        Fecha: new FormControl(),
        Distrito: new FormControl(),
        Distrito_idZona: new FormControl(),
        IdTipoDelitos: new FormControl(),
      })
  }
  aceptar(): void{
    this.delitos.idDelito=this.form.value['idDelito'];
    this.delitos.Hora=this.form.value['Hora'];
    this.delitos.Fecha=this.form.value['Fecha'];
    this.delitos.Distrito=this.form.value['Distrito'];
    this.delitos.Distrito_idZona=this.form.value['Distrito_idZona'];
    this.delitos.IdTipoDelitos=this.form.value['IdTipoDelitos'];
    if (this.form.value['Hora'].lenght > 0){
      this.dS.insert(this.delitos).subscribe(data =>{
        this.dS.list().subscribe(data =>{
         this.dS.setlist
        })
      })
      this.router.navigate(['delitos']);
    }else{
      this.mensaje = "Ingrese la hora !!";
    }

  }

}
