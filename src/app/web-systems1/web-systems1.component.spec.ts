import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSystems1Component } from './web-systems1.component';

describe('WebSystems1Component', () => {
  let component: WebSystems1Component;
  let fixture: ComponentFixture<WebSystems1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebSystems1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebSystems1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
