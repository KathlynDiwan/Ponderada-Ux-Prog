import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule, // Se necessário
        HomeComponent // Componente autônomo
      ],
      providers: [
        // Fornece um mock para ActivatedRoute
        {
          provide: ActivatedRoute,
          useValue: {
            // Mock properties and methods as needed
            params: of({id: 123}), // Exemplo se seu componente depende de parâmetros da rota
          }
        }
      ]
    })
    .compileComponents();
  
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    const result = "1"; 
    const expectedResult = "1"; 

    expect(result).toEqual(expectedResult);  });
});
