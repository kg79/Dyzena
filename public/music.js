// const art = document.getElementsByTagName('article');

// let ajax;

// art[0].onclick = () => {

//   ajax = new XMLHttpRequest();
//   ajax.open('GET', '/newStuff');

//   ajax.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       console.log(this.responseText)
//     }
//   }
//   ajax.send();
// }

const tableCell = document.getElementsByTagName('span');
    let atx;
    window.onclick = () => atx = new AudioContext()

    // confirm('cyber punk');

  let name0,name1,name2,name3,name4,name5,name6,name7,name8,
  name9,name10,name11,name12,name13,name14,name15,name16,
  name17,name18,name19,name20,name21,name22,name23,name24,
  name25,name26,name27,name28,name29,name30,name31,name32,
  name33,name34,name35,name36,name37,name38,name39;

  let volume0,volume1,volume2,volume3,volume4,volume5,volume6,volume7,volume8,volume9,volume10,
  volume11,volume12,volume13,volume14,volume15,volume16,volume17,volume18,volume19,volume20,
  volume21,volume22,volume23,volume24,volume25,volume26,volume27,volume28,volume29,volume30,
  volume31,volume32,volume33,volume34,volume35,volume36,volume37,volume38,volume39;

const keys = [
    {symb:'1', numb:49},
    {symb:'2', numb:50},
    {symb:'3', numb:51},
    {symb:'4', numb:52},
    {symb:'5', numb:53},
    {symb:'6', numb:54},
    {symb:'7', numb:55},
    {symb:'8', numb:56},
    {symb:'9', numb:57},
    {symb:'0', numb:48},
    {symb:'Q', numb:81},
    {symb:'W', numb:87},
    {symb:'E', numb:69},
    {symb:'R', numb:82},
    {symb:'T', numb:84},
    {symb:'Y', numb:89},
    {symb:'U', numb:85},
    {symb:'I', numb:73},
    {symb:'O', numb:79},
    {symb:'P', numb:80},
    {symb:'A', numb:65},
    {symb:'S', numb:83},
    {symb:'D', numb:68},
    {symb:'F', numb:70},
    {symb:'G', numb:71},
    {symb:'H', numb:72},
    {symb:'J', numb:74},
    {symb:'K', numb:75},
    {symb:'L', numb:76},
    {symb:';', numb:186},
    {symb:'Z', numb:90},
    {symb:'X', numb:88},
    {symb:'C', numb:67},
    {symb:'V', numb:86},
    {symb:'B', numb:66},
    {symb:'N', numb:78},
    {symb:'M', numb:77},
    {symb:'<', numb:188},
    {symb:'>', numb:190},
    {symb:'/', numb:191}
  ];


  function Music (name, volume, freak, indy, playing){
    this.name = name;
    this.volume = volume;
    this.freak = freak;
    this.indy = indy;
    this.playing = false;
  }
    Music.prototype.awn = function() {
      if (this.playing === false) {
        this.name = atx.createOscillator();
        this.volume = atx.createGain();
        this.volume.gain.value = 0.333;
        this.name.frequency.value = this.freak;
        this.name.connect(this.volume).connect(atx.destination);
        this.name.start();
        this.playing = true;
          tableCell[this.indy].innerHTML = `${keys[this.indy].symb}<hr/>
          ${scale[this.indy].toPrecision(3)}<br/>
          <em>${this.freak.toPrecision(5)}</em>`;
            tableCell[this.indy].style.background = '#000';
      }
    }
    Music.prototype.auf = function() {
      this.name.stop(0);
      this.playing = false;
       tableCell[this.indy].style.background = '#fff';
  }
let ROOT = 444;
// let scale = [

// ];


let scale = [
  0.1,
  0.1111111111111111,
  0.125,
  0.13333333333333333,
  0.14285714285714285,
  0.15384615384615385,
  0.16666666666666666,
  0.18181818181818182,
  0.2,
  0.21428571428571427,
  0.2222222222222222,
  0.23076923076923078,
  0.25,
  0.26666666666666666,
  0.2727272727272727,
  0.2857142857142857,
  0.3,
  0.3076923076923077,
  0.3333333333333333,
  0.35714285714285715,
  0.36363636363636365,
  0.375,
  0.38461538461538464,
  0.4,
  0.4166666666666667,
  0.42857142857142855,
  0.4444444444444444,
  0.45454545454545453,
  0.46153846153846156,
  0.4666666666666667,
  0.5,
  0.5333333333333333,
  0.5384615384615384,
  0.5454545454545454,
  0.5555555555555556,
  0.5714285714285714,
  0.5833333333333334,
  0.6,
  0.6153846153846154,
  0.625,
  0.6363636363636364,
  0.6428571428571429,
  0.6666666666666666,
  0.6923076923076923,
  0.7,
  0.7142857142857143,
  0.7272727272727273,
  0.75,
  0.7692307692307693,
  0.7777777777777778,
  0.7857142857142857,
  0.8,
  0.8181818181818182,
  0.8333333333333334,
  0.8461538461538461,
  0.8571428571428571,
  0.875,
  0.8888888888888888,
  0.9,
  0.9090909090909091,
  0.9166666666666666,
  0.9230769230769231,
  0.9285714285714286 
];
let notes = [
    new Music(name0,  volume0,  ROOT* eval(scale[ 0]), 0),
    new Music(name1,  volume1,  ROOT* eval(scale[ 1]), 1),
    new Music(name2,  volume2,  ROOT* eval(scale[ 2]), 2),
    new Music(name3,  volume3,  ROOT* eval(scale[ 3]), 3),
    new Music(name4,  volume4,  ROOT* eval(scale[ 4]), 4),
    new Music(name5,  volume5,  ROOT* eval(scale[ 5]), 5),
    new Music(name6,  volume6,  ROOT* eval(scale[ 6]), 6),
    new Music(name7,  volume7,  ROOT* eval(scale[ 7]), 7),
    new Music(name8,  volume8,  ROOT* eval(scale[ 8]), 8),
    new Music(name9,  volume9,  ROOT* eval(scale[ 9]), 9),
    new Music(name10, volume10, ROOT* eval(scale[10]), 10),
    new Music(name11, volume11, ROOT* eval(scale[11]), 11),
    new Music(name12, volume12, ROOT* eval(scale[12]), 12),
    new Music(name13, volume13, ROOT* eval(scale[13]), 13),
    new Music(name14, volume14, ROOT* eval(scale[14]), 14),
    new Music(name15, volume15, ROOT* eval(scale[15]), 15),
    new Music(name16, volume16, ROOT* eval(scale[16]), 16),
    new Music(name17, volume17, ROOT* eval(scale[17]), 17),
    new Music(name18, volume18, ROOT* eval(scale[18]), 18),
    new Music(name19, volume19, ROOT* eval(scale[19]), 19),
    new Music(name20, volume20, ROOT* eval(scale[20]), 20),
    new Music(name21, volume21, ROOT* eval(scale[21]), 21),
    new Music(name22, volume22, ROOT* eval(scale[22]), 22),
    new Music(name23, volume23, ROOT* eval(scale[23]), 23),
    new Music(name24, volume24, ROOT* eval(scale[24]), 24),
    new Music(name25, volume25, ROOT* eval(scale[25]), 25),
    new Music(name26, volume26, ROOT* eval(scale[26]), 26),
    new Music(name27, volume27, ROOT* eval(scale[27]), 27),
    new Music(name28, volume28, ROOT* eval(scale[28]), 28),
    new Music(name29, volume29, ROOT* eval(scale[29]), 29),
    new Music(name30, volume30, ROOT* eval(scale[30]), 30),
    new Music(name31, volume31, ROOT* eval(scale[31]), 31),
    new Music(name32, volume32, ROOT* eval(scale[32]), 32),
    new Music(name33, volume33, ROOT* eval(scale[33]), 33),
    new Music(name34, volume34, ROOT* eval(scale[34]), 34),
    new Music(name35, volume35, ROOT* eval(scale[35]), 35),
    new Music(name36, volume36, ROOT* eval(scale[36]), 36),
    new Music(name37, volume37, ROOT* eval(scale[37]), 37),
    new Music(name38, volume38, ROOT* eval(scale[38]), 38),
    new Music(name39, volume39, ROOT* eval(scale[39]), 39)
];

// for(let i = 0; i < scale.length; i++) {
//   tableCell[i].innerHTML = `${keys[i].symb}<hr/>
//         ${scale[i].toPrecision(3)}
//         <em>${eval(ROOT*scale[i]).toPrecision(5)}</em>`;
// }




window.onkeydown = e => {
  switch (e.keyCode) {
case keys[0].numb:
 notes[0].awn();
 break;

case keys[1].numb:
 notes[1].awn();
 break;

case keys[2].numb:
 notes[2].awn();
 break;

case keys[3].numb:
 notes[3].awn();
 break;

case keys[4].numb:
 notes[4].awn();
 break;

case keys[5].numb:
 notes[5].awn();
 break;

case keys[6].numb:
 notes[6].awn();
 break;

case keys[7].numb:
 notes[7].awn();
 break;

case keys[8].numb:
 notes[8].awn();
 break;

case keys[9].numb:
 notes[9].awn();
 break;

case keys[10].numb:
 notes[10].awn();
 break;

case keys[11].numb:
 notes[11].awn();
 break;

case keys[12].numb:
 notes[12].awn();
 break;

case keys[13].numb:
 notes[13].awn();
 break;

case keys[14].numb:
 notes[14].awn();
 break;

case keys[15].numb:
 notes[15].awn();
 break;

case keys[16].numb:
 notes[16].awn();
 break;

case keys[17].numb:
 notes[17].awn();
 break;

case keys[18].numb:
 notes[18].awn();
 break;

case keys[19].numb:
 notes[19].awn();
 break;

case keys[20].numb:
 notes[20].awn();
 break;

case keys[21].numb:
 notes[21].awn();
 break;

case keys[22].numb:
 notes[22].awn();
 break;

case keys[23].numb:
 notes[23].awn();
 break;

case keys[24].numb:
 notes[24].awn();
 break;

case keys[25].numb:
 notes[25].awn();
 break;

case keys[26].numb:
 notes[26].awn();
 break;

case keys[27].numb:
 notes[27].awn();
 break;

case keys[28].numb:
 notes[28].awn();
 break;

case keys[29].numb:
 notes[29].awn();
 break;

case keys[30].numb:
 notes[30].awn();
 break;

case keys[31].numb:
 notes[31].awn();
 break;

case keys[32].numb:
 notes[32].awn();
 break;

case keys[33].numb:
 notes[33].awn();
 break;

case keys[34].numb:
 notes[34].awn();
 break;

case keys[35].numb:
 notes[35].awn();
 break;

case keys[36].numb:
 notes[36].awn();
 break;

case keys[37].numb:
 notes[37].awn();
 break;

 case keys[38].numb:
notes[38].awn();
break;
case keys[39].numb:
notes[39].awn();
break;
  }
}
window.onkeyup = e => {
  switch (e.keyCode) {
    case keys[0].numb:
     notes[0].auf();
     break;

    case keys[1].numb:
     notes[1].auf();
     break;

    case keys[2].numb:
     notes[2].auf();
     break;

    case keys[3].numb:
     notes[3].auf();
     break;

    case keys[4].numb:
     notes[4].auf();
     break;

    case keys[5].numb:
     notes[5].auf();
     break;

    case keys[6].numb:
     notes[6].auf();
     break;

    case keys[7].numb:
     notes[7].auf();
     break;

    case keys[8].numb:
     notes[8].auf();
     break;

    case keys[9].numb:
     notes[9].auf();
     break;

    case keys[10].numb:
     notes[10].auf();
     break;

    case keys[11].numb:
     notes[11].auf();
     break;

    case keys[12].numb:
     notes[12].auf();
     break;

    case keys[13].numb:
     notes[13].auf();
     break;

    case keys[14].numb:
     notes[14].auf();
     break;

    case keys[15].numb:
     notes[15].auf();
     break;

    case keys[16].numb:
     notes[16].auf();
     break;

    case keys[17].numb:
     notes[17].auf();
     break;

    case keys[18].numb:
     notes[18].auf();
     break;

    case keys[19].numb:
     notes[19].auf();
     break;

    case keys[20].numb:
     notes[20].auf();
     break;

    case keys[21].numb:
     notes[21].auf();
     break;

    case keys[22].numb:
     notes[22].auf();
     break;

    case keys[23].numb:
     notes[23].auf();
     break;

    case keys[24].numb:
     notes[24].auf();
     break;

    case keys[25].numb:
     notes[25].auf();
     break;

    case keys[26].numb:
     notes[26].auf();
     break;

    case keys[27].numb:
     notes[27].auf();
     break;

    case keys[28].numb:
     notes[28].auf();
     break;

    case keys[29].numb:
     notes[29].auf();
     break;

    case keys[30].numb:
     notes[30].auf();
     break;

    case keys[31].numb:
     notes[31].auf();
     break;

    case keys[32].numb:
     notes[32].auf();
     break;

    case keys[33].numb:
     notes[33].auf();
     break;

    case keys[34].numb:
     notes[34].auf();
     break;

    case keys[35].numb:
     notes[35].auf();
     break;

    case keys[36].numb:
     notes[36].auf();
     break;

    case keys[37].numb:
     notes[37].auf();
     break;

     case keys[38].numb:
notes[38].auf();
break;
case keys[39].numb:
notes[39].auf();
break;
  }
}
