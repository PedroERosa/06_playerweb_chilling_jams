import { Component, output, Input } from '@angular/core';
import { BotaoFechar } from '../../botao-fechar/botao-fechar';
import { BotaoConfigs } from '../botao-configs/botao-configs';

@Component({
  selector: 'app-configs-base',
  imports: [BotaoConfigs,
            BotaoFechar
            ],
  templateUrl: './configs-base.html',
  styleUrl: './configs-base.css'
})
export class ConfigsBase {
  fecharConfigs = output<void>();

  botaoFecharConfigs():void {
    this.fecharConfigs.emit();
  }

  @Input() estaEscuroFlag: boolean = true;

  estaEscuro(): boolean {
    return this.estaEscuroFlag;
  }

  validarAtivo(x:boolean, y: boolean):boolean {
    if (x == y) {
      return true;
    } else return false;
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

