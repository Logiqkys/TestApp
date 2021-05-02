import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-go',
  templateUrl: './go.component.html',
  styleUrls: ['./go.component.scss']
})
export class GoComponent implements OnInit {

  selectedValue: number;
  selectedValue1: number;
  selectedValue2: number;

  toPlace = [
    { id: 13.00, clientName: 'Cubao' },
    { id: 24.00, clientName: 'North Avenue' },
    { id: 16.00, clientName: 'GMA' }
  ];

  fromPlace = [
    { id: 13.00, clientName: 'Santolan' },
    { id: 24.00, clientName: 'Ayala' },
    { id: 16.00, clientName: 'Taft' }
  ];

  constructor(
    private router: Router,

  ) { }

  ngOnInit() {
  }
  goToSignUp() {

    this.router.navigate(['/home']);

  }

  goToInquiry() {

    this.router.navigate(['/go']);

  }
}
