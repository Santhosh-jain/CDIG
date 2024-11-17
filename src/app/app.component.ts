import { Component, AfterViewInit } from '@angular/core';
import { DynamicIdManagerService } from './services/dynamic-id-manager.service';
import { UserSearchComponent } from './user-search/user-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserSearchComponent], // Include the standalone component here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  constructor(private dynamicIdManager: DynamicIdManagerService) {}

  ngAfterViewInit(): void {
    this.dynamicIdManager.applyDynamicIds();
  }
}
