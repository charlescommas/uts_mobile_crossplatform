import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewgridComponent } from './viewgrid.component';

describe('ViewgridComponent', () => {
  let component: ViewgridComponent;
  let fixture: ComponentFixture<ViewgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewgridComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
