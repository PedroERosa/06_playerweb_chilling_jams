import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoFlutuante } from './botao-flutuante';

describe('BotaoFlutuante', () => {
  let component: BotaoFlutuante;
  let fixture: ComponentFixture<BotaoFlutuante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoFlutuante]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoFlutuante);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
