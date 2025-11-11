import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerLinhaDoTempo } from './player-linha-do-tempo';

describe('PlayerLinhaDoTempo', () => {
  let component: PlayerLinhaDoTempo;
  let fixture: ComponentFixture<PlayerLinhaDoTempo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerLinhaDoTempo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerLinhaDoTempo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
