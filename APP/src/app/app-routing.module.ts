import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './page/usuarios/usuarios.component';
import { UsuariosCreaditaComponent } from './page/usuarios/usuarios-creadita/usuarios-creadita.component';

const routes: Routes = [
  {
    path:'usuarios', component:UsuariosComponent,children:[
      {path:'nuevo', component:UsuariosCreaditaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
