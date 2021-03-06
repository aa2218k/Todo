import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo = [];
  @Input()
  index: number;
  isChecked: boolean;
  @Output()
  event = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log(this.index);
  }
}
