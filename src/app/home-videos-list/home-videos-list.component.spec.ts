import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVideosListComponent } from './home-videos-list.component';

describe('HomeVideosListComponent', () => {
  let component: HomeVideosListComponent;
  let fixture: ComponentFixture<HomeVideosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeVideosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVideosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
