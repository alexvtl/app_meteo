
const button = document.getElementById('button')

button.addEventListener("click", meteo)

function meteo(){
const lieu = document.getElementById('lieu').value;
    const param = {
        access_key: "420c11b243ae8ddcd73e62113d788cf1",
        units: "metric"
    }
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
        let timezone = ((data.timezone/3600)*3600*1000)-(60*60*1000)
        timecity.setTime(timecity.getTime()+timezone)
        console.log(timecity)
        
        
        document.getElementById('time').innerHTML= timecity.getHours()+":"+timecity.getMinutes()
    
        
        if(data.main.temp<2){
            if(lieu==="paris" || lieu ==='Paris'){
                document.getElementById('fond').src="https://rare-gallery.com/uploads/posts/5314806-architecture-building-france-paris-pyramid-triangle-the-louvre-museum-snow-person-human-urban-city-downtown-town-metropolis-outdoors-white-louvre-museum-winter-free-images.jpg"
                document.getElementById('data').style.color="black"
                document.getElementById('temp').style.color="black"
                document.getElementById('état').style.color="black"
            }else{
            document.getElementById('fond').src="https://rare-gallery.com/uploads/posts/2001854-aurora-borealis-trees-snow-finland.jpg"}
        }
        if(data.main.temp>2&&data.main.temp<15){
            document.getElementById('fond').src="https://rare-gallery.com/uploads/posts/1102241-city-street-cityscape-night-reflection-rain-umbrella-skyline-skyscraper-evening-tower-city-lights-metropolis-Shanghai-downtown-darkness-urban-area-metropolitan-area-hum.jpg"
        }
        if(data.main.temp>15 && 499<ID&&ID<505 ){
            document.getElementById('temp').innerHTML=`<img id="icon_temp" src=${rain}> ${temp}°`
            document.getElementById('fond').src="https://rare-gallery.com/uploads/posts/1071979-sunlight-landscape-sunset-sea-bay-rock-nature-sand-beach-coast-cliff-cave-island-Turks-Caicos-Formation-Terrain-landform-geographical-feature-sea-cave.jpg"
        }

        if(data.main.temp>15 ){
            document.getElementById('fond').src="https://rare-gallery.com/uploads/posts/1071979-sunlight-landscape-sunset-sea-bay-rock-nature-sand-beach-coast-cliff-cave-island-Turks-Caicos-Formation-Terrain-landform-geographical-feature-sea-cave.jpg"
        }
        
        if(ID>199&&ID<233){
            document.getElementById('temp').innerHTML=`<img id="icon_temp" src=${thunderstorm}> ${temp}°`
            document.getElementById('fond').src="https://rare-gallery.com/uploads/posts/1044557-landscape-lights-sea-night-nature-sand-stars-clouds-beach-lightning-storm-evening-coast-palm-trees-horizon-tropical-atmosphere-thunder-weather-thunderstorm.jpg"
        }
        if(299<ID&&ID<322){
            document.getElementById('temp').innerHTML=`<img id="icon_temp" src=${showerrain}> ${temp}°`
            document.getElementById('fond').src="https://rare-gallery.com/uploads/posts/1102241-city-street-cityscape-night-reflection-rain-umbrella-skyline-skyscraper-evening-tower-city-lights-metropolis-Shanghai-downtown-darkness-urban-area-metropolitan-area-hum.jpg"
        }
        if(499<ID&&ID<505 && data.main.temp<15){
            document.getElementById('temp').innerHTML=`<img id="icon_temp" src=${rain}> ${temp}°`
            document.getElementById('fond').src="https://rare-gallery.com/uploads/posts/1055484-men-lights-street-light-sea-city-street-architecture-water-bicycle-urban-reflection-rain-umbrella-evening-morning-tower-coast-bridge-town-stop-pier-traffic-lights-dusk-.jpg"
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
            document.getElementById('fond').src="https://rare-gallery.com/uploads/posts/1076457-landscape-city-cityscape-night-urban-building-reflection-photography-sunrise-skyline-skyscraper-evening-morning-tower-mist-New-York-City-horizon-atmosphere-dusk-Empire-.jpg"
        }
        if(ID==800){
            document.getElementById('temp').innerHTML=`<img id="icon_temp" src=${clearsky}> ${temp}°`
            document.getElementById('fond').src="https://rare-gallery.com/uploads/posts/5399727-cloud-sky-single-cloud-blue-sky-clear-sky-day-blue-white-switzerland-sun-geneva-background-minimalism-minimalist-minimal-sunlight-summer-samuel-zeller-landscape-orientation-blue-green-free-pic.jpg"
    
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
    });

}