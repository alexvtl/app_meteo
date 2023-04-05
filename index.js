
const button = document.getElementById('button')

button.addEventListener("click", meteo)

function meteo(){
const lieu = document.getElementById('lieu').value;
    const param = {
        access_key: "420c11b243ae8ddcd73e62113d788cf1",
        units: "metric"
    }
    fetch(
        `https://api.unsplash.com/search/photos/?client_id=8hSqeRUZn87BqsVxrcIePh7NF7ZT4K6JJRXwtv8xnfE&page=1&orientation=landscape&order_by=popular&query=${lieu}`
      )
        .then((res) => res.json())
        .then((data) => {
            document.getElementById('fond').src=`${data?.results[0].urls.full}`})

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${lieu}&lang=fr&appid=${param.access_key}&units=${param.units}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const temp=Math.round(data.main.temp);
        const speed=Math.round(data.wind.speed)
        const feelslike = data.main.feels_like;
        const ID = data.weather[0].id;
        const clearsky = 'https://openweathermap.org/img/wn/01d@2x.png'
        const fewclouds='http://openweathermap.org/img/wn/02d@2x.png'
        const scatteredclouds = "http://openweathermap.org/img/wn/03d@2x.png"
        const brokenclouds = "http://openweathermap.org/img/wn/04d@2x.png"
        const showerrain = "http://openweathermap.org/img/wn/09d@2x.png"
        const rain = "http://openweathermap.org/img/wn/10d@2x.png"
        const thunderstorm = 'http://openweathermap.org/img/wn/11d@2x.png'
        const snow = "http://openweathermap.org/img/wn/13d@2x.png"
        const mist = "http://openweathermap.org/img/wn/50d@2x.png"
        const text =`
        <ul>
        <li><i class="fa-solid fa-hand"></i> ${feelslike}°</li>
        <li><i class="fa-solid fa-droplet"></i> ${data.main.humidity}%</li>
        <li><i class="fa-solid fa-wind"></i> ${speed}km/h</li>
        </ul>`
        document.getElementById('data').innerHTML=text
        document.getElementById('état').innerHTML=`${data.weather[0].description}`
        document.getElementById('data').style.animation ='moove 2s ease forwards'
        document.getElementById('data').classList.toggle('active')

        let timecity = new Date()
        let timezone = ((data.timezone/3600)*3600*1000)-(60*60*1000*2)
        timecity.setTime(timecity.getTime()+timezone)
        console.log(timecity)
        
        
        document.getElementById('time').innerHTML= timecity.getHours()+":"+timecity.getMinutes()
    
    console.log(lieu+" "+data.weather[0].description+" ville");
       
        
        if(data.main.temp>15 && 499<ID&&ID<505 ){
            document.getElementById('temp').innerHTML=`<img id="icon_temp" src=${rain}> ${temp}°`
        }
        
        if(ID>199&&ID<233){
            document.getElementById('temp').innerHTML=`<img id="icon_temp" src=${thunderstorm}> ${temp}°`
        }
        if(299<ID&&ID<322){
            document.getElementById('temp').innerHTML=`<img id="icon_temp" src=${showerrain}> ${temp}°`
        }
        if(499<ID&&ID<505 && data.main.temp<15){
            document.getElementById('temp').innerHTML=`<img id="icon_temp" src=${rain}> ${temp}°`
        }
        if(ID==511){
            document.getElementById('temp').innerHTML=`<img id="icon_temp" src=${snow}> ${temp}°`
        }
        if(519<ID&&ID<532){
            document.getElementById('temp').innerHTML=`<img id="icon_temp" src=${rain}> ${temp}°`
        }
        if(599<ID&&ID<623){
            document.getElementById('temp').innerHTML=`<img id="icon_temp" src=${snow}> ${temp}°`
        }
        if(700<ID&&ID<782){
            document.getElementById('temp').innerHTML=`<img id="icon_temp" src=${mist}> ${temp}°`
        }
        if(ID==800){
            document.getElementById('temp').innerHTML=`<img id="icon_temp" src=${clearsky}> ${temp}°`
    
        }
        if(ID==801){
            document.getElementById('temp').innerHTML=`<img id="icon_temp" src=${fewclouds}> ${temp}°`
        }
        if(ID==802){
            document.getElementById('temp').innerHTML=`<img id="icon_temp" src=${scatteredclouds}> ${temp}°`
        }
        if(ID>802){
            document.getElementById('temp').innerHTML=`<img id="icon_temp" src=${brokenclouds}> ${temp}°`
        }
  
    })
}