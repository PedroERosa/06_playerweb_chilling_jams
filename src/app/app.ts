import { Component, signal, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotaoFiltro } from './components/aba_lateral/botao-filtro/botao-filtro';
import { BotaoPlaylist } from './components/aba_lateral/botao-playlist/botao-playlist';
import { AbaPlaylists } from './components/aba_lateral/aba-playlists/aba-playlists';
import { BotaoMusica } from './components/aba_lateral/botao-musica/botao-musica';
import { PlayerBase } from './components/player/player-base/player-base';
import { ElementosInferiores } from './components/elementos-inferiores/elementos-inferiores';
import { ElementoMusica } from './components/elemento-musica/elemento-musica';

import playlists from './playlists.json'


interface Musica {
  id: number
  titulo: string
  artista: string
  src: string
}

interface Playlist {
  id: number
  nome: string
  tags: string[]
  capa: string
  musicas: Musica[]
}

interface Estado {
  estaTocando: boolean,
    playlistIndex: number,
    musicaIndex: number,
    volume: number,
    tempoMusicaPassado: number,
    tempoMusicaTotal: number,
    estaAleatorizado: boolean,
    ordemDeMusicas: number[],
    estaModoEscuro: boolean,
    filtrosTodos: string[],
    filtroSelecionado: string,
    favoritos: number[]
}


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    BotaoFiltro,
    BotaoPlaylist,
    AbaPlaylists,
    BotaoMusica,
    PlayerBase,
    ElementosInferiores,
    ElementoMusica],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit, AfterViewInit {

  protected readonly title = signal('06_playerweb_chilling_jams');

  listaDePlaylists: Playlist[] = playlists.playlists;

  estadoAtual: Estado = {
    estaTocando: false,
    playlistIndex: 0,
    musicaIndex: 0,
    volume: 100,
    tempoMusicaPassado: 0,
    tempoMusicaTotal: 0,
    estaAleatorizado: false,
    ordemDeMusicas: [0, 1, 2, 3, 4, 5, 6, 7],
    estaModoEscuro: true,
    filtrosTodos: [""], //Todos os filtros possíveis
    filtroSelecionado: "", //Filtro selecionado
    favoritos: []
  }

  //Funções necessárias ao iniciar a aplicação
  ngOnInit(): void {
    this.definirFiltros();
  }

  ngAfterViewInit(): void {
    this.elementoMusica.alterarMusica(this.listaDePlaylists[this.estadoAtual.playlistIndex].musicas[this.estadoAtual.musicaIndex].src);
  }

  @ViewChild(ElementoMusica) elementoMusica!: ElementoMusica;

  tocarMusica():void {
    //console.log('Musica iniciada');
    this.elementoMusica.play();
    this.estadoAtual.estaTocando = true;
  }

  pausarMusica():void {
    //console.log('Musica pausada');
    this.elementoMusica.pause();
    this.estadoAtual.estaTocando = false;
  }

  alterarTempoMusica(tempo: number) {
    this.elementoMusica.alterarTempoAtual(tempo);
  }

  definirTempoMusicaPassado(tempo: number) {
    if (tempo > this.estadoAtual.tempoMusicaTotal) tempo = this.estadoAtual.tempoMusicaTotal;
    this.estadoAtual.tempoMusicaPassado = tempo;
  }

  definirTempoMusicaTotal(tempo: number) {
    this.estadoAtual.tempoMusicaTotal = tempo;
  }

  alterarVolume(volume: number): void {
    this.elementoMusica.alterarVolume(volume);
  }

  definirVolume(volume: number) {
    this.estadoAtual.volume = volume;
  }

  atualizarPlaylist(index: number): void {
    // atualiza index de playlist no estado atual
    this.estadoAtual.playlistIndex = index;
    console.log('Playlist ' + index + ' atualizada');
    this.atualizarMusica(0);
  }

  atualizarMusica(index: number) {
    // atualiza index de musica no estado atual
    this.estadoAtual.musicaIndex = index;
    this.elementoMusica.alterarMusica(this.listaDePlaylists[this.estadoAtual.playlistIndex].musicas[this.estadoAtual.musicaIndex].src);
    this.tocarMusica();
    console.log('Musica ' + (index +1) + ' atualizada');
  }

  avancarMusica():void {
    // encontra a musica atual e avança uma na array ordemDeMusicas
    const ordem = this.estadoAtual.ordemDeMusicas;
    for (let i = 0; i < ordem.length; i++) {
      if (this.estadoAtual.musicaIndex == ordem[i]) {
        if (i < (ordem.length - 1)) {
          this.atualizarMusica(ordem[i + 1]);
        } else {
          this.atualizarMusica(ordem[0]);
        };
        i = ordem.length;
      }
    }
    console.log('Musica avançada');
    console.log(this.estadoAtual.musicaIndex);
  }

  retrocederMusica():void {
    // encontra a musica atual e retrocede uma na array ordemDeMusicas
    const ordem = this.estadoAtual.ordemDeMusicas;
    for (let i = 0; i < ordem.length; i++) {
      if (this.estadoAtual.musicaIndex == ordem[i]) {
        if (i > 0) {
          this.atualizarMusica(ordem[i - 1]);
        } else {
          this.atualizarMusica(ordem[ordem.length - 1]);
        };
        i = ordem.length;
      }
    }
    console.log('Musica retrocedida');
    console.log(this.estadoAtual.musicaIndex);
  }

  alternarAleatoriedadeMusicas(): void {

    const length = this.estadoAtual.ordemDeMusicas.length;

    if (this.estadoAtual.estaAleatorizado) {

      // lógica de remover aleatoriedade da array de ordem de músicas
      for (let i = 0 ; i < length ; i++) {
        this.estadoAtual.ordemDeMusicas[i] = i;
      }

      console.log('Musicas na ordem padrão');
      this.estadoAtual.estaAleatorizado = false;

    } else if (this.estadoAtual.estaAleatorizado == false) {

      // lógica de aleatorizar array de ordem de músicas
      for (let i = length - 1 ; i > 0 ; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.estadoAtual.ordemDeMusicas[i], this.estadoAtual.ordemDeMusicas[j]] = [this.estadoAtual.ordemDeMusicas[j], this.estadoAtual.ordemDeMusicas[i]];
      }
    
      console.log('Musicas aleatorizadas');
      this.estadoAtual.estaAleatorizado = true;

    }

    console.log(this.estadoAtual.ordemDeMusicas);

  }

  // compara dois indices e valida se são iguais
  validarAtivo(x: any, y: any): boolean {
    return JSON.stringify(x) === JSON.stringify(y);
  }

  // varre a lista de playlists e lista todas as tags presentes para filtrar (juntamente dos favoritos)
  definirFiltros() {
    let filtros: string[][] = [];
    for (let i = 0; i < this.listaDePlaylists.length; i++) {
      filtros.push(this.listaDePlaylists[i].tags);
    }


    this.estadoAtual.filtrosTodos = [...new Set(filtros.flat())]
    console.log(this.estadoAtual.filtrosTodos);
  }

  // adiciona ou remove tag do filtro
  filtrar(tag: string): void {
    if (this.estadoAtual.filtroSelecionado == tag) {
      this.estadoAtual.filtroSelecionado = "";
    } else {
      this.estadoAtual.filtroSelecionado = tag;
    }
    //console.log(this.estadoAtual.filtroSelecionado);
  }

  // valida se uma tag específica está sendo filtrada
  tagEstaFiltrada(tag: string): boolean {
    if (this.estadoAtual.filtroSelecionado == tag) {
      return true;
    } else {
      return false;
    }
  }

  // valida se a playlist está sendo filtrada (true = oculta)
  playlistEstaFiltrada(tags: string[], index: number): boolean {

    if (this.estadoAtual.filtroSelecionado == "favorito") {
      if (this.estadoAtual.favoritos.includes(index)) {
        return false;
      } else {
        return true;
      }
    } else {
      // checa se alguma tag da playlist é a tag filtrada
      for (const tag of tags) {
        if (this.estadoAtual.filtroSelecionado == tag || this.estadoAtual.filtroSelecionado == "") {
          return false;
        };
      };
      // caso nenhuma tag seja a filtrada, retorna falso (visível)
      return true;
    }
  }

  // adiciona ou remove elemento da array de favoritos
  favoritar(index: number): void {
    if (this.estadoAtual.favoritos.includes(index)) {
      this.estadoAtual.favoritos = this.estadoAtual.favoritos.filter(item => item !== index);
    } else {
      this.estadoAtual.favoritos.push(index);
    }
    console.log('favoritos ' + this.estadoAtual.favoritos);
  }

  // valida se a playlist está na lista de favoritos
  estaFavoritado(index: number): boolean {
    if (this.estadoAtual.favoritos.includes(index)) {
      return true;
    } else {
      return false;
    }
  }

  modoEscuro() {
    if (!this.estadoAtual.estaModoEscuro){
      this.estadoAtual.estaModoEscuro = true;
      document.body.classList.remove('modo-claro');
      console.log('modo escuro');
    }
  }

  modoClaro() {
    if (this.estadoAtual.estaModoEscuro){
      this.estadoAtual.estaModoEscuro = false;
      document.body.classList.add('modo-claro');
      console.log('modo claro');
    }
  }

  estaEscuro(): boolean {
    if (this.estadoAtual.estaModoEscuro) {
      return true;
    } else {
      return false;
    }
  }
}