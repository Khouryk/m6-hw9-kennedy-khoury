fetch('https://api.openweathermap.org/data/2.5/weather?q={city}&appid=716182205ced012435f707c12bb5f9f7&units=imperial');
then(function(res){
    return res.json()
})
.then(function(res){
    console.log(res)
})