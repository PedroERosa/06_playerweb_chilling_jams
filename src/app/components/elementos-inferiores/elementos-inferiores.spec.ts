import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementosInferiores } from './elementos-inferiores';

describe('ElementosInferiores', () => {
  let component: ElementosInferiores;
  let fixture: ComponentFixture<ElementosInferiores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementosInferiores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementosInferiores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
