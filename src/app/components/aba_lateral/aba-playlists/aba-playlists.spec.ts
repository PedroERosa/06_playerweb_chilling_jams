import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaPlaylists } from './aba-playlists';

describe('AbaPlaylists', () => {
  let component: AbaPlaylists;
  let fixture: ComponentFixture<AbaPlaylists>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbaPlaylists]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbaPlaylists);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
