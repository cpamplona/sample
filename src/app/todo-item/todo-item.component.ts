import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
    <div class="todo-item">
    <input type="checkbox"
         class="todo-checkbox"
         (click)="completeItem()"
         [checked]="item.completed"/>
         <span *ngIf="!item.isEditable"class="todo-title" [ngClass]="{'todo-complete': item.completed}" (dblclick)="toggleEdit()">
          {{ item.title }}
        </span>
        <input type="text" *ngIf="item.isEditable" [(ngModel)]="item.title" (blur)="updateTitle()"/>
      <button class="btn btn-red" (click)="removeItem()">
      remove
    </button>
    </div>
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  toggleEdit() {
    this.item.isEditable = !this.item.isEditable;
  }

  completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: {completed: !this.item.completed}
    });
  }

  updateTitle(): void {
    this.item.isEditable = false;
    this.update.emit({
      item: this.item,
      changes: {title: this.item.title}
    });
  }

  removeItem(): void {
    this.remove.emit(this.item);
  }


}
