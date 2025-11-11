import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-musica',
  imports: [],
  templateUrl: './botao-musica.html',
  styleUrl: './botao-musica.css'
})
export class BotaoMusica {
  @Input() estaAtivoFlag: boolean = false;

  estaAtivo(): boolean {
    return this.estaAtivoFlag;
  }
}
