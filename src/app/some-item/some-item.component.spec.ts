import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeItemComponent } from './some-item.component';

describe('SomeItemComponent', () => {
  let component: SomeItemComponent;
  let fixture: ComponentFixture<SomeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
