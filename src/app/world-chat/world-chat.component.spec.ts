import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldChatComponent } from './world-chat.component';

describe('WorldChatComponent', () => {
  let component: WorldChatComponent;
  let fixture: ComponentFixture<WorldChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
