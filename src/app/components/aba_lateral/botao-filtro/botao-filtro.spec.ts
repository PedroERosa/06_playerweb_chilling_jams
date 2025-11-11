import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoFiltro } from './botao-filtro';

describe('BotaoFiltro', () => {
  let component: BotaoFiltro;
  let fixture: ComponentFixture<BotaoFiltro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoFiltro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoFiltro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
