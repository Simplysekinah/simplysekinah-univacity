import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Program } from '../../Model/program/program.model';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-details',
  imports: [IonicModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  @Output() productselected = new EventEmitter<string>()
  @Input() program!: Program;
navigateToDetail() {
  this.productselected.emit(this.program.id)
}

}
