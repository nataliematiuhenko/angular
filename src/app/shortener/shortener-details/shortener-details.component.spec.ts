import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShortenerDetailsComponent } from './shortener-details.component';

describe('ShortenerDetailsComponent', () => {
  let component: ShortenerDetailsComponent;
  let fixture: ComponentFixture<ShortenerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortenerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortenerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
