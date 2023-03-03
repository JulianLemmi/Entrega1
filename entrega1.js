function calcularCuotas() {
    
    let monto = prompt('Ingresa el monto a dividir en cuotas:');
    monto = parseFloat(monto);
    
    if (isNaN(monto)) {

        return 'El monto ingresado no es válido';
    
    }

    const cuotas = [4, 8, 16, 32, 64, 84];
    const listaCuotas = [];
    let porcentajeInteres = 10;

    cuotas.forEach(cuota => {
        
        const valorInteres = (monto * porcentajeInteres) / 100;
        const valorCuota = (monto + valorInteres) / cuota;
        listaCuotas.push(`En ${cuota} cuotas de ${valorCuota.toFixed(2)} (incluyendo ${porcentajeInteres}% de interés)`);
        porcentajeInteres = Math.min(porcentajeInteres + 5, 50);
        
    });

    return listaCuotas;
    }

    const listaCuotas = calcularCuotas();
    console.log(listaCuotas);
