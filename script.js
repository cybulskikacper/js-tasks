const numbers = [5,8,10,23,48,60]

for(const number of numbers) { 
    console.log(number / 5);
}
console.log('-----');

for(const number of numbers) { 
    if(number %2 === 0) { 
        console.log(`%cLiczba ${number} jest parzysta`,'background-color:gold;font-size:16px');
    } else { 
        console.log(`%cLiczba ${number} nie jest parzysta`, 'background-color:tomato; font-size:16px');
    }
}