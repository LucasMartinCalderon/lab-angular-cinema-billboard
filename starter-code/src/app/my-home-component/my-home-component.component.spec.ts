import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHomeComponentComponent } from './my-home-component.component';

describe('MyHomeComponentComponent', () => {
  let component: MyHomeComponentComponent;
  let fixture: ComponentFixture<MyHomeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHomeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
