import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareLibComponent } from './share-lib.component';

describe('ShareLibComponent', () => {
  let component: ShareLibComponent;
  let fixture: ComponentFixture<ShareLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
