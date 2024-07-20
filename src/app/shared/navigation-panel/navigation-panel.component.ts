import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss']
})
export class NavigationPanelComponent {
  @Input() drawerOpen=false;
  @Output() drawerevent = new EventEmitter();

  drawerClose(){
    this.drawerOpen = false;
    this.drawerevent.emit(false);
  }

}
