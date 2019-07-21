/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HallsService } from './halls.service';

describe('Service: Halls', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HallsService]
    });
  });

  it('should ...', inject([HallsService], (service: HallsService) => {
    expect(service).toBeTruthy();
  }));
});
