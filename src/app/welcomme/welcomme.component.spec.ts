import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcommeComponent } from './welcomme.component';

describe('WelcommeComponent', () => {
  let component: WelcommeComponent;
  let fixture: ComponentFixture<WelcommeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcommeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
