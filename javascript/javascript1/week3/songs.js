document.addEventListener('DOMContentLoaded', function(){

    let songDatabase = [{
        songId: 1,
        title: 'My baby',
        artist: 'Soggy socks',
      },
      {
        songId: 2,
        title: '3 nails in wood',
        artist: 'The carpenters',
      },
      {
        songId: 3,
        title: 'Blacker than black',
        artist: 'Instant coffee',
      },
      {
        songId: 4,
        title: 'When is enough too little?',
        artist: 'The spies girls',
      },
    ];
    
    let myPlaylist = [];

    for (key in songDatabase) {
        if (songDatabase.hasOwnProperty(key)) {
            myPlaylist.push(songDatabase)
          console.log(myPlaylist)
        }
    }
        




})