import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-filtro',
  imports: [],
  templateUrl: './botao-filtro.html',
  styleUrl: './botao-filtro.css'
})
export class BotaoFiltro {
  @Input() estaAtivoFlag: boolean = false;

  estaAtivo(): boolean {
    return this.estaAtivoFlag;
  }
}
