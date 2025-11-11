import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerBase } from './player-base';

describe('PlayerBase', () => {
  let component: PlayerBase;
  let fixture: ComponentFixture<PlayerBase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerBase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerBase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
