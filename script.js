function changeUnit(){
        var measurement = document.getElementById('mode_switch');
        if (measurement.innerHTML === "Switch to Metric" ) {
            measurement.innerHTML = "Switch to Imperial";
            document.getElementById("feet").innerHTML = 'feet';
            document.getElementById("inch").innerHTML = 'in';
            document.getElementById("lbs").innerHTML = 'lbs';
            document.getElementById("lbs2").innerHTML = 'lbs';
        }else {
                measurement.innerHTML = 'Switch to Metric';
                document.getElementById("feet").innerHTML = 'meter';
                document.getElementById("inch").innerHTML = 'cm';
                document.getElementById("lbs").innerHTML = 'kg';
                document.getElementById("lbs2").innerHTML = 'kg';
    }
}

function Calculate(){
    gender = document.getElementById("gender").value;
    age = document.getElementsByName("age")[0].value;
    feet = document.getElementsByName("feet")[0].value;
    inch = document.getElementsByName("inch")[0].value;
    weight = document.getElementsByName("weight")[0].value;
    timeframe = document.getElementById("timeframe").value;


    alert(timeframe);
    
}