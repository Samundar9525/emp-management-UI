import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit,OnChanges{

  timelineData:any =[]
  @Input() data:any;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['data'].currentValue.length>0){
      this.timelineData = this.data.map((res:any)=>{return {title:res.title,time:parseInt(res.from_year),experience:res.years}})
      this.timelineData.sort((a:any, b:any) => a.time - b.time);
    }
  }

  ngOnInit() {
  }
}
