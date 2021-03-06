import { v4 as uuidv4 } from 'uuid';
function chillHop() {
  return [
    {
      name: 'Beaver Creek',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg',
      artist: 'Aso, Middle School, Aviino',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10075',
      color: ['#205950', '#2ab3bf'],
      id: uuidv4(),
      active: true,
    },
    {
      name: 'Daylight',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg',
      artist: 'Aiguille',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9272',
      color: ['#EF8EA9', '#ab417f'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Keep Going',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg',
      artist: 'Swørn',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9222',
      color: ['#CD607D', '#c94043'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Nightfall',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg',
      artist: 'Aiguille',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9148',
      color: ['#EF8EA9', '#ab417f'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Reflection',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg',
      artist: 'Swørn',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9228',
      color: ['#CD607D', '#c94043'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Under the City Stars',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg',
      artist: 'Aso, Middle School, Aviino',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10074',
      color: ['#205950', '#2ab3bf'],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
    {
      name: 'Jazz Cabbage',
      artist: 'Ian Ewing, Strehlow',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg',
      id: uuidv4(),
      active: false,
      color: ['#BA4A46', '#FDF0DD'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9363',
    },
    {
      name: 'Lagoons',
      artist: 'Strehlow, Chris Mazuera',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg',
      id: uuidv4(),
      active: false,
      color: ['#BA4A46', '#FDF0DD'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=8266',
    },

    {
      name: 'Control',
      artist: 'Hasley',
      cover: 'https://i.ytimg.com/vi/BPbVGBJy-X8/maxresdefault.jpg',
      id: uuidv4(),
      active: false,
      color: ['#F0F0F0', '#980517'],
      audio:
        'https://dexo.mp3snow.com/5da0d20f5c326a7d14954/HALSEY%20Control%20.mp3',
    },

    {
      name: 'Long Shot',
      artist: 'Mayu Maeshima',
      cover:
        'https://www.monstersandcritics.com/wp-content/uploads/2020/07/Re-Zero-Rem-wake-up-death.jpg',
      id: uuidv4(),
      active: false,
      color: ['#F0F0F0', '#5E67A3'],
      audio: 'music/LongShot.mp3',
    },
  ];
}

export default chillHop;
