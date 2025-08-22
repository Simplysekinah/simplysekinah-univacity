import { Component, Input } from '@angular/core';
import { Program } from '../../Model/program/program.model';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-details',
  imports: [IonicModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
navigateToDetail() {

}
@Input() program!: Program;

}
