const audioPlayer = document.getElementById("audioPlayer");

function reproducirCancion(src) {
  audioPlayer.src = src;
  audioPlayer.play();
}

function pausarCancion() {
  audioPlayer.pause();
}

function detenerCancion() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
}

    class Reproductor {
    constructor(canciones) {
      this.canciones = canciones;
      this.enReproduccion = false;
      this.ahoraSuena = -1;
    }

    play(songName) {
        // Buscar el índice de la canción por su nombre
        const index = this.canciones.findIndex(cancion => cancion.nombre === songName);
        
        if (index !== -1) {
            this.ahoraSuena = index;
            console.log("Reproduciendo: " + this.canciones[this.ahoraSuena].nombre);
            this.showSongInSite();
        } else {
            console.log("La canción seleccionada no está en la lista.");
        }
    }
  
    playPause() {
      this.enReproduccion = !this.enReproduccion;
      if (this.enReproduccion) {
        console.log("Ahora suena: " + this.canciones[this.ahoraSuena].nombreCancion);
      } else {
        console.log("Haz pausado la reproducción");
      }
      this.showSongInSite();
    }
  
    shuffle() {
      this.ahoraSuena = Math.floor(Math.random() * this.canciones.length);
      this.showSongInSite();
    }
  
    next() {
      if (this.ahoraSuena < this.canciones.length - 1) {
        this.ahoraSuena++;
      }
      this.showSongInSite();
    }
  
    prev() {
      if (this.ahoraSuena > 0) {
        this.ahoraSuena--;
      }
      this.showSongInSite();
    }
  
    stop() {
      console.log("Haz detenido la reproducción");
      this.ahoraSuena = -1;
      this.showSongInSite();
    }
  
    play(song) {
      if (typeof song === "number") {
        this.ahoraSuena = song;
      } else {
        // Buscar el número de la canción por su nombre
        this.ahoraSuena = this.canciones.findIndex(cancion => cancion.nombreCancion === song);
      }
      this.showSongInSite();
    }
  
    songsList() {
      let html = "<ul>";
      this.canciones.forEach((cancion, index) => {
        html += `<li><a href="#" onclick="reproductor.play(${index})">${cancion.nombre}</a></li>`;
      });
      html += "</ul>";
      return html;
    }
  
    showSongInSite() {
      const songInfo = document.getElementById("song-info");
      if (this.ahoraSuena !== -1) {
        const cancionActual = this.canciones[this.ahoraSuena];
        songInfo.innerHTML = `
          <img src="${cancionActual.imagen}" alt="${cancionActual.album}">
          <h2>${cancionActual.nombre}</h2>
          <p>Álbum: ${cancionActual.album}</p>
          <p>Artista: ${cancionActual.artista}</p>
          <p>Duración: ${cancionActual.duracion}</p>
        `;
      } else {
        songInfo.innerHTML = ""; // No hay canción seleccionada
      }
    }
  }
  
  // Crear una instancia de Reproductor con el arreglo de canciones
  const canciones = [
        {
            nombre: "Lo Nuevo",
            album: "Lo Nuevo",
            artista: "Mariana Rodríguez",
            duracion: "1:18",
            imagen: "https://pbs.twimg.com/media/F_YuaCPX0AAmI7E.jpg:large",
            archivo: "audio/Lo Nuevo.mp3"
        },
        {
            nombre: "Presidente Máynez",
            album: "Presidente Máynez",
            artista: "Yuawi",
            duracion: "1:02",
            imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/57/0e/4a/570e4aa7-d95c-ad17-f063-fd57c753a391/198500311518.jpg/1200x1200bb.jpg",
            archivo: "audio/Presidente Máynez.mp3"
        },
        {
            nombre: "No Olvidamos",
            album: "No Olvidamos",
            artista: "Molotov",
            duracion: "4:39",
            imagen: "https://indierocks.sfo3.digitaloceanspaces.com/wp-content/uploads/2022/04/Molotov_No-olvidamos_cover.jpg",
            archivo: "audio/No Olvidamos.mp3"
        },
        {
            nombre: "PERREANDO MACHIN",
            album: "PERREANDO MACHIN",
            artista: "DANI FLOW, ALU MIX",
            duracion: "2:30",
            imagen: "https://images.app.goo.gl/ewZCNkyAR5Tw5Szo9https://images.genius.com/730f5649dce030889c17b2d0876776e5.1000x1000x1.png",
            archivo: "audio/PERREANDO MACHIN.mp3"
        },
        {
            nombre: "Shorty Party",
            album: "Shorty Party",
            artista: "Cartel de Santa, La Kelly",
            duracion: "4:30",
            imagen: "httphttps://i1.sndcdn.com/artworks-kw0P0B2PHFEv-0-t1080x1080.jpgs://images.app.goo.gl/6StdN2uaxMbRdpUf6",
            archivo: "audio/Shorty Party.mp3"
        },
      ];
    
      const reproductor = new Reproductor(canciones);    