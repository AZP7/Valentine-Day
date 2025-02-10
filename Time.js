const startTime = "2023-12-03T00:00:00.000Z";

const displaydays = document.getElementById("days");
const displayhours = document.getElementById("hours");
const displayminutes = document.getElementById("minutes");
const displayseconds = document.getElementById("seconds");
const YearMonth = document.getElementById("YearMonth");

function Counttime(startTime){

    setInterval(() => {
        let start = new Date(startTime);

        const currentTime = new Date();
    
        let year = currentTime.getFullYear() - start.getFullYear();
    
        let month = currentTime.getMonth() - start.getMonth();
    
        let day  = currentTime.getDay() - start.getDay();
    
        let hour = currentTime.getHours() - start.getHours();
    
        let minute = currentTime.getMinutes() - start.getMinutes();
    
        let second = currentTime.getSeconds() - start.getSeconds();

        const diffInMilliseconds = currentTime - start;
        let  differentDays = (diffInMilliseconds/(1000* 60 * 60 * 24));
        differentDays = differentDays.toFixed(0);

        if(second < 0){
            second += 60;
            minute -=1;
        }
        if (minute < 0){
            minute += 60;
            hour -=1;
    
        }
        if ( hour < 0){
            hour += 24 ;
            day -=1;
        }
        if (day < 0){
             month -1 ;
             let lastMonth = new Date ( currentTime.getFullYear(), currentTime.getMonth(),0 );
             day += lastMonth.getDate();
        }
        if(month < 0){
             month += 12;
             year -=1;
        }
        displaydays.textContent = differentDays;
        displayhours.textContent = String(hour).padStart(2, '0');
        displayminutes.textContent = String(minute).padStart(2, '0');
        displayseconds.textContent = String(second).padStart(2, '0');
        YearMonth.textContent = `${year} Year ${month} Months`
    }, 1000);

}

Counttime(startTime)
