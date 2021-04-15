import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>
      input-button-unit works!
      The title is: {{ title }}
    </p>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {

  title = 'Hello World';
  constructor() {
		this.changeTitle('My First Angular App');
	}

  ngOnInit(): void {
		this.title = 'Angular CLI Rules!';
  }

	changeTitle(newTitle: string) {
		this.title = newTitle;
	}
}
