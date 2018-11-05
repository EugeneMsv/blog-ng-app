import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRegisterListComponent } from './post-register-list.component';

describe('PostRegisterListComponent', () => {
  let component: PostRegisterListComponent;
  let fixture: ComponentFixture<PostRegisterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostRegisterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostRegisterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
