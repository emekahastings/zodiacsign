 
// function insertMonth(){
//     let months=document.getElementById('months').value;

// return months;
// }
// function insertDate(){
//     let date= document.getElementById('date').value

//     return date;
// }
let date= document.getElementById('date');
let months=document.getElementById('months');
let click= document.getElementById('click')
let result= document.getElementById('result')
let sign= document.getElementById('signs')
let info=document.getElementById('infos')
let details= document.getElementById('details')
let x=document.getElementById('x')

console.log(details)
console.log(sign)
click.addEventListener('click', function(){
  getSign()
  console.log(date.value)
    
})

function getSign(){
    
    if (months.value=='Mar' && date.value>= 21 || months.value=='Apr' && date.value<=19){
      console.log('ariesooo')
      sign.innerHTML='ARIES';
      info.style.display='block'
      x.style.display='block'
      details.innerHTML='Hello, you are willful, positive and independent, you have amazing stamina and potential to succeed, you are independent and ike things to get done your way, you go all out for the people you care about. You tend to be more career oriented than most people. People may misunderstand your resilience for stubborness but its fine.'
               }
             
    
           if (months.value=='Apr' && date.value>= 20 || months.value=='may' && date.value<=20){
            sign.innerHTML='TAURUS';
            info.style.display='block'
            x.style.display='block ' 
            details.innerHTML='Hello, you are sleek and have a flair for the good things of life, you are talented with a good sense of humor, you tend to have a large social circle, you ove food and still value your looks, you are also very prudent financially and find yourselves in the good places of life. Its likely you are an artist, a designers and generally people of this sign make good creatives'
              }
           
             
              if (months.value=='may' && date.value>= 21 || months.value=='jun' && date.value<=20){
                sign.innerHTML='GEMINI';
                info.style.display='block'
                x.style.display='block'
                  details.innerHTML='Hello, you enjoy socializing and love surounding yourselves with people, you are never happier than when you are sharing  ideas and communicating with the people around you. You enjoy chit-chat and tend to have expression and communicate very high on your list of priorities. Sometimes your love for sharing yourselves with others and your never ending list of ideas can make them seem nervous, excited and sometimes even manic'
              }
              if (months.value=='jun' && date.value>= 21 || months.value=='jul' && date.value<=22){
                sign.innerHTML=' CANCER';
                info.style.display='block'
                x.style.display='block'
                  details.innerHTML='Hello, you love to be needed. You have a great desire to feel loved and appreciated in every part of your life. This is needed so you can develop a sense of security and identity. Your sense of home is very important to your feeling of safety and comfort. You find it rather difficult to achieve except you feel safe in your home. You are talented at developng home environments for people that are close to you in both an emotional and a physical sense '
              }
              if (months.value=='jul' && date.value>= 23|| months.value=='aug' && date.value<=22){
                sign.innerHTML='LEO';
                 info.style.display='block'
                  x.style.display='block'
                  details.innerHTML='Hello, you tend to have a royal air about you. you are  talented at bringing warmth,life and light into the relationships that are important to you. You have a knd of natural charisma which often makes other signs gravitate towards you. You love to be at the center of attention and you deeply appreciate compliments and even flattery. Your happy and easy-going attitude makes them pleasurable to be around'
              }
              if (months.value=='aug' && date.value>= 23 || months.value=='sept' && date.value<=22){
                sign.innerHTML='VIRGO';
                info.style.display='block'
                x.style.display='block'
                details.innerHTML='Hello, you are  capable, organized and have analytical minds which often makes you very pleasurable to chat with. Even when you have rather fantastic stories the charming way which tends to help make you sound convincing. Virgos are gifted people and have a natural gift for research whether it comes to assignments or even people, you also have great memory and talent for intuition. You make for excellent team members in both work and social situtations. '
              }
              if (months.value=='sept' && date.value>= 23 || months.value=='oct' && date.value<=22){
                sign.innerHTML='LIBRA';
                info.style.display='block'
                x.style.display='block'
                details.innerHTML='Hello, you thrive when you are in need of balance. You are charming creatures that somehow always surround yourself with a sense of beauty and harmony. Truthfully some of you can go to extremes searching for that harmony which can make the situations unreasonable and unhealthy. You  are nurturing, caring and can make graet defenders of the downtrodden. Sometimes you can be shy if they find difficulties in coming out of their shell and letting their guard down. '
              }
              if (months.value=='oct' && date.value>= 23 || months.value=='nov' && date.value<=21){
                sign.innerHTML='SCORPIO';
                  details.innerHTML='Hello, you are often musinderstood, you are quite bold with an  intense personality and feelings that hide underneath their cool exterior. You are capable people that can complete great and massive projects with control and confidence. Many scorpios have an unshakable focus when they need to call on it. However you are often seceretive, seeming withdrawn and uninterested when they are actually keenly observing'
                  info.style.display='block'
                  x.style.display='block'
                }
              if (months.value=='nov' && date.value>= 22 || months.value=='dec' && date.value<=21){
                sign.innerHTML='SAGGARITUS ';
                  details.innerHTML='Hello, you have  the reputation of the philospher among their fellow zodiac signs. You  do have a great ability to focus not this may be surprising since many of you like to wander and travel the world '
                  info.style.display='block'
                  x.style.display='block'
                }
              if (months.value=='dec' && date.value>= 22 || months.value=='Jan' && date.value<=19){
                sign.innerHTML='CAPRCORN';
                  details.innerHTML= 'Hello, you are extremely driven, motivated about life, and capable of settling lofty and achievable objectives. You are a symbol of achievement but you tend to mumur snd complain at the slightest inconvenience. Your need for isolation makes it difficult for you to ask for help. You are logical, competitive and gloomyy at times.... They do all they set their mind to do regardless of the situation '
                  info.style.display='block'
                  x.style.display='block' 
                }
                if (months.value=='Jan' && date.value>= 20 || months.value=='Feb' && date.value<=18){
                  sign.innerHTML='AQUARIUS';
                    details.innerHTML= 'Hello, you are talented at applying their keen intelligence and ambition to practical matters. Stability and order are important to them and  this makes you good organizers. Your goals are often lofty, you are gifted with very sharp intuition but most times can be secretive about what they perceive. You are patient with yourselves. They have confidence that they can accomplish all their goals if they follow their step by step plan. '
                    info.style.display='block'
                    x.style.display='block' 
                  }
              if (months.value=='Feb' && date.value>= 19 || months.value=='Mar' && date.value<=20){
                sign.innerHTML='PISCES';
                  details.innerHTML='Hello, you are naturally emotional sensitive, gracious and emotionally awaare. You are among the most sympathetic of the zodiac signs and would go through great length to make other people happy , you are creative and imaginative, youb are generally dreamers who can be persuaded to do irrational things, you have a hard time asking for help'
                  info.style.display='block'
                  x.style.display='block '
              }


            }

function conditions(){
  
  if(months.selectedIndex===0){
   alert('Please select a valid month')
  }
  if(date.selectedIndex===0){
    alert('Please select a valid date')
   }
}

click.addEventListener('click', function(){
  conditions()
  
})

       

