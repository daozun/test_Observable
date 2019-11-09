import { Component, OnInit } from '@angular/core';
import { ContextService } from '../context.service';

@Component({
  selector: 'app-set-data',
  templateUrl: './set-data.component.html',
  styleUrls: ['./set-data.component.scss']
})
export class SetDataComponent implements OnInit {
  public setValue: string;
  constructor( private contextService: ContextService) { }

  ngOnInit() {}

  public onBlur() {
    this.contextService.setData(this.setValue);
  }

}
