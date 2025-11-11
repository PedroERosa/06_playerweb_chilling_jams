import { Component, Input, output } from '@angular/core';

@Component({
  selector: 'app-player-linha-do-tempo',
  imports: [],
  templateUrl: './player-linha-do-tempo.html',
  styleUrl: './player-linha-do-tempo.css'
})
export class PlayerLinhaDoTempo {
  @Input() porcentagem: number = 0;
  
  @Input() tempoMusicaPassado: number = 0;
  
  @Input() tempoMusicaTotal: number = 0;

  controlarTempo = output<number>();

  botaoControlarTempo(tempo: number):void {
    this.controlarTempo.emit(tempo);
  }
}
