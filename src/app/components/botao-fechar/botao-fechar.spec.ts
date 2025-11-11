import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoFechar } from './botao-fechar';

describe('BotaoFechar', () => {
  let component: BotaoFechar;
  let fixture: ComponentFixture<BotaoFechar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoFechar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoFechar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
