import { Component } from '@angular/core';
import { UpperNavComponent } from "../../Shared/upper-nav/upper-nav.component";
import { Router } from '@angular/router';
import { Program } from '../../Model/program/program.model';
import { IonicModule, ModalController } from '@ionic/angular';
import { ProgramService } from '../../Service/program/program.service';
import { FilteredModalComponent } from '../../Shared/filtered-modal/filtered-modal.component';
import { DetailsComponent } from "../../Shared/details/details.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { mockData } from '../../Utils/mock-data.json';

@Component({
  selector: 'app-layout',
  imports: [UpperNavComponent, IonicModule, DetailsComponent,FormsModule,CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  programs: Program[] = [];
  filteredPrograms: Program[] = [];
  id: string = ''

  constructor(
    private modalCtrl: ModalController,
    private programService: ProgramService,
    private router: Router
  ) {}

  ngOnInit() {
    this.programs = this.programService.getPrograms();
    this.filteredPrograms = [...this.programs];
    // console.log(this.filteredPrograms);
    // console.log(this.programs);
  }

  openSortModal(){}
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

  goToDetail(programId: string) {
    console.log(programId);
    this.id = programId
    this.router.navigate([`/details/${this.id}`]);
  }
}
