import { Injectable, EventEmitter, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UtilitiesService {

  constructor(
    private _httpClient: HttpClient,
    private _injector: Injector
  ) {
  }


}
