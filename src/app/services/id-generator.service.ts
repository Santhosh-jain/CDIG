import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IdGeneratorService {
  generateID(pageName: string, functionality: string, elementType: string, associatedString: string): string {
    return `${pageName}-${functionality}-${elementType}-${associatedString}`;
  }
}
