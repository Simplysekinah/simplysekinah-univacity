import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Program } from '../../Model/program/program.model';
import { ProgramService } from '../../Service/program/program.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [IonicModule,CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
     program!: Program;
     
  id:any
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private programService: ProgramService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.program = this.programService.getProgramById(this.id);
    console.log(this.program);
    this.cdr.detectChanges()
  }
  navigate(){
    this.router.navigate(['/'])
  }
}
