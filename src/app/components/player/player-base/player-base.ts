import { Component, output, Input } from '@angular/core';
import { PlayerBotao } from '../player-botao/player-botao';
import { PlayerBotaoMenor } from '../player-botao-menor/player-botao-menor';
import { PlayerLinhaDoTempo } from '../player-linha-do-tempo/player-linha-do-tempo';
import { ControleVolume } from '../controle-volume/controle-volume';

@Component({
  selector: 'app-player-base',
  imports: [PlayerBotao,
            PlayerBotaoMenor,
            PlayerLinhaDoTempo,
            ControleVolume
  ],
  templateUrl: './player-base.html',
  styleUrl: './player-base.css'
})
export class PlayerBase {

  @Input() estaAleatorioFlag: boolean = false;

  estaAlterandoVolumeFlag: boolean = false;

  @Input() estaTocandoFlag: boolean = false;

  @Input() capaSrc: string = '';

  @Input() tempoMusicaPassado: number = 0;

  @Input() tempoMusicaTotal: number = 0;

  @Input() volume: number = 100;

  flagTeste: boolean = true;

  tocar = output<void>();

  pausar = output<void>();

  avancar = output<void>();

  retroceder = output<void>();

  alternarAleatorio = output<void>();

  controlarVolume = output<number>();

  controlarTempo = output<number>();

  botaoTocarPausar():void {
    if (this.estaTocandoFlag) {
      this.pausar.emit();
    } else if (this.estaTocandoFlag == false) {
      this.tocar.emit();
    }
  }

  botaoAvancar():void {
    this.avancar.emit();
  }

  botaoRetroceder():void {
    this.retroceder.emit();
  }

  botaoAlternarAleatorio():void {
    this.alternarAleatorio.emit();
  }

  sliderControlarVolume(volume: number):void {
    this.controlarVolume.emit(volume);
  }
  
  botaoControlarTempo(tempo: number):void {
    this.controlarTempo.emit(tempo);
  }

  converterParaMinutosSegundos(segundos: number):string {
    var formatoData = new Date(0,0,0,0,0,segundos);
    var tempoConvertido: string = formatoData.getMinutes() + ':' + (formatoData.getSeconds() < 10 ? '0' : '') + formatoData.getSeconds();
    return tempoConvertido;
  }

  converterPorcentagem(X:number, x:number): number {
    let porcentagem = x/X*100;
    if (porcentagem > 100) porcentagem = 100;
    if (porcentagem < 0) porcentagem = 0;
    return porcentagem;
  }

  botaoControlarVolume() {
    if (this.estaAlterandoVolumeFlag) {
      this.estaAlterandoVolumeFlag = false;
    } else if (!this.estaAlterandoVolumeFlag) {
      this.estaAlterandoVolumeFlag = true;
    }
  }
}
