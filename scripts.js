var flag=true;

function effect( x){
    flag = false
    $("#eggs").empty();
    $("#eggs").append(x); 

    $("#eggs").show();
    setTimeout(function() { $("#eggs").hide(); flag=true; }, 2000);
}


$(document).mousemove(function(e) {
    mouseX = e.pageY;
    mouseY = e.pageX;
    if(mouseX>0 && mouseX<100 && mouseY>0 && mouseY<100 && flag){        
        effect('<img src="https://i.pinimg.com/564x/22/31/ec/2231ec3f81a4308dd72d4e0d187696dd.jpg" alt="Girl in a jacket" >');
    }
    if(mouseX>200 && mouseX<300 && mouseY>0 && mouseY<100 && flag){        
        effect('<img src="https://preview.redd.it/ckwlmls9es121.jpg?width=640&crop=smart&auto=webp&s=c869a728f112569ebf82bc0eae8381839b526f98" alt="Girl in a jacket" >');
    }
    if(mouseX>400 && mouseX<500 && mouseY>0 && mouseY<100 && flag){        
        effect('<img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/zw1mzvqki7chlfpy8nmr" alt="Girl in a jacket" >');
    }

    if(mouseX>100 && mouseX<200 && mouseY>200 && mouseY<300 && flag){        
        effect('<img src="https://ventaspop-images.staticgnt.com/KffRfwzV2ikTgPVD5EUbbr2uGQA=/filters:strip_exif():quality(70)/files/galleries/512/22/MUSIKCENTER02_INFERIOR_560X321px-min.jpg" alt="Girl in a jacket" >');
    }

    if(mouseX>400 && mouseX<500 && mouseY>200 && mouseY<300 && flag){        
        effect('<img src="http://www.shmee.me/wp-content/uploads/2016/05/captain-america-civil-war-promo-art-fight.jpg" alt="Girl in a jacket" >');
    }
    
     if(mouseX>600 && mouseX<700 && mouseY>200 && mouseY<300 && flag){        
        effect('<img src="https://i.scdn.co/image/ab67616d0000b273a1b3e6738a0dc7deca8d8dbd" alt="Girl in a jacket" >');
    }
}).mouseover();

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

var timeElapsed = Date.now();
var today = new Date(timeElapsed);

var last = new Date("Apr 30, 2022 03:17:00")

document.getElementById("now").innerHTML = today.toLocaleDateString();
document.getElementById("last").innerHTML = last.toLocaleDateString();


var countDownDate = new Date("Apr 30, 2022 03:17:00").getTime();

var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = now - countDownDate ;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    

    //document.getElementById("now").innerHTML = now.toDateString();
    //document.getElementById("last").innerHTML = countDownDate.toDateString();

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);



