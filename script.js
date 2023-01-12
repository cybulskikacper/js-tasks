
const promo = '1312131%'

switch(promo) { 
    case '10%': 
    console.log('Promocja wynosi 10%');
    break
    case '20%': 
    console.log('Promocja wynosi 20%');
    break
    case '30%': 
    console.log('Promocja wynosi 30%');
    break
    default:
        console.log(`Niestety promocja wynosi dziś ${promo}`);
}