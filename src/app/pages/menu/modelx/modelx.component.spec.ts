import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelxComponent } from './modelx.component';

describe('ModelxComponent', () => {
  let component: ModelxComponent;
  let fixture: ComponentFixture<ModelxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
