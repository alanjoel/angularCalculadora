import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { TipoProductoComponent } from './tipo-producto/tipo-producto.component';
import { ProductoComponent } from './producto/producto.component';
import { TipoImpuestoComponent } from './tipo-impuesto/tipo-impuesto.component';
import { OperacionComponent } from './operacion/operacion.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    TipoProductoComponent,
    ProductoComponent,
    TipoImpuestoComponent,
    OperacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
