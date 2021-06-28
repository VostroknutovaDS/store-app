import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  styleUrls: ['./card.scss'],
})
export class CardComponent {
  @Output() itemAddClick = new EventEmitter<any>();

  @Input() item: any;

  readonly placeholderImg = '../../../assets/img/placeholder-img.png';

  onItemAdd(): void {
    this.itemAddClick.emit(this.item);
  }
}
