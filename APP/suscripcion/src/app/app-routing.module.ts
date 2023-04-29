import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuscripcionComponent } from './page/suscripcion/suscripcion.component';
import { SuscripcionCreaeditaComponent } from './page/suscripcion/suscripcion-creaedita/suscripcion-creaedita.component';

const routes: Routes = [
  {
    path: 'suscripciones',
    component: SuscripcionComponent,
    children: [
   //   { path: 'suscripcioneditar', component: SuscripcionCreaeditaComponent },
      {path:'nuevo',component:SuscripcionCreaeditaComponent},
      { path: 'edicion/:id', component: SuscripcionCreaeditaComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
