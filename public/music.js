
const atx = new AudioContext();


let name0,name1,name2,
name3,name4,name5,
name6,name7,name8;
let volume0,volume1,volume2,
volume3,volume4,volume5,
volume6,volume7,volume8;

class Music {
    constructor(name, volume, index, playing) {
        this.name = name;
        this.volume = volume;
        this.index = index;
        this.playing = false;
    }
    awn() {
        if (this.playing === false) {
            this.name = atx.createOscillator();
            this.volume = atx.createGain();
            this.name.connect(this.volume).connect(atx.destination);
            this.name.frequency.value = ROOT* scale[this.index];
            this.volume.gain.value = 0.333;
            this.name.start(0);
            this.playing = true;
        }
    }
    auf() {
        this.name.stop(0);
        this.playing = false;
    }
    pitchUp() {
        if (this.playing === true) {
            notes[this.index].auf();
            scale[this.index] += .1;
            notes[this.index].awn();
            head[this.index].innerText = ROOT* scale[this.index].toPrecision(4) + 
            `\n go fuck your mother`
        }
    }
    pitchDown() {
        if (this.playing === true) {
            notes[this.index].auf();
            scale[this.index] -= .1;
            notes[this.index].awn();
            head[this.index].innerText = ROOT* scale[this.index].toPrecision(4);
        }
    }
}
let ROOT = 432;
let scale = [
256/243, 2187/2048, 9/8, 32/27, 8192/6561, 81/64, 4/3, 1024/729, 3/2, 128/81, 6561/4096, 27/16, 16/9, 4096/2187, 243/128, 2
]

let notes = [
  new Music(name0, volume0, 0),
  new Music(name1, volume1, 1),
  new Music(name2, volume2, 2),
  new Music(name3, volume3, 3),
  new Music(name4, volume4, 4),
  new Music(name5, volume5, 5),
  new Music(name6, volume6, 6),
  new Music(name7, volume7, 7),
  new Music(name8, volume8, 8),
];
window.addEventListener('keydown', e => {
    switch (e.keyCode) {
        case keke[0].num:
        notes[0].awn();
        break;
        case keke[1].num:
        notes[1].awn();
        break;
        case keke[2].num:
        notes[2].awn();
        break;
        case keke[3].num:
        notes[3].awn();
        break;
        case keke[4].num:
        notes[4].awn();
        break;
        case keke[5].num:
        notes[5].awn();
        break;
        case keke[6].num:
        notes[6].awn();
        break;
        case keke[7].num:
        notes[7].awn();
        break;
        case keke[8].num:
        notes[8].awn();
        break;
    }
})

window.addEventListener('keyup', e => {
    switch (e.keyCode) {
        case keke[0].num:
        notes[0].auf();
        break;
        case keke[1].num:
        notes[1].auf();
        break;
        case keke[2].num:
        notes[2].auf();
        break;
        case keke[3].num:
        notes[3].auf();
        break;
        case keke[4].num:
        notes[4].auf();
        break;
        case keke[5].num:
        notes[5].auf();
        break;
        case keke[6].num:
        notes[6].auf();
        break;
        case keke[7].num:
        notes[7].auf();
        break;
        case keke[8].num:
        notes[8].auf();
        break;
    }
})
window.onkeydown = e => {
    switch(e.keyCode) {
        case 38:
        notes[0].pitchUp();
        notes[1].pitchUp();
        notes[2].pitchUp();
        notes[3].pitchUp();
        notes[4].pitchUp();
        notes[5].pitchUp();
        notes[6].pitchUp();
        notes[7].pitchUp();
        notes[8].pitchUp();
        break;
        case 40:
        notes[0].pitchDown();
        notes[1].pitchDown();
        notes[2].pitchDown();
        notes[3].pitchDown();
        notes[4].pitchDown();
        notes[5].pitchDown();
        notes[6].pitchDown();
        notes[7].pitchDown();
        notes[8].pitchDown();
        break;
    }
}

