import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPostsPageComponent } from './card-posts-page.component';

describe('CartPostsPageComponent', () => {
  let component: CardPostsPageComponent;
  let fixture: ComponentFixture<CardPostsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPostsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPostsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
