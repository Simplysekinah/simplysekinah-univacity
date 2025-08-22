import { Injectable } from '@angular/core';
import { Program } from '../../Model/program/program.model';
import mockData from '../../Utils/mock-data.json';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  private programs: Program[] = mockData; // ✅ Declare this outside the constructor

  constructor() {}

  getPrograms(): Program[] {
    return this.programs;
  }

  getProgramById(id: number): Program {
    return this.programs.find(p => p.id === id)!;
  }
}
