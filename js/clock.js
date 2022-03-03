let userInfo = document.querySelector('.userName');
let clockInfo = document.querySelector('.clock');
let dayInfo = document.querySelector('.day');



let userName = prompt("Adınız nedir?");
    if( userName.length === 0){
        userInfo.innerHTML = `Misafir`
    }
    else{
        userInfo.innerHTML = `${userName}`
    };

    function showTime() {
        let date = new Date().toLocaleString();
        let dayName = new Date().getDay(); 
        
        
        if (dayName == 1) {
            dayName = "Pazartesi";
          } else if (dayName == 2) {
            dayName = "Salı";
          } else if (dayName == 3) {
            dayName = "Çarşamba";
          } else if (dayName == 4) {
            dayName = "Perşembe";
          } else if (dayName == 5) {
            dayName = "Cuma";
          } else if (dayName == 6) {
            dayName = "Cumartesi";
          } else if (dayName == 0) { 
            dayName = "Pazar";
          }
          clockInfo.innerHTML = date ;  
          dayInfo.innerHTML = dayName;
          ;  
    }

    // her 1 saniyede tarihSaat fonksiyonunu yeniden çalıştır
    setInterval(showTime, 1000); 