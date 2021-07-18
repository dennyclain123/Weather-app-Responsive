const router = require('express').Router()
const fetch = require('node-fetch')
require('dotenv').config()
router.get('/', (req, res) => {
    res.render('index', {
        city: null,
        des: null,
        icon: null,
        temp: null,
        country: null,
        humidity: null,
        first_day_icon: null,
        first_day_temp: null,
        second_day_icon: null,
        second_day_temp: null,
        third_day_icon: null,
        third_day_temp: null,
        fourth_day_icon: null,
        fourth_day_temp: null,
        fifth_day_icon: null,
        fifth_day_temp: null,
        sixth_day_icon: null,
        sixth_day_temp: null,
        seventh_day_icon: null,
        seventh_day_temp: null,
        feels_like: null,
        temp_min: null,
        temp_max: null,
        wind_speed: null,
        wind_deg: null,
        weather_condition: null,
        pressure: null,
        cloud_percent: null,
        sea_level: null,
        grnd_level: null,
        visibility: null,
        hourly_temp_1: null,
        hourly_icon_1: null,
        hourly_temp_2: null,
        hourly_icon_2: null,
        hourly_temp_3: null,
        hourly_icon_3: null,
        hourly_temp_4: null,
        hourly_icon_4: null,
        hourly_temp_5: null,
        hourly_icon_5: null,
        hourly_temp_6: null,
        hourly_icon_6: null,
        hourly_temp_7: null,
        hourly_icon_7: null,
        hourly_temp_8: null,
        hourly_icon_8: null,
    });
});

router.post('/', async (req, res) => {
    const city = req.body.city;
    const url_api = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&appid=' + process.env.API_KEY + ''

    try {
        await fetch(url_api)
            .then(res => res.json())
            .then(data => {
                if (data.message === 'city not found') {
                    res.render('index', {
                        city: data.message,
                        des: null,
                        icon: null,
                        temp: null,
                        country: null,
                        humidity: null,
                        first_day_icon: null,
                        first_day_temp: null,
                        second_day_icon: null,
                        second_day_temp: null,
                        third_day_icon: null,
                        third_day_temp: null,
                        fourth_day_icon: null,
                        fourth_day_temp: null,
                        fifth_day_icon: null,
                        fifth_day_temp: null,
                        sixth_day_icon: null,
                        sixth_day_temp: null,
                        seventh_day_icon: null,
                        seventh_day_temp: null,
                        feels_like: null,
                        temp_min: null,
                        temp_max: null,
                        wind_speed: null,
                        wind_deg: null,
                        weather_condition: null,
                        pressure: null,
                        cloud_percent: null,
                        sea_level: null,
                        grnd_level: null,
                        visibility: null,
                        hourly_temp_1: null,
                        hourly_icon_1: null,
                        hourly_temp_2: null,
                        hourly_icon_2: null,
                        hourly_temp_3: null,
                        hourly_icon_3: null,
                        hourly_temp_4: null,
                        hourly_icon_4: null,
                        hourly_temp_5: null,
                        hourly_icon_5: null,
                        hourly_temp_6: null,
                        hourly_icon_6: null,
                        hourly_temp_7: null,
                        hourly_icon_7: null,
                        hourly_temp_8: null,
                        hourly_icon_8: null,
                    })
                } else {
                    //Left pane and location
                    const city = data.city.name;
                    const des = data.list[0].weather[0].description;
                    const icon = data.list[0].weather[0].icon;
                    const temp = Math.round(data.list[0].main.temp);
                    const country = data.city.country
                    const humidity = data.list[0].main.humidity
                    //7 days forecast
                    const first_day_icon = data.list[0].weather[0].icon
                    const first_day_temp = Math.round(data.list[0].main.temp);
                    const second_day_icon = data.list[8].weather[0].icon
                    const second_day_temp = Math.round(data.list[8].main.temp);
                    const third_day_icon = data.list[15].weather[0].icon
                    const third_day_temp = Math.round(data.list[15].main.temp);
                    const fourth_day_icon = data.list[22].weather[0].icon
                    const fourth_day_temp = Math.round(data.list[22].main.temp);
                    const fifth_day_icon = data.list[30].weather[0].icon
                    const fifth_day_temp = Math.round(data.list[30].main.temp);
                    const sixth_day_icon = data.list[36].weather[0].icon
                    const sixth_day_temp = Math.round(data.list[36].main.temp);
                    const seventh_day_icon = data.list[24].weather[0].icon
                    const seventh_day_temp = Math.round(data.list[24].main.temp);
                    //Feels like Temperature with min and max  
                    const feels_like = data.list[0].main.feels_like
                    const temp_min = data.list[0].main.temp_min
                    const temp_max = data.list[0].main.temp_max
                    //Wind Speed and Degree
                    const wind_speed = data.list[0].wind.speed
                    const wind_deg = data.list[0].wind.deg
                    //Weather Condition
                    const weather_condition = data.list[0].weather[0].main
                    //Pressure
                    const pressure = data.list[0].main.pressure
                    //Cloud Percentage
                    const cloud_percent = data.list[0].clouds.all
                    //Sea,ground and visibility level
                    const sea_level = data.list[0].main.sea_level
                    const grnd_level = data.list[0].main.grnd_level
                    const visibility = data.list[0].visibility
                    const hourly_temp_1 = Math.round(data.list[0].main.temp);
                    const hourly_icon_1 = data.list[0].weather[0].icon
                    const hourly_temp_2 = Math.round(data.list[1].main.temp);
                    const hourly_icon_2 = data.list[1].weather[0].icon
                    const hourly_temp_3 = Math.round(data.list[2].main.temp);
                    const hourly_icon_3 = data.list[2].weather[0].icon
                    const hourly_temp_4 = Math.round(data.list[3].main.temp);
                    const hourly_icon_4 = data.list[3].weather[0].icon
                    const hourly_temp_5 = Math.round(data.list[4].main.temp);
                    const hourly_icon_5 = data.list[4].weather[0].icon
                    const hourly_temp_6 = Math.round(data.list[5].main.temp);
                    const hourly_icon_6 = data.list[5].weather[0].icon
                    const hourly_temp_7 = Math.round(data.list[6].main.temp);
                    const hourly_icon_7 = data.list[6].weather[0].icon
                    const hourly_temp_8 = Math.round(data.list[7].main.temp);
                    const hourly_icon_8 = data.list[7].weather[0].icon
                    res.render('index', {
                        city, des, icon, temp, country, humidity, first_day_icon, first_day_temp, second_day_icon, second_day_temp,
                        third_day_icon, third_day_temp, fourth_day_icon, fourth_day_temp, fifth_day_icon, fifth_day_temp,
                        sixth_day_icon, sixth_day_temp, seventh_day_icon, seventh_day_temp,
                        feels_like, temp_min, temp_max, wind_speed, wind_deg, weather_condition, pressure, cloud_percent,
                        sea_level, grnd_level, visibility, hourly_temp_1, hourly_icon_1, hourly_temp_2, hourly_icon_2,
                        hourly_temp_3, hourly_icon_3, hourly_temp_4, hourly_icon_4, hourly_temp_5, hourly_icon_5,
                        hourly_temp_6, hourly_icon_6, hourly_temp_7, hourly_icon_7, hourly_icon_8, hourly_temp_8
                    });
                }
            }
            );

    } catch (err) {
        res.render('index', {
            city: 'something wrong',
            des: null,
            icon: null,
            temp: null,
            country: null,
            humidity: null,
            first_day_icon: null,
            first_day_temp: null,
            second_day_icon: null,
            second_day_temp: null,
            third_day_icon: null,
            third_day_temp: null,
            fourth_day_icon: null,
            fourth_day_temp: null,
            fifth_day_icon: null,
            fifth_day_temp: null,
            sixth_day_icon: null,
            sixth_day_temp: null,
            seventh_day_icon: null,
            seventh_day_temp: null,
            feels_like: null,
            temp_min: null,
            temp_max: null,
            wind_speed: null,
            wind_deg: null,
            weather_condition: null,
            pressure: null,
            cloud_percent: null,
            sea_level: null,
            grnd_level: null,
            visibility: null,
            hourly_temp_1: null,
            hourly_icon_1: null,
            hourly_temp_2: null,
            hourly_icon_2: null,
            hourly_temp_3: null,
            hourly_icon_3: null,
            hourly_temp_4: null,
            hourly_icon_4: null,
            hourly_temp_5: null,
            hourly_icon_5: null,
            hourly_temp_6: null,
            hourly_icon_6: null,
            hourly_temp_7: null,
            hourly_icon_7: null,
            hourly_temp_8: null,
            hourly_icon_8: null,
        })
    }

})


module.exports = router;