import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NorthwindJasonService } from './northwind-jason.service';

describe('NorthwindJasonService', () => {
  let service: NorthwindJasonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(NorthwindJasonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
