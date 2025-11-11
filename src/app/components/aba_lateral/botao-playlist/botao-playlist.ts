import { Component, Input, output } from '@angular/core';

@Component({
  selector: 'app-botao-playlist',
  imports: [],
  templateUrl: './botao-playlist.html',
  styleUrl: './botao-playlist.css'
})
export class BotaoPlaylist {
  @Input() estaAtivoFlag: boolean = false;

  estaAtivo(): boolean {
    return this.estaAtivoFlag;
  }

  @Input() estaFavoritadoFlag: boolean = false;

  estaFavoritado(): boolean {
    return this.estaFavoritadoFlag;
  }

  favoritar = output<void>();

  botaoFavoritar(event: MouseEvent):void {
    event.stopPropagation(); 
    this.favoritar.emit();
  }

  atualizarPlaylist = output<void>();

  botaoAtualizarPlaylist():void {
    this.atualizarPlaylist.emit();
  }
}
