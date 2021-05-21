import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPostsPageComponent } from './cart-posts-page.component';

describe('CartPostsPageComponent', () => {
  let component: CartPostsPageComponent;
  let fixture: ComponentFixture<CartPostsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartPostsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPostsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
