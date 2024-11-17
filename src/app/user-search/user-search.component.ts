import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface User {
  firstName: string;
  userId: string;
  lastName: string;
  userRole: string;
  status: string;
}

@Component({
  selector: 'app-user-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
})
export class UserSearchComponent {
  inputFields = [
    { label: 'First Name', key: 'firstName', placeholder: 'Enter First Name', type: 'text' },
    { label: 'User ID', key: 'userId', placeholder: 'Enter User ID', type: 'text' },
    { label: 'Last Name', key: 'lastName', placeholder: 'Enter Last Name', type: 'text' },
    { label: 'User Role', key: 'userRole', placeholder: 'Enter User Role', type: 'text' },
    { label: 'Status', key: 'status', placeholder: 'Enter Status', type: 'text' },
  ];

  searchParameters: { [key: string]: string } = {
    firstName: '',
    userId: '',
    lastName: '',
    userRole: '',
    status: '',
  };

  users: User[] = [
    { firstName: 'Alice', userId: '1', lastName: 'Smith', userRole: 'Admin', status: 'Active' },
    { firstName: 'Bob', userId: '2', lastName: 'Johnson', userRole: 'User', status: 'Inactive' },
    { firstName: 'Charlie', userId: '3', lastName: 'Williams', userRole: 'User', status: 'Active' },
    { firstName: 'David', userId: '4', lastName: 'Brown', userRole: 'Admin', status: 'Inactive' },
    { firstName: 'Ella', userId: '5', lastName: 'Jones', userRole: 'User', status: 'Active' },
  ];

  filteredUsers: User[] = [...this.users];

  onSearch(): void {
    this.filteredUsers = [...this.users]; // Add filtering logic if needed
  }

  getUserFieldValue(user: User, fieldKey: string): string {
    return user[fieldKey as keyof User];
  }
}
