import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
})
export class UserSearchComponent {
  // Define the type for input fields
  inputFields: (
    | { label: string; key: string; placeholder: string; type: 'text' | 'password' | 'textarea' }
    | { label: string; key: string; type: 'checkbox' }
    | { label: string; key: string; group: string; value: string; type: 'radio' }
    | { label: string; key: string; type: 'select'; options: string[] }
    | { label: string; key: string; type: 'button'; text: string }
  )[] = [
    { label: 'First Name', key: 'firstName', placeholder: 'Enter First Name', type: 'text' },
    { label: 'Last Name', key: 'lastName', placeholder: 'Enter Last Name', type: 'text' },
    { label: 'Password', key: 'password', placeholder: 'Enter Password', type: 'password' },
    { label: 'Subscribe', key: 'subscribe', type: 'checkbox' },
    { label: 'Gender Male', key: 'genderMale', group: 'gender', value: 'male', type: 'radio' },
    { label: 'Gender Female', key: 'genderFemale', group: 'gender', value: 'female', type: 'radio' },
    { label: 'User Role', key: 'userRole', type: 'select', options: ['Admin', 'User'] },
    { label: 'Status', key: 'status', type: 'select', options: ['Active', 'Inactive'] },
    { label: 'User Feedback', key: 'userFeedback', placeholder: 'Enter your feedback', type: 'textarea' },
    { label: 'Search', key: 'searchButton', type: 'button', text: 'Search' },
  ];

  // Bound data object for inputs
  searchParameters: { [key: string]: any } = {};

  constructor() {}

  // Dummy search function
  onSearch(): void {
    console.log('Search executed', this.searchParameters);
  }
}
