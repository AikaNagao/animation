import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes} from '@angular/animations';

@Component({
  selector: 'app-sunobj',
  templateUrl: './sunobj.component.html',
  styleUrls: ['./sunobj.component.css'],
  animations: [
    trigger('status', [
      state('hide', style({
        opacity: 0
      })),
      state('show', style({
      })),
      transition('hide => show', [
        animate(2000, keyframes([
          style({opacity: 0, offset: 0}),
          style({opacity: 0.5, transform: 'rotate(0deg)',offset: 0.3}),
          style({opacity: 1, transform: 'rotate(180deg)',offset: 0.65,}),
          style({opacity: 1, transform: 'rotate(360deg)', offset: 1.0}),
        ]))
      ])
    ])
  ]
})
export class SunobjComponent implements OnInit {

  @Input() state:string;

  constructor() { }

  ngOnInit() {
  }


}
