import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosVileComponent } from './infos-vile.component';

describe('InfosVileComponent', () => {
  let component: InfosVileComponent;
  let fixture: ComponentFixture<InfosVileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosVileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosVileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
