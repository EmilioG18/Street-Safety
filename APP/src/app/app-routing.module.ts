import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './page/usuarios/usuarios.component';
import { UsuariosCreaditaComponent } from './page/usuarios/usuarios-creadita/usuarios-creadita.component';
import { DelitosComponent } from './page/delitos/delitos.component';
import { DelitosCreaditaComponent } from './page/delitos/delitos-creadita/delitos-creadita.component';

const routes: Routes = [{
    path:'usuarios', component:UsuariosComponent,children:[
      {path:'nuevo', component:UsuariosCreaditaComponent}
    ]},
    {
    path: 'delitos', component: DelitosComponent,children:[
      {path:'nuevo', component:DelitosCreaditaComponent}
    ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
