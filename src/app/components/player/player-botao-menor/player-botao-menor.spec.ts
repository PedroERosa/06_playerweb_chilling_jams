import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerBotaoMenor } from './player-botao-menor';

describe('PlayerBotaoMenor', () => {
  let component: PlayerBotaoMenor;
  let fixture: ComponentFixture<PlayerBotaoMenor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerBotaoMenor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerBotaoMenor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
