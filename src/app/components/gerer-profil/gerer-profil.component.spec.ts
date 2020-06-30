import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GererProfilComponent } from './gerer-profil.component';

describe('GererProfilComponent', () => {
  let component: GererProfilComponent;
  let fixture: ComponentFixture<GererProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GererProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GererProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
