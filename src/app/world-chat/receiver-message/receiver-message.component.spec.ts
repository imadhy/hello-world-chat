import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverMessageComponent } from './receiver-message.component';

describe('ReceiverMessageComponent', () => {
  let component: ReceiverMessageComponent;
  let fixture: ComponentFixture<ReceiverMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiverMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiverMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
