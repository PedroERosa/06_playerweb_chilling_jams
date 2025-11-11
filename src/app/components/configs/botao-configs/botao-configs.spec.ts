import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoConfigs } from './botao-configs';

describe('BotaoConfigs', () => {
  let component: BotaoConfigs;
  let fixture: ComponentFixture<BotaoConfigs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoConfigs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoConfigs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
