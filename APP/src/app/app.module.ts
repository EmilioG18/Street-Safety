import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosComponent } from './page/usuarios/usuarios.component';
import { UsuariosListarComponent } from './page/usuarios/usuarios-listar/usuarios-listar.component';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms'
import{MatInputModule} from '@angular/material/input'
import{MatSelectModule} from '@angular/material/select'
import{MatDatepickerModule} from '@angular/material/datepicker'
import { MatButtonModule } from '@angular/material/button';
import { UsuariosCreaditaComponent } from './page/usuarios/usuarios-creadita/usuarios-creadita.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
   UsuariosListarComponent,
   UsuariosCreaditaComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
