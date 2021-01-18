
function insertMonth(){
    let months=document.getElementById('months').value;

return months;
}
function insertDate(){
    let date= document.getElementById('date').value

    return date;
}

// function showSign(){
//     insertVal()
//     if (months.value=='Jan'){
//         alert('Finally')
//     } else{
//         alert('not again')
//     }
// }
let click= document.getElementById('click')
let result= document.getElementById('result')
let sign= document.getElementById('signs')
let info=document.getElementById('infos')
console.log(sign)
click.addEventListener('click', function(){
    insertMonth();
    insertDate();
    getSign()
})

function getSign(){
    
    if (months.value=='Mar' && date.value>= 21 || months.value=='Apr' && date.value<=19){
               sign.innerHTML='ARIES';
                 info.innerHTML='Those born under Aries zodiac signoften have an exciting and enthusuastic energy. they often seek new and challenging adventures that push ther limits. They are driven, ambitious and curious, and they tend to have a strong sense of justice. They love competition, in all its forms. They are generally quite optmstic na d love beng placed n leadershp positions'
             }
    
           if (months.value=='Apr' && date.value>= 20 || months.value=='may' && date.value<=20){
                sign.innerHTML='TAURUS';
                  info.innerHTML= 'TAURUS also known as The bull, people of this zodiac sign are incredibly dedicated, reliableb and dependable. Above all things, they value their sense of security and stability. After Aries brings its fiery energy, its Taurus that lays down the foubdation and follows through. They tend to be rather stubborn and dislike change. When they settle with a routine they like its difficult to get them to chnage it.' 
              }
              if (months.value=='may' && date.value>= 21 || months.value=='jun' && date.value<=20){
                sign.innerHTML='GEMIN';
                  info.innerHTML='Those born under Gemin zodiac sign enjoy socializing and love surounding themselves with people. They are ruled by the planet Mecury, and so they are never happier than when they are sharing theuir ideas and communicating with the people around them. They enjoy chit-chat and tend to have expression and communicationvery high on their list of priorities. Sometimes their love for sharing themselves with othersand their never ending list of ideas can make them seem nervous, excited and sometimes even manic'
              }
              if (months.value=='jun' && date.value>= 21 || months.value=='jul' && date.value<=22){
                sign.innerHTML=' CANCER';
                  info.innerHTML='Those born under Cancer zodiac sign need to be needed. They have a great desire to feel loved and appreciated in every part of their lives. Ths is needed so they can develop a sense of security and identity. To the Cancer zodiac sign their sense of home is very mportant to their feeling of safety and comfort. They find it rather difficult to achieve except they feel safe in their home. They are talented at developng home environments for people that are close to them in both an emotional and a physical sense '
              }
              if (months.value=='jul' && date.value>= 23|| months.value=='aug' && date.value<=22){
                sign.innerHTML='LEO';
                  info.innerHTML='Leos tend to have a royal air about them. theur planetory ruler is the sun so they are talented at bringing warmth , life and light into the relationships that are important to them. |They have a knd of natural charisma which often makes other signs gravitate towards them. Like their plantory ruler, Leos love to be at the center of attention and they deeply appreciate compliments and even flattery. Their happy and easy-going attitude makes them pleasurable to be around'
              }
              if (months.value=='aug' && date.value>= 23 || months.value=='sept' && date.value<=22){
                sign.innerHTML='VIRGO';
                  info.innerHTML='Thise born under the Virgo zodiac sign have capable, oragnized and analytical minds which often makes them very pleasurable to chat with. Even when they have rather fantastic stories the charming way which they tell them akes thems ound convincing. Virgos are gifted people and have a natural gift for research whether it comes to assignments or even people. They also have greta memory and talent for intuition. They make fir excellent team members in both work and social situtations. They love to collaborate, although their sometimes critical nature can annoy others  when those criticism not understood '
              }
              if (months.value=='sept' && date.value>= 23 || months.value=='oct' && date.value<=22){
                sign.innerHTML='LIBRA';
                  info.innerHTML='The zodac sign Libra thrives when their needs of balance, justice, and stability are met. They are charming creatures that somehow always surround themselves witha sense of beauty and harmony. Truthfully some of them can go to extremes searching for that harmony whuch can make their situations unreasonable and unhealthy. Their ruling planet is venus which means Libra are nurturing, caring and they can make graet defenders of the downtrodden. Sometimes they can be shy if they find difficulties in coming out of their shell and letting their guard down. Despite their more introverted side they still love a good debate.'
              }
              if (months.value=='oct' && date.value>= 23 || months.value=='nov' && date.value<=21){
                sign.innerHTML='SCORPIO';
                  info.innerHTML='Unfortunately those born with the Scorpio zodiac sign are often musinderstood. They are quite bold with intense personalities and feelings that hide underneath their cool exterior. They are capable people that can complete great and massive projects with control and confidence. Their intensity when approaching a situation means that they can surmount almost all obstacles of they truly put theur mind to it. Many scorpios have an unshakable focus when they need to call on it. However they are often seceretive, seeming withdrawn and uninterested when they are actually keenly observing'
              }
              if (months.value=='nov' && date.value>= 22 || months.value=='dec' && date.value<=21){
                sign.innerHTML='SAGGARITUS ';
                  info.innerHTML='The saggaritus zodiac sign often gains the reputation of the philospher among their fellow zodiac signs. They do have a great ability to focus nut this may be surprising since many of them like twander and travel the world '
              }
              if (months.value=='dec' && date.value>= 22 || months.value=='Jan' && date.value<=19){
                sign.innerHTML='CAPRCORN';
                  info.innerHTML= 'Those born under the Capricorn Zodiac sign are talented at applying their keen intelligence and ambition to practical matters. Stability nand order are important to themand this makes them good organizers. Their goals are often lofty and they achieve them slowly but purposefullyand systematically. They are gifted with very sharp intuition but most times they can be secretive about what they perceive. They are patuent with themselves. Theyb have confidence that they can accomplish all theur goalsif they follow their step by step plan. They are responsible people that often take the heavy burden of others whether willingly or because they are so capable. However they find it difficult to share their own troubles and can struggle with depression if they dont learn how to manage their feelings  '
              }
              if (months.value=='Jan' && date.value>= 20 || months.value=='Feb' && date.value<=18){
                sign.innerHTML='AQUARIUS';
                  info.innerHTML= 'Aquarius often comes off as an oddball, they have quirky personalities and just go about quiely achieving their goals in quiet, unorthidox ways. Often times just because Aquarius choses to take the path less travelled the results of their eccentric method are surpringky effective. Thet are humanitarians of the zodiac, taking up bannenrs for the greater good of humanity. Many of them are also easygoingand their peculiarit along with their curious naturemakes them fast friendships. Sometimes if they dont try to motivate themselves they can succumb to laziness. Many are often gifted with a strong sense of art and poetry '
              }
              if (months.value=='Feb' && date.value>= 19 || months.value=='Mar' && date.value<=20){
                sign.innerHTML='PISCES';
                  info.innerHTML='The Pisces zodiac signare the dreamers amd mystics of the zodiac but you may never know it. Manhy of them have extremely wild inner lives filled with fantasy, magic and wonder. They may find itbhard to express that inner life meaning some of them are introverts. They are honest compassionate and trustworthy but can sometimes take it too far and be rather gullible. Because of that they can be taken advantage of. Beneath their quite exterior theybhave an intense determination which helps them transcend any obstacles that come their way'
              }
}







