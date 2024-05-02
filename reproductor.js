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
    
        play(index) {
            if (index >= 0 && index < this.canciones.length) {
                this.ahoraSuena = index;
                const cancionActual = this.canciones[this.ahoraSuena];
                console.log("Reproduciendo: " + cancionActual.nombre);
                this.showSongInSite();
                audioPlayer.src = cancionActual.archivo;
                audioPlayer.play(); 
            } else {
                console.log("Índice de canción fuera de rango.");
            }
        }
    
        play(songName) {
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
            this.ahoraSuena = this.canciones.findIndex(cancion => cancion.nombre === song);
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
              <audio controls src="${cancionActual.archivo}"></audio>
            `;
          } else {
            songInfo.innerHTML = ""; 
          }
        }
      }
      const canciones = [
      {
            nombre: "Lo Nuevo",
            album: "Lo Nuevo",
            artista: "Mariana Rodríguez",
            duracion: "1:18",
            imagen: "https://pbs.twimg.com/media/F_YuaCPX0AAmI7E.jpg:large",
            archivo: "Musica/Lo Nuevo.mp3"
        },
        {
            nombre: "Presidente Máynez",
            album: "Presidente Máynez",
            artista: "Yuawi",
            duracion: "1:02",
            imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/57/0e/4a/570e4aa7-d95c-ad17-f063-fd57c753a391/198500311518.jpg/1200x1200bb.jpg",
            archivo: "Musica/Presidente Máynez.mp3"
        },
        {
            nombre: "No Olvidamos",
            album: "No Olvidamos",
            artista: "Molotov",
            duracion: "4:39",
            imagen: "https://indierocks.sfo3.digitaloceanspaces.com/wp-content/uploads/2022/04/Molotov_No-olvidamos_cover.jpg",
            archivo: "Musica/No Olvidamos.mp3"
        },
        {
            nombre: "PERREANDO MACHIN",
            album: "PERREANDO MACHIN",
            artista: "DANI FLOW, ALU MIX",
            duracion: "2:30",
            imagen: "https://images.app.goo.gl/ewZCNkyAR5Tw5Szo9https://images.genius.com/730f5649dce030889c17b2d0876776e5.1000x1000x1.png",
            archivo: "Musica/PERREANDO MACHIN.mp3"
        },
        {
            nombre: "Shorty Party",
            album: "Shorty Party",
            artista: "Cartel de Santa, La Kelly",
            duracion: "4:30",
            imagen: "httphttps://i1.sndcdn.com/artworks-kw0P0B2PHFEv-0-t1080x1080.jpgs://images.app.goo.gl/6StdN2uaxMbRdpUf6",
            archivo: "Musica/Shorty Party.mp3"
        },
      ];

      const reproductor = new Reproductor(canciones);

    const songsListContainer = document.getElementById("songs-list");
    songsListContainer.innerHTML = reproductor.songsList();
    reproductor.showSongInSite();