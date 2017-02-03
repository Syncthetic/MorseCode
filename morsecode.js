
/*
  // Create an Object to encode/decode morse code with
    m = Object.create(MorseCode);

  // Encoding text into morse code
    m.encode('test message') or m.morse('test message')

  // Decoding the morse code into plain text
    m.decode('.- -... -.-.') or m.morse('.- -... -.-.', true)

  // Without creating an object, just call it straight from the Object
    MorseCode.encode('test message');
    MorseCode.decode('.- -... -.-.');

  // Run a test to make sure the functions are working correctly
    MorseCode.test();
*/

const MorseCode = {

  encode: (data) => {
    return MorseCode.morse.call(this, data);
  },

  decode: (data) => {
    return MorseCode.morse.call(this, data, true);
  },

  morse: (data, decode=false) => {

    this.map = {
        a: '.-',      b: '-...',    c: '-.-.',    d: '-..',
        e: '.',       f: '..-.',    g: '--.',     h: '....',
        i: '..',      j: '.---',    k: '-.-',     l: '.-..',
        m: '--',      n: '-.',      o: '---',     p: '.--.',
        q: '--.-',    r: '.-.',     s: '...',     t: '-',
        u: '..-',     v: '...-',    w: '.--',     x: '-..-',
        y: '-.--',    z: '--..',    1: '.----',   2: '..---',
        3: '...--',   4: '....-',   5: '.....',   6: '-....',
        7: '--...',   8: '---..',   9: '----.',   0: '-----',

        '.': '.-.-.-',    ',': '--..--',    '?': '..--..',
        "'": '.----.',    '/': '-..-.',     '(': '-.--.',
        ')': '-.--.-',    '&': '.-...',     ':': '---...',
        ';': '-.-.-.',    '=': '-...-',     '+': '.-.-.',
        '-': '-....-',    '_': '..--.-',    '"': '.-..-.',
        '$': '...-..-',   '!': '-.-.--',    '@': '.--.-.',
        ' ': '/',
    };

    if(decode) {
      this.map = (
        () => {
          var tmp = {};
          var k;
          for(k in this.map) {
            if(!this.map.hasOwnProperty(k)) continue;
            tmp[this.map[k]] = k;
          }
          return tmp;
        }
      )();

      return data.split(' ').filter( (v) => {
        return this.map.hasOwnProperty(v.toLowerCase());
      }).map( (v) => {
        return this.map[v.toLowerCase()].toUpperCase();
      }).join('');

    } else {
      return data.split('').filter( (v) => {
        return this.map.hasOwnProperty(v.toLowerCase());
      }).map( (v) => {
        return this.map[v.toLowerCase()].toUpperCase();
      }).join(' ').replace(/,\/,/g, '/');
    }
  },

  test: () => {
    console.log('Testing the encoding function with string:');
    console.log('just a test');
    mc = MorseCode.encode.call(this, 'just a test');
    console.log('Encoding returned: ' + mc);
    console.log('Testing the decoding function with morse code string:');
    console.log(mc);
    pt = MorseCode.decode.call(this, mc);
    console.log('Decoding returned: ' + pt)

  }
};
