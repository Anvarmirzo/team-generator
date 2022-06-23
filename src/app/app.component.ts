import {Component} from '@angular/core';
import {FormBuilder, Validators,} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  members: string[] = [];

  teamForm = this.fb.group({
    newMemberName: ['', Validators.required],
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
}
