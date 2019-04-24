import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResquestResetComponent } from './resquest-reset.component';

describe('ResquestResetComponent', () => {
  let component: ResquestResetComponent;
  let fixture: ComponentFixture<ResquestResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResquestResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResquestResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
