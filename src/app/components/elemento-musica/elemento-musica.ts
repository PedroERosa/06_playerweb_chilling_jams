import { Component, output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-elemento-musica',
  imports: [],
  templateUrl: './elemento-musica.html',
  styleUrl: './elemento-musica.css'
})
export class ElementoMusica {
  @ViewChild('musica') musica!: ElementRef<HTMLAudioElement>;

  //link placeholder inicial para evitar erros
  musicaSrc: string = '01/boy_pablo-Losing_You';

  tempoAtual = output<number>();

  tempoMax = output<number>();

  volume = output<number>();

  fim = output<void>();

  atualizarTempoAtual(tempo: number):void {
    this.tempoAtual.emit(tempo);
  }

  atualizarTempoMax(tempo: number):void {
    this.tempoMax.emit(tempo);
  }

  atualizarVolume(volume: number):void {
    this.volume.emit(volume);
  }

  eventoFim():void {
    this.fim.emit();
  }

  play() {
    this.musica.nativeElement.play();
  }

  pause() {
    this.musica.nativeElement.pause();
  }

  alterarMusica(src: string) {
    this.musica.nativeElement.pause();
    this.musica.nativeElement.src = '/songs/' + src + '.mp3';
    this.musica.nativeElement.load();
  }

  alterarTempoAtual(tempo: number) {
    this.musica.nativeElement.currentTime = tempo;
  }

  //Volume máximo = 100 || Volume mínimo = 0
  alterarVolume(volume: number) {
    this.musica.nativeElement.volume = ( volume / 100 );
  }
}
