import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBecarioComponent } from './add-becario.component';

describe('AddBecarioComponent', () => {
  let component: AddBecarioComponent;
  let fixture: ComponentFixture<AddBecarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBecarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBecarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
