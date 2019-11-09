import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContextService } from '../context.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent implements OnInit, OnDestroy {
  public getValue: string;
  public subscription: Subscription;
  constructor(private contextService: ContextService) { }

  ngOnInit() {
    this.subscription =  this.contextService.getData().subscribe((e: any) => {
      this.getValue = e.value;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
