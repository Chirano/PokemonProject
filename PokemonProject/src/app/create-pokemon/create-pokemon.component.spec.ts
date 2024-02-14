import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePokemonComponent } from './create-pokemon.component';

describe('CreatePokemonComponent', () => {
  let component: CreatePokemonComponent;
  let fixture: ComponentFixture<CreatePokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePokemonComponent]
    });
    fixture = TestBed.createComponent(CreatePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
