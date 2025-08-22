import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Program } from '../../Model/program/program.model';
import { ProgramService } from '../../Service/program/program.service';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-details',
  imports: [IonicModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
     program!: Program;

  constructor(
    private route: ActivatedRoute,
    private programService: ProgramService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.program = this.programService.getProgramById(id);
  }
}
