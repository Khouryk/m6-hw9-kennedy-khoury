var btn= document.querySelector('button');
var info= document.getElementsByClassName('msg')[0];
console.log(info);



//var city= document.getElementById('city');


btn.onclick = function(e){
    //fetch('https://api.openweathermap.org/data/2.5/weather?q=gainesville&appid=716182205ced012435f707c12bb5f9f7&units=imperial')
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=716182205ced012435f707c12bb5f9f7&units=imperial')
    .then(function(res){
    return res.json()
    })
    .then(function(data){
    console.log(data)
    console.log(city.value);

    var div= document.createElement('div');
    var h3= document.createElement('h3');

    //1. Name of the Searched City with Country Code
    h3.textContent = data.name + ', '+ data.sys.country;
    div.appendChild(h3)
    info.appendChild(div);

    //2. Description of current weather
    var divP= document.createElement('divP');
    var p= document.createElement('p');

    p.textContent = data.weather[0].description;
    div.appendChild(p)
    info.appendChild(divP);

    //3. Icon image for current weather conditions

    var img= document.createElement('img')
    img.src='https://openweathermap.org/img/wn/'+ data.weather[0].icon +'@2x.png';
    div.appendChild(img);

    //var divI= document.createElement('divI');
    //var weatherIcon= document.createElement('weatherIcon');

 
    //var imgcode = data.weather[0].icon;
    //weatherIcon= 'https://openweathermap.org/img/wn/data.weather[0].icon@2x.png';
    
    //div.appendChild(weatherIcon);
    //info.appendChild(divI);
    
    //4. Current Temperature
    var divTemp= document.createElement('divTemp');
    var pTemp= document.createElement('p');

    pTemp.textContent = 'Current:' + ' ' + data.main.temp;
    divTemp.appendChild(pTemp)
    info.appendChild(divTemp);

    //5. Current "feels like" Temperature
    var divFeel= document.createElement('divFeel');
    var pFeel= document.createElement('p');

    pFeel.textContent = 'Feel like:' + ' ' + data.main.feels_like;
    divFeel.appendChild(pFeel)
    info.appendChild(divFeel);


    })
    e.preventDefault();

   



  
    
}



//const form = document.querySelector(".top-banner form");
 
//form.addEventListener("submit", e => {
 // e.preventDefault();
 // const inputVal = input.value;
//});

