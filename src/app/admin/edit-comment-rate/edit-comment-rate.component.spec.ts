import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCommentRateComponent } from './edit-comment-rate.component';

describe('EditCommentRateComponent', () => {
  let component: EditCommentRateComponent;
  let fixture: ComponentFixture<EditCommentRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCommentRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCommentRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
