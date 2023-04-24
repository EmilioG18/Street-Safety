import { Component, OnInit } from '@angular/core';
import { Delitos } from 'src/app/model/Delitos';
import { MatTableDataSource } from '@angular/material/table';
import { DelitosService } from 'src/app/service/delitos.service';

@Component({
  selector: 'app-delitos-listar',
  templateUrl: './delitos-listar.component.html',
  styleUrls: ['./delitos-listar.component.css']
})
export class DelitosListarComponent implements OnInit{
  lista:Delitos[]=[];
  dataSource:MatTableDataSource<Delitos>= new MatTableDataSource();
  displayColumns:string[]=['idDelito', 'Hora', 'Fecha', 'Distrito', 'Distrito_idZona', 'IdTipoDelitos','accion1']
  constructor(private dS:DelitosService){}
  ngOnInit(): void {
      this.dS.list().subscribe((data)=>{
        this.dataSource=new MatTableDataSource(data);
      });

      this.dS.getlist().subscribe((data)=>{
        this.dataSource=new MatTableDataSource(data);
      })
  }

}
