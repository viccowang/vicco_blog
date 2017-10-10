import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyManageComponent } from './reply-manage.component';

describe('ReplyManageComponent', () => {
  let component: ReplyManageComponent;
  let fixture: ComponentFixture<ReplyManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplyManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
