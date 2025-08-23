import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { Program } from '../../Model/program/program.model';
import { Router } from '@angular/router';
import { ProgramService } from '../../Service/program/program.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-insitute-modal',
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './insitute-modal.component.html',
  styleUrl: './insitute-modal.component.css'
})
export class InsituteModalComponent {

  programs!: Program[];
  filteredPrograms: Program[] = [];
  searchTerm = '';
  selectedId: number | null = 2;
  institutes = [
    { id: 1, name: 'University of Graz', country: 'Canada', count: 629, logo: 'top-image.png' },
    { id: 2, name: 'University of Liverpool', country: 'Canada', count: 629, logo: 'top-image.png' },
    { id: 3, name: 'University of Liverpool', country: 'Canada', count: 629, logo: 'top-image.png' },
    { id: 4, name: 'University of Liverpool', country: 'Canada', count: 629, logo: 'top-image.png' },
    { id: 5, name: 'University of Liverpool', country: 'Canada', count: 629, logo: 'top-image.png' },
    { id: 6, name: 'University of Liverpool', country: 'Canada', count: 629, logo: 'top-image.png' },
  ];


  constructor(
    private modalCtrl: ModalController,
    private programService: ProgramService,
    private router: Router
  ) { }
  ngOnInit() {
    this.programs = this.programService.getPrograms();
    this.filteredPrograms = [...this.programs];
  }

  close() { 
    this.modalCtrl.dismiss(); 
  }
  clearAll() { 
    this.selectedId = null; 
  }
  apply() { 
    this.modalCtrl.dismiss({ selected: this.selectedId });
  }
}
