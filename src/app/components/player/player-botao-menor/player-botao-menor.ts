import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-botao-menor',
  imports: [],
  templateUrl: './player-botao-menor.html',
  styleUrl: './player-botao-menor.css'
})
export class PlayerBotaoMenor {
  @Input() estaAtivoFlag: boolean = false;

  estaAtivo(): boolean {
    return this.estaAtivoFlag;
  }
}
