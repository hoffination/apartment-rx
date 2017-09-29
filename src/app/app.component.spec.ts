import { TestBed, async } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ApartmentComponent } from './components/apartment/apartment.component';

import { ApartmentActions } from './store/apartment/apartment.actions';

import { ApartmentService } from './services/apartment.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ApartmentComponent
      ],
      providers: [
        Store,
        ApartmentService,
        ApartmentActions
      ],
      imports: [
        StoreModule.forRoot([])
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
