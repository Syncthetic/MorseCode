# MorseCode
MorseCode is a JavaScript Library to handle the encoding and decoding process of morse code messages.

- Create an object to handle the encode/decode functions:
  - `m = Object.create(MorseCode);`
  
- Encoding text into morse code:
  - Syntax: `obj.encode('plain text')` or `obj.morse('plain text')`
    - `m.encode('test message');`
    - `m.morse('test message');`
    
- Decoding the morse code into plain text:
  - Syntax: `obj.decode('morse code')` or `obj.morse('morse code', true)`
    - `m.decode('.- -... -.-.');`
    - `m.morse('.- -... -.-.', true);`
    
- Testing the MorseCode Object
  - `MorseCode.test();`

- An object is not required to call functions
  - `MorseCode.encode('some string');`
  - `MorseCode.decode('.- -... -.-.');`
  
  ### TO DO
  - Add the audio functionality to encoded messages
