let click= document.getElementById('click')
let main= document.getElementById('main')
let info= document.getElementById('info')
let birthmonth= document.getElementById('months')
let birthdate= document.getElementById('date')
let sign= document.getElementById('sign')
let result= document.getElementById('result')
///////////////////////////////////////////
 let sign1= 'ARIES'
 let sign1info=' Like their fellow fire signs Leo and Saggaritus. Areies is a passionate,confident and motivated leader who builds comunity with their cheerful disposition and relentless determination. Unco plicated and direct in  their approach they they often get frustrated by exhaustive details and unnecessary nuances. They like things quick and dirty, a temperament often reflected in their sexual proclivities. They think after they leap' 
 let sign2='GEMINI'
let sign2info= ''
let sign3= 'CANCER'
let sign3info=''
let sign4='LEO'
let sign4info=''
let sign5= 'VIRGO'
let sign5info=''
let sign6= 'LIBRA'
let sign6info=''
let sign7= 'SCORPIO'
let sign7info=''
let sign8= 'SAGGARITUS'
let sign8info=''
let sign9='CAPRICORN'
let sign9info=''
let sign10='AQUARIUS'
let sign10info=''
let sign11= 'PISCES'
let sign11info=''
let sign12= 'TAURUS'
let sign12info=''


click.addEventListener('click', function(){
    if(birthmonth.selectedIndex=='March' && birthdate.selectedIndex>= 18 || birthmonth.selectedIndex=='April' && birthdate.selectedIndex<=19){
        
       sign.innerHTML= sign1;
       info.innerHTML=sign1info
    } if (birthmonth.value=='May' && birthdate.value>= 21 || birthmonth.value=='June' && birthdate.value<=20){
       sign.innerHTML=sign2;
        info.innerHTML=sign2info
    }
    if(birthmonth.value=='June' && birthdate.value>= 21 || birthmonth.value=='July' && birthdate.value<=22){
       sign.innerHTML=sign3
       info.innerHTML=sign3info
    }
     if(birthmonth.value=='July' && birthdate.value>= 23 || birthmonth.value=='August' && birthdate.value<=22){
       sign.innerHTML= sign4
       info.innerHTML= sign4info
     }
     if(birthmonth.value=='August' && birthdate.value>= 22 || birthmonth.value=='September' && birthdate.value<=22){
        sign.innerHTML=sign5
        info.innerHTML= sign5info
     }
     if(birthmonth.value=='September' && birthdate.value>= 23 || birthmonth.value=='October' && birthdate.value<=22){
        sign.innerHTML= sign6
        info.innerHTML= sign6info
     }
     if(birthmonth.value=='October' && birthdate.value>= 23 || birthmonth.value=='November' && birthdate.value<=21){
        sign.innerHTML=sign7
        info.innerHTML=sign7info
     }
     if(birthmonth.value=='November' && birthdate.value>= 22 || birthmonth.value=='December' && birthdate.value<=21){
        sign.innerHTML= sign8
        info.innerHTML= sign8info
     }
     if(birthmonth.value=='December' && birthdate.value>= 21 || birthmonth.value=='January' && birthdate.value<=19){
       sign.innerHTML= sign9
       info.innerHTML=sign9info
     }
     if(birthmonth.value=='January' && birthdate.value>= 20 || birthmonth.value=='February' && birthdate.value<=18){
       sign.innerHTML=sign10
       info.innerHTML=sign10info
     }
     if(birthmonth.value=='February' && birthdate.value>= 19 || birthmonth.value=='March' && birthdate.value<=20){
         sign.innerHTML=sign11
         info.innerHTML= sign11info
     }
     if(birthmonth.value=='April' && birthdate.value>= 20 || birthmonth.value=='May' && birthdate.value<=20){
        sign.innerHTML=sign12
        info.innerHTML=sign12info
     }
})