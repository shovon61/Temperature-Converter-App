import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {

  transform(value:number, unit:string) {
    if (value && !isNaN(value)) {
        // let temperature;

        switch (unit) {
            case 'USD':
                var currency = (value * 110.169559);
                break;
            case 'EUR':
                var currency = (value * 118.204764);
                break;
            case 'INR':
                var currency = (value * 1.323585);
                break;
            case 'PKR':
                var currency = (value * 2.586694);
                break;
            case 'LRD':
                var currency = (value * 1.719864);
                break;
            case 'EGP':
                var currency = (value * 0.280488);
                break;
            case 'JPN':
                var currency = (value * 0.68955);
                break;
            default:
                return null; // Return undefined for unsupported units
        }

        return currency.toFixed(2);
    }
    return;
}

}
