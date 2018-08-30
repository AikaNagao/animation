import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-mountainobj',
  templateUrl: './mountainobj.component.html',
  styleUrls: ['./mountainobj.component.css'],
  animations: [
    trigger('status', [
      state('show', style({
        opacity: 1,
      })),
      transition('void => show', [
        style({transform: 'translateY(10%)',opacity: 0}),
        animate(2000)
      ]),
    ])
  ]
})
export class MountainobjComponent implements OnInit {

  @Output() sunrise = new EventEmitter<string>();

  constructor(
  ) { }

  state:string;

  ngOnInit() {
  }

  sunstatuschange() {
    this.sunrise.emit("show");
  }

}
