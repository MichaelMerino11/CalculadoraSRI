import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InformationComponent } from './components/information/information.component';
import { ReportComponent } from './components/report/report.component';
import { FormularioComponent} from './components/formulario/formulario.component';
import {ImpuestoComponent } from './components/impuesto/impuesto.component';
const rutas: Routes = [
  { path: '', component: InformationComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'reporte', component: ReportComponent },
  { path: 'impuesto', component: ImpuestoComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
