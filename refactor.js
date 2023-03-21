// PS. 
// - I have left notes to the code to explain what it does, as this is a take away exercise :) 
// - I normally lint my code and remove any comments or console logs in my code prior to deployment

// ES6 const arrows function declaration as oppose to traditional var assignment
const volumeSetup = () => {
    // setup volume unit interface
    const volumeUnit = window.APP.util.getSettings('ticker_vol_unit').toUpperCase();
    // Using ES6 let assignment, so that the value can be reassigned
    let element = null;

    switch (volumeUnit) {
        case "FIRSTCCY":
            element = $('#tickervolccy_0');
            break;
        case "USD":
            element = $('#tickervolccy_USD');
            break;
        case "BTC":
            element = $('#ickervolccy_BTC');
            break;
        case "ETH":
            element = $('#tickervolccy_ETH');
            break;
    }

    // React inline conditional checking if element exists then applying true
    element && element.prop("checked", true);

    // override currencies list
    const result = window.APP.util.initCurrenciesList()

    return result
}