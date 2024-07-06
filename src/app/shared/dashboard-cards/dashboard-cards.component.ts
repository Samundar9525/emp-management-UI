import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-cards',
  templateUrl: './dashboard-cards.component.html',
  styleUrls: ['./dashboard-cards.component.scss'],
})
export class DashboardCardsComponent {
  @Input() dataSource: any;
  @Output() cardClickedEvent = new EventEmitter();

  constructor() {}

  cardClicked(data: any) {
    this.cardClickedEvent.emit(data);
  }
}
