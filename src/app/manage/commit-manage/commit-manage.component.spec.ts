import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitManageComponent } from './commit-manage.component';

describe('CommitManageComponent', () => {
  let component: CommitManageComponent;
  let fixture: ComponentFixture<CommitManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
