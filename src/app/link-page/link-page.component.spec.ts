import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkPageComponent } from './link-page.component';

describe('LinkPageComponent', () => {
  let component: LinkPageComponent;
  let fixture: ComponentFixture<LinkPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
