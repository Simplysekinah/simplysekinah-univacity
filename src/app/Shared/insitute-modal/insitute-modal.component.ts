import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { Program } from '../../Model/program/program.model';
import { Router } from '@angular/router';
import { ProgramService } from '../../Service/program/program.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-insitute-modal',
  imports: [IonicModule,CommonModule,FormsModule],
  templateUrl: './insitute-modal.component.html',
  styleUrl: './insitute-modal.component.css'
})
export class InsituteModalComponent {

  filteredPrograms: Program[] = [];
    programs!: Program[];

    constructor(
    private modalCtrl: ModalController,
    private programService: ProgramService,
    private router: Router
  ) {}
      ngOnInit() {
    this.programs = this.programService.getPrograms();
    this.filteredPrograms = [...this.programs];
  }


  searchTerm = '';
  selectedId: number | null = 2; // Example pre-selected item
  institutes = [
    { id: 1, name: 'University of Graz', country: 'Canada', count: 629, logo: 'assets/university-logo.png' },
    { id: 2, name: 'University of Liverpool', country: 'Canada', count: 629, logo: 'assets/university-logo.png' },
    // ... more items
  ];


  close() { this.modalCtrl.dismiss(); }
  clearAll() { this.selectedId = null; }
  apply() { this.modalCtrl.dismiss({ selected: this.selectedId }); }
}
