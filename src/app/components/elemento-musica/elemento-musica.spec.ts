import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoMusica } from './elemento-musica';

describe('ElementoMusica', () => {
  let component: ElementoMusica;
  let fixture: ComponentFixture<ElementoMusica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementoMusica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementoMusica);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
