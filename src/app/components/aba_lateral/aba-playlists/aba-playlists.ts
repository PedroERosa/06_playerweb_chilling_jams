import { Component } from '@angular/core';
import { BotaoFechar } from '../../botao-fechar/botao-fechar';
import { BotaoFlutuante } from '../../botao-flutuante/botao-flutuante';

@Component({
  selector: 'app-aba-playlists',
  imports: [BotaoFechar,
            BotaoFlutuante
  ],
  templateUrl: './aba-playlists.html',
  styleUrl: './aba-playlists.css'
})
export class AbaPlaylists {

  estaAbertoFlag: boolean = false;


  abrirAbaPlaylist(): void {
    console.log("Aba de playlists aberta");
    this.estaAbertoFlag = true;
  };

  fecharAbaPlaylist(): void {
    console.log("Aba de playlists fechada");
    this.estaAbertoFlag = false;
  };

  estaAberto(): boolean {
    return this.estaAbertoFlag;
  };

}
