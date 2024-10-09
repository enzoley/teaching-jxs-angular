import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeInfosComponent } from './poke-infos.component';

describe('PokeInfosComponent', () => {
  let component: PokeInfosComponent;
  let fixture: ComponentFixture<PokeInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokeInfosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokeInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
