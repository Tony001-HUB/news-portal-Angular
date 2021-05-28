import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPostsComponent } from './edit-posts.component';

describe('EditPostsComponent', () => {
  let component: EditPostsComponent;
  let fixture: ComponentFixture<EditPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
