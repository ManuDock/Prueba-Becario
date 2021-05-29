import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecarioListComponent } from './becario-list.component';

describe('BecarioListComponent', () => {
  let component: BecarioListComponent;
  let fixture: ComponentFixture<BecarioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BecarioListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BecarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
