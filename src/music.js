import * as Tone from 'tone';

let bpm = 40;
let isPlaying = false;

// hh pattern
const highHatNotes = [['G3', 'G3']];
// Kick notes array
const kickNotes = [
  ['C3', 'C3'],
  [null, 'C3'],
  [null, 'C3'],
  [null, 'C3'],
  [null, 'C3'],
  [null, 'C3'],
  [null, 'C3'],
  ['C3', 'C3'],
  null,
  'C3',
  [null, 'C3'],
  ['C3', 'C3'],
  null,
  [null, 'C3'],

  null,
  null,
];

const snarePattern = [null, 'D4'];

const bassPattern = [
  'C2',
  'D2',
  ['Eb2', 'F2'],
  [null, 'G2'],
  [null, 'C3'],
  [null, 'Bb2'],
  null,
  'G2',
  'F2',
  'G2',
  ['Ab2', 'G2'],
  [null, 'F2'],
  null,
  null,
  null,
  null,
];

// DOM ready
// document.addEventListener('DOMContentLoaded', function (event) {
// const root = document.documentElement;
let vol = new Tone.Volume(1);
/*
 * Tone Transport
 * set the beats per minute, volume, swing feel etc...
 */
Tone.Transport.bpm.value = bpm;
Tone.Transport.swingSubdivision = '16n';
Tone.Transport.loopStart = 0;
/*
 * Effects
 */
const reverb1 = new Tone.Freeverb(0.3, 10000).toDestination();
const reverb2 = new Tone.Freeverb(0.4, 10000).toDestination();
const reverb3 = new Tone.Freeverb(0.8, 15000).toDestination();

/*
 * Delay
 */
const feedbackDelay = new Tone.PingPongDelay({
  delayTime: '16n',
  feedback: 0.3,
  wet: 0.5,
}).toDestination();

/*
 * Master FX
 */
//some overall compression to keep the levels in check
const masterCompressor = new Tone.Compressor({
  threshold: -20,
  ratio: 12,
  attack: 0,
  release: 1,
});

//give a little boost to the lows
const lowBump = new Tone.Filter({
  type: 'lowshelf',
  frequency: 90,
  Q: 1,
  gain: 12,
});

// Route everything through the filter & compressor before playing
Tone.Destination.chain(lowBump, masterCompressor);

const bassSynth = new Tone.MonoSynth({
  oscillator: {
    type: 'fmsquare5',
    modulationType: 'triangle',
    modulationIndex: 2,
    harmonicity: 0.501,
  },
  filter: {
    Q: 1,
    type: 'lowpass',
    rolloff: -24,
  },
  envelope: {
    attack: 0.01,
    decay: 0.1,
    sustain: 0.4,
    release: 2,
  },
  filterEnvelope: {
    attack: 0.01,
    decay: 0.3,
    sustain: 0.8,
    release: 1.5,
    baseFrequency: 90,
    octaves: 8,
  },
}).chain(vol, Tone.Destination);

/*
 * Drums
 */
const drums505 = new Tone.Sampler(
  {
    D4: 'snare.[mp3|ogg]',
    C3: 'kick.[mp3|ogg]',
    G3: 'hh.[mp3|ogg]',
    A3: 'hho.[mp3|ogg]',
  },
  {
    volume: 1,
    release: 1,
    baseUrl: 'https://assets.codepen.io/91506/',
  }
).chain(vol, Tone.Destination);

// Bass Sequence
const bassPart = new Tone.Sequence(
  function (time, note) {
    bassSynth.triggerAttackRelease(note, '10hz', time);

    // root.style.setProperty('--bass-scale', '1.2');
    // root.style.setProperty('--bass-color', 'firebrick');

    // setTimeout(() => {
    //   root.style.setProperty('--bass-scale', '1');
    //   root.style.setProperty('--bass-color', 'coral');
    // }, 100);
  },
  bassPattern,
  '16n'
);

// High-hat Sequence
const highHatPart = new Tone.Sequence(
  function (time, note) {
    drums505.triggerAttackRelease(note, '4n', time);

    // root.style.setProperty('--hh-scale', '1.1');
    // root.style.setProperty('--hh-color', 'goldenrod');

    // setTimeout(() => {
    //   root.style.setProperty('--hh-scale', '1');
    //   root.style.setProperty('--hh-color', 'gold');
    // }, 100);
  },
  highHatNotes,
  '16n'
);

// Snare Sequence
const snarePart = new Tone.Sequence(
  function (time, note) {
    drums505.triggerAttackRelease('D4', '4n', time);

    // root.style.setProperty('--snare-scale', '1.6');
    // root.style.setProperty('--snare-color', 'white');

    // setTimeout(() => {
    //   root.style.setProperty('--snare-scale', '1');
    //   root.style.setProperty('--snare-color', 'whitesmoke');
    // }, 100);
  },
  snarePattern,
  '8n'
);

// Kick Sequence
const kickPart = new Tone.Sequence(
  function (time, note) {
    drums505.triggerAttackRelease('C3', '4n', time);

    // root.style.setProperty('--kick-scale', '1.2');
    // root.style.setProperty('--kick-color', 'cornflowerblue');

    // setTimeout(() => {
    //   root.style.setProperty('--kick-scale', '1');
    //   root.style.setProperty('--kick-color', 'skyblue');
    // }, 100);
  },
  kickNotes,
  '16n'
);

export function playSong() {
  isPlaying = true;
  bassPart.start('0');
  // bassPart.start("0:8");
  snarePart.start('0');
  kickPart.start('0');
  highHatPart.start('0');
  Tone.start();
  Tone.Transport.start();
}

function stopSong() {
  isPlaying = false;
  console.log('stop');
  Tone.Transport.stop();
}

// root.addEventListener('click', () => {
//   !isPlaying ? playSong() : stopSong();
// });
