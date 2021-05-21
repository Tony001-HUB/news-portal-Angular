import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsPageComponent } from './comments-page.component';

describe('CommentsPageComponent', () => {
  let component: CommentsPageComponent;
  let fixture: ComponentFixture<CommentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
