import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './page/usuarios/usuarios.component';
import { UsuariosCreaditaComponent } from './page/usuarios/usuarios-creadita/usuarios-creadita.component';
import { ToolbarComponent } from './page/toolbar/toolbar.component';

const routes: Routes = [
 {path: 'menu', component: ToolbarComponent,children:[]},
  {
    path:'usuarios', component:UsuariosComponent,children:[
      {path:'nuevo', component:UsuariosCreaditaComponent},
      {path:'editar/:id', component:UsuariosCreaditaComponent}
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
