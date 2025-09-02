import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { InsituteModalComponent } from '../insitute-modal/insitute-modal.component';

@Component({
  selector: 'app-filtered-modal',
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './filtered-modal.component.html',
  styleUrl: './filtered-modal.component.css'
})
export class FilteredModalComponent {
  resultCount = 1024;


  filters = {
    tuition: { min: 50000, max: 120000 },
    institutes: '',
    educationLevel: '',
    countries: [],
    disciplines: [],
    studyLanguage: '',
    attendance: ''
  };
  constructor(private modalCtrl: ModalController) { }

  @ViewChild(IonModal) filterModal!: IonModal;


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


  min = 50000;
  max = 120000;
  rangeValue = {
    lower: 50000,
    upper: 120000
  };


  close() { this.modalCtrl.dismiss(); }
  clearAll() { }
  apply() { this.modalCtrl.dismiss({ applied: true }); }

  async institute() {
    const modal = await this.modalCtrl.create({
      component: InsituteModalComponent,
      cssClass: 'custom-filter-modal',
      backdropDismiss: true
    });
    await modal.present();
  }
}


