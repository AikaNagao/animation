import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('flyInOut', [
      state('rightselect', style({
        width: '48%'
      })),
      state('leftselect', style({
        width: '52%'
      })),
      state('out', style({
        width: 0
      })),
      state('in', style({
        width: '100%'
      })),
      transition('* => leftselect', [
        animate('0.3s ease-out')
      ]),
      transition('* => rightselect', [
        animate('0.3s ease-out')
      ]),
      transition('* => in', [
        animate(1000)
      ]),
      transition('* => out', [
        animate(1000)
      ]),
    ])
  ]
})

export class HomeComponent implements OnInit {

  state:string;
  selectComponent:string;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  in(){
    this.state = 'in';
    console.log('in');
  }

  out(){
    this.state = 'out';
    console.log('out');
  }

  leftselect(){
    this.state = 'leftselect';
    console.log("leftselect");
  }

  rightselect(){
    this.state = 'rightselect';
    console.log("rightselect");
  }

  openPage(state){
    if(state == 'in'){
      this.router.navigate(['day']);
    }else if(state== 'out'){
      this.router.navigate(['night']);
    }
  }
}
