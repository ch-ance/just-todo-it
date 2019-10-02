import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ListItem } from '../../list-item';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  constructor() {}

  addTaskForm: FormGroup;

  listItems: ListItem[] = [];

  onSubmit(): void {
    this.listItems.push(this.addTaskForm.value);
  }

  ngOnInit() {
    this.addTaskForm = new FormGroup({
      task: new FormControl(null, Validators.required)
    });
  }
}
