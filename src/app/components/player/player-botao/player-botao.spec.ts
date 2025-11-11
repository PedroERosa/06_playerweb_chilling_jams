import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerBotao } from './player-botao';

describe('PlayerBotao', () => {
  let component: PlayerBotao;
  let fixture: ComponentFixture<PlayerBotao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerBotao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerBotao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
