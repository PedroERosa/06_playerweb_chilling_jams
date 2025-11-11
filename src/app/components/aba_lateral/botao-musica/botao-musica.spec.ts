import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoMusica } from './botao-musica';

describe('BotaoMusica', () => {
  let component: BotaoMusica;
  let fixture: ComponentFixture<BotaoMusica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoMusica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoMusica);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
