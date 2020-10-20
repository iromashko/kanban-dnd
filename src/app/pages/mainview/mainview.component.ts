import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.scss'],
})
export class MainviewComponent implements OnInit {
  board: Board = new Board('Test Board', [
    new Column('Ideas', ['Eat', 'Sleep', 'Code']),
    new Column('Research', ['100', 'Projects', 'Challenge']),
    new Column('Todo', ['Dolor', 'Ipsum', 'Lorem', 'Ipsum']),
    new Column('Done', ['Dolor', 'Ipsum']),
  ]);

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
