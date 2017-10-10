import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseManageComponent } from './base-manage.component';

describe('BaseManageComponent', () => {
  let component: BaseManageComponent;
  let fixture: ComponentFixture<BaseManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
