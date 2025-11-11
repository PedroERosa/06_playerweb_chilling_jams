import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleVolume } from './controle-volume';

describe('ControleVolume', () => {
  let component: ControleVolume;
  let fixture: ComponentFixture<ControleVolume>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControleVolume]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControleVolume);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
