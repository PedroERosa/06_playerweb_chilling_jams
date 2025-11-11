import { Component, Input, output } from '@angular/core';
import { BotaoFlutuante } from '../botao-flutuante/botao-flutuante';
import { ConfigsBase } from '../configs/configs-base/configs-base';

@Component({
  selector: 'app-elementos-inferiores',
  imports: [BotaoFlutuante,
            ConfigsBase

  ],
  templateUrl: './elementos-inferiores.html',
  styleUrl: './elementos-inferiores.css'
})
export class ElementosInferiores {

  configsEstaAbertoFlag: boolean = false;

  alternarConfiguracoes(): void {
    console.log("Configurações alternada");
    this.configsEstaAbertoFlag = !this.configsEstaAbertoFlag;
  }

  fecharConfiguracoes(): void {
    console.log("Configurações fechada");
    this.configsEstaAbertoFlag = false;
  }

  configsEstaAberta(): boolean {
    return this.configsEstaAbertoFlag;
  }

  @Input() estaEscuroFlag: boolean = true;

  estaEscuro(): boolean {
    return this.estaEscuroFlag;
  }

  modoEscuro = output<void>();

  botaoModoEscuro():void {
    this.modoEscuro.emit();
  }

  modoClaro = output<void>();

  botaoModoClaro():void {
    this.modoClaro.emit();
  }
}
