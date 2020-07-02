import axios from 'axios';

const key = "&key=AIzaSyDHP8YWK7pR63d913cqTx4bNehzHZNCJdE";

const formatAdress = (adress) => {
    const dom = "https://maps.googleapis.com/maps/api/geocode/";
    const middleChar = "+";
    const typeFlag = "json?address=";
    let splitAdress = adress.split(" ");
    let outPut = "";
    outPut = dom + typeFlag + splitAdress[0];
    for(let i = 1; i < splitAdress.length; i++){
        outPut += (middleChar + splitAdress[i]);
    }

    return outPut + key;
}

export const addressToLatitude = async (address) => {
    const URL = formatAdress(address);
    var output = await axios.get(URL).then((response) => response.data.results[0].geometry.location);
    return output;
}

