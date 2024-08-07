import { Impuesto } from '../../app/models/impuesto';

let impuestos: Impuesto[] = [
    // Ejemplos de datos iniciales
    { id: 1, cedula: '171345672001', ingresoAnual: 50000, totalGastos: 5000, impuestoCalculado: 4500 },
    { id: 2, cedula: '171345672002', ingresoAnual: 60000, totalGastos: 6000, impuestoCalculado: 5400 },
    { id: 3, cedula: '171345672003', ingresoAnual: 70000, totalGastos: 7000, impuestoCalculado: 6300 },
    { id: 4, cedula: '1751056175', ingresoAnual: 80000, totalGastos: 15000, impuestoCalculado: 10110.9 }
];
export function obtenerImpuestos(): Impuesto[] {
    return impuestos;
}

export function agregarImpuesto(nuevoGasto: Impuesto): void {
    impuestos.push(nuevoGasto);
}
