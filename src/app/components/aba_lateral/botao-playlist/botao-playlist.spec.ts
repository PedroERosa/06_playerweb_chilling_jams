import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoPlaylist } from './botao-playlist';

describe('BotaoPlaylist', () => {
  let component: BotaoPlaylist;
  let fixture: ComponentFixture<BotaoPlaylist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoPlaylist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoPlaylist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
