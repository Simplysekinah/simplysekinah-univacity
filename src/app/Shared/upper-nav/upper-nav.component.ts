import { Component } from '@angular/core';
import { IonicModule,IonIcon, ModalController } from "@ionic/angular";
import { FilteredModalComponent } from '../filtered-modal/filtered-modal.component';
import { Router } from '@angular/router';
import { Program } from '../../Model/program/program.model';
import { ProgramService } from '../../Service/program/program.service';

@Component({
  selector: 'app-upper-nav',
  imports: [IonicModule],
  templateUrl: './upper-nav.component.html',
  styleUrl: './upper-nav.component.css'
})
export class UpperNavComponent {

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
    console.log(this.filteredPrograms);
    console.log(this.programs);
  }
  
  openSortModal(){

  }
  // openFilterModal(){}

  // async openFilterModal() {
  //     const modal = await this.modalCtrl.create({
  //       component: FilteredModalComponent
  //     });
  
  //     await modal.present();
  //     const { data } = await modal.onDidDismiss();
  
  //     if (data) {
  //       this.filteredPrograms = this.programs.filter(p =>
  //         (!data.location || p.location === data.location) &&
  //         (!data.degree || p.degree === data.degree) &&
  //         (!data.mode || p.mode === data.mode)
  //       );
  //     }
  //   }

    async openFilterModal() {
  const modal = await this.modalCtrl.create({
    component: FilteredModalComponent
  });

  await modal.present();
  const { data } = await modal.onDidDismiss();

  if (data) {
    this.filteredPrograms = this.programs.filter(p =>
      (!data.location || p.location === data.location) &&
      (!data.degree || p.degree === data.degree) &&
      (!data.mode || p.mode === data.mode)
    );
  }
}

}
