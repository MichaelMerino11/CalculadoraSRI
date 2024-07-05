import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { InformationComponent } from './components/information/information.component';
import { ReportComponent } from './components/report/report.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ImpuestoComponent } from './components/impuesto/impuesto.component';
import { HttpClientModule } from '@angular/common/http';
import { GastoService } from './services/gasto.service';
import { EmpleadoComponent } from './components/empleado/empleado.component';

@NgModule({
  declarations: [AppComponent, EmpleadoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuComponent,
    InformationComponent,
    ReportComponent,
    FormularioComponent,
    ImpuestoComponent,
    HttpClientModule,
  ],
  providers: [provideClientHydration(), GastoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
