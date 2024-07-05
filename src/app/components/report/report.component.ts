import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { obtenerImpuestos } from '../../../assets/data/dataImpuestos';
import { GastoService } from '../../services/gasto.service';
import { Gasto } from '../../models/gasto';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportComponent implements OnInit {
  impuestos = obtenerImpuestos();
  gastos: Gasto[] = [];

  constructor(private gastoService: GastoService) {}

  ngOnInit(): void {
    this.gastoService.getGastos().subscribe((gastos) => {
      this.gastos = gastos;
    });
  }
}
