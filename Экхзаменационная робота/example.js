"use strict";

$(document).ready(function() {

    function getCoordinateLat() {
        navigator.geolocation.getCurrentPosition((position) => {
            position.coords.latitude
        });
    };

    function getCoordinateLon() {
        navigator.geolocation.getCurrentPosition((position) => {
            position.coords.longitude
        });
    };
    let lat = getCoordinateLat();
    let lon = getCoordinateLon();






    $.get(
            "https://api.openweathermap.org/data/2.5/onecall", {
                "lat": 47.8388,
                "lon": 35.139567,
                "appid": "faa4db8f714f181f8df291eb2e6992c5"
            },
            (date) => {
                console.log(date);
            })
        .done(() => {
            $.get(
                "https://api.openweathermap.org/data/2.5/onecall", {
                    "lat": lat,
                    "lon": lon,
                    "appid": "faa4db8f714f181f8df291eb2e6992c5"
                },
                (date) => {
                    console.log(date);
                })
        });
});

// Тут почти ничего нету но у меня не хватает времени чтобы это доделать , так что сдаю что есть 