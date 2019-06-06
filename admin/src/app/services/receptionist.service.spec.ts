/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReceptionistService } from './receptionist.service';

describe('Service: Receptionist', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReceptionistService]
    });
  });

  it('should ...', inject([ReceptionistService], (service: ReceptionistService) => {
    expect(service).toBeTruthy();
  }));
});
