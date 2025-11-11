import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigsBase } from './configs-base';

describe('ConfigsBase', () => {
  let component: ConfigsBase;
  let fixture: ComponentFixture<ConfigsBase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigsBase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigsBase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
