import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCrimesComponent } from './list-crimes.component';

describe('ListCrimesComponent', () => {
  let component: ListCrimesComponent;
  let fixture: ComponentFixture<ListCrimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCrimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCrimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
