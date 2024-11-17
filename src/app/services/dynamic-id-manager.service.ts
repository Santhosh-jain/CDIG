import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { IdGeneratorService } from './id-generator.service';

@Injectable({
  providedIn: 'root',
})
export class DynamicIdManagerService {
  private renderer: Renderer2;

  constructor(
    private rendererFactory: RendererFactory2,
    private idGenerator: IdGeneratorService
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  applyDynamicIds(): void {
    // Select elements that need IDs
    const elements = document.querySelectorAll('input, button, table, select, textarea');

    elements.forEach((element) => {
      // Skip if the element already has an ID
      if (element.id) return;

      const elementType = element.tagName.toLowerCase(); // Get tag name (e.g., 'input', 'button')
      const inputType = element.getAttribute('type') || elementType; // Get type or fallback to tag name
      let fieldName = element.getAttribute('name') || element.getAttribute('placeholder') || 'element'; // Extract 'name' or 'placeholder'

      // For buttons, use text content if no name/placeholder is available
      if (elementType === 'button') {
        const buttonText = (element.textContent || '').trim();
        if (buttonText) {
          fieldName = buttonText;
        }
      }

      const associatedString = fieldName.replace(/\s+/g, ''); // Remove spaces for valid ID

      // Generate ID based on the desired format
      const dynamicID = this.idGenerator.generateID(
        'Search',
        'UserSearch',
        `${inputType}_field`,
        associatedString
      );

      // Apply the generated ID to the element
      this.renderer.setAttribute(element, 'id', dynamicID);
    });
  }
}
