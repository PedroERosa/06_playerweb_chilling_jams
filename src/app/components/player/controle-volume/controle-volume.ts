import { Component, output, Input } from '@angular/core';

@Component({
  selector: 'app-controle-volume',
  imports: [],
  templateUrl: './controle-volume.html',
  styleUrl: './controle-volume.css'
})
export class ControleVolume {
  @Input() volume: number = 0;

  controlarVolume = output<number>();

  botaoControlarVolume(volume: number):void {
    this.controlarVolume.emit(volume);
  }
}
