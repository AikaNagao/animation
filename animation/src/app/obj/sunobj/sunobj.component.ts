import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-sunobj',
  templateUrl: './sunobj.component.html',
  styleUrls: ['./sunobj.component.css'],
  animations: [
    trigger('status', [
      state('hide', style({
        opacity: 0,
        transform: 'rotate(0)'
      })),
      state('show', style({
        opacity: 1,
        transform: 'rotate(-180deg)'
      })),
      transition('hide => show', [
        animate(2000)
      ]),
      transition('* => show', [
        style({transform: 'rotate(-360deg)'}),
        animate(3000)
      ]),
    ])
  ]
})
export class SunobjComponent implements OnInit {

  @Input() state:string;

  constructor() { }

  ngOnInit() {
  }


}
