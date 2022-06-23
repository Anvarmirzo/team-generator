import {Component} from '@angular/core';
import {FormBuilder, Validators,} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  members: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  teams: string[][] = [];
  isValidTeamCount = true;

  teamForm = this.fb.group({
    newMemberName: ['', Validators.required],
  })

  generateForm = this.fb.group({
    teamCount: ['', Validators.required],
  })

  constructor(private fb: FormBuilder) {
  }


  addMember(name?: string | null) {
    const trimmed = name?.trim()
    if (trimmed) {
      this.members.push(trimmed)
      this.teamForm.reset();
    }
  }

  generateTeams(teamCount?: string | null) {
    if (teamCount) {
      const count = +teamCount;
      if (count > 0 && count <= this.members.length) {
        this.isValidTeamCount = true;
        this.teams = [];
        const members = [...this.members];

        while (members.length) {
          for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * members.length);
            const member = members.splice(randomIndex, 1)[0];
            if (!member) break;
            this.teams[i] ? this.teams[i].push(member) : this.teams[i] = [member];
          }
        }

        this.generateForm.reset();
      } else {
        this.isValidTeamCount = false;
      }
    }
  }
}
