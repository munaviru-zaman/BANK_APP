import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-deleteaccount',
  templateUrl: './deleteaccount.component.html',
  styleUrls: ['./deleteaccount.component.css'],
})
export class DeleteaccountComponent implements OnInit {
  @Input() item: any;

  @Output() onCancel: any = new EventEmitter();
  @Output() onDelete: any = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  cancel() {
    this.onCancel.emit();
  }

  delete() {
    this.onDelete.emit(this.item);
  }
}
