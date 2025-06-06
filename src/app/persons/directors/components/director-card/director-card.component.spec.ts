import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorCardComponent } from './director-card.component';

describe('DirectorCardComponent', () => {
  let component: DirectorCardComponent;
  let fixture: ComponentFixture<DirectorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectorCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
