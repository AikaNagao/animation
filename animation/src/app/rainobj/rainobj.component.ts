import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, AnimationBuilder, AnimationPlayer} from '@angular/animations';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-rainobj',
  templateUrl: './rainobj.component.html',
  styleUrls: ['./rainobj.component.css']
})
export class RainobjComponent implements OnInit {

  @ViewChild('img') elementRef: ElementRef;
  @ViewChild('no_1') no_1: ElementRef;
  @ViewChild('no_2') no_2: ElementRef;
  @ViewChild('no_3') no_3: ElementRef;
  @ViewChild('no_4') no_4: ElementRef;
  @ViewChild('no_5') no_5: ElementRef;
   private player: AnimationPlayer;
   status:string = "rain";
   img:any;
   count:number = 1;
   message:string = "notrun";
   imgno:string;

  constructor(private animationBuilder: AnimationBuilder) { }

  ngOnInit() {

    this.dropAnimation(this.no_1.nativeElement);
    // this.dropAnimation(this.no_2.nativeElement);
    // this.dropAnimation(this.no_3.nativeElement);
    // this.dropAnimation(this.no_4.nativeElement);
    // this.dropAnimation(this.no_5.nativeElement);

    // for (this.count = 0; this.count < 10; this.count++) {
    //   this.dropAnimation();
    // }
  }

  createPlayer(element) {
    let animationFactory;
      animationFactory = this.animationBuilder
      .build([
        animate(1000, keyframes([
          style({ opacity: 1 , transform: 'translateY(0) translatex(' + Math.floor( Math.random() * 1000 ) + '%) rotate(0deg)', offset:0}),
          style({ opacity: 1, transform: 'translateY(500%) translatex(' + Math.floor( Math.random() * 1000 ) + '%) rotate(360deg)', offset:1})
          // style({ transform: 'translateY(0)'}),
          // style({ transform: 'translateY(0)' }),
          // style({ transform: 'translateY(0)' }),
          // style({ transform: 'translateY(0)' }),
      ]))
    ])
    this.player = animationFactory.create(element);

  }

  dropAnimation(element){
    this.createPlayer(element);
    this.player.onDone(() => {
      this.count++;
      if(this.count == 2){
        this.dropAnimation(this.no_2.nativeElement);
      }
      if(this.count == 3){
        this.dropAnimation(this.no_3.nativeElement);
      }
      if(this.count == 4){
        this.dropAnimation(this.no_4.nativeElement);
      }
      if(this.count == 5){
        this.dropAnimation(this.no_5.nativeElement);
      }
    });
    this.player.play();

    // console.log("rain");
    // let img = document.createElement('img');
    // // let img = document.getElementById('img');
    // img.src="../../../assets/drop.png";
    // img.style.position = "absolute";
    // img.style.top = "0";
    // let base = document.getElementById('display_img')
    // base.appendChild(img);
    // this.createPlayer(img);
    // this.player.play();
    // base.removeChild(clone);

    // let img = document.getElementById('img');
    // let clone = img.cloneNode(true);
    // let base = document.getElementById('display_img')
    // base.appendChild(clone);
  }
}
