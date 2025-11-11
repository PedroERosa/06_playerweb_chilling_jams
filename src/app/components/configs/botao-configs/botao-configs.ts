import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-configs',
  imports: [],
  templateUrl: './botao-configs.html',
  styleUrl: './botao-configs.css'
})
export class BotaoConfigs {
  @Input() estaAtivoFlag: boolean = false;

  estaAtivo(): boolean {
    return this.estaAtivoFlag;
  }
}
