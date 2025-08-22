import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filtered-modal',
  imports: [IonicModule,CommonModule,FormsModule],
  templateUrl: './filtered-modal.component.html',
  styleUrl: './filtered-modal.component.css'
})
export class FilteredModalComponent {
  resultCount = 1024;

  // clearFilters() {
    
  // }

  // viewResults() {
  // }
  //  filters = {
  //   location: '',
  //   degree: '',
  //   mode: ''
  // };

  filters = {
    tuition: { min: 50000, max: 120000 },
    institutes: '',
    educationLevel: '',
    countries: [],
    disciplines: [],
    studyLanguage: '',
    attendance: ''
  };
  constructor(private modalCtrl: ModalController) {}

  applyFilters() {
    this.modalCtrl.dismiss(this.filters);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
  @ViewChild(IonModal) filterModal!: IonModal;
  
  
  // openModal() {
  //   this.filterModal.present();
  // }
  
  // closeModal() {
  //   this.filterModal.dismiss();
  // }
  
  // applyFilters() {
  //   this.closeModal();
  // }
  
  clearFilters() {
    this.filters = {
      tuition: { min: 50000, max: 120000 },
      institutes: '',
      educationLevel: '',
      countries: [],
      disciplines: [],
      studyLanguage: '',
      attendance: ''
    };
  }
}


import { ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

export class YourPageComponent {
}
