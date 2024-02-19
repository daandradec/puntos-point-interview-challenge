export interface Month {
    [k: string]: MonthInfo; // Map<object, string>
}

export interface MonthInfo {
    [k: string]: number;
    "clientes":             number;
    "ventas-totales":     number;
    "monto-total":        number;
    "cashback-acumulado": number;
    "facturado-01-11":    number;
    "facturado-10-11":    number;
    "facturado-20-11":    number;
}