import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetpinService {

    constructor() { }

    getOldPin(): number {
        return 1234;
    }
}
