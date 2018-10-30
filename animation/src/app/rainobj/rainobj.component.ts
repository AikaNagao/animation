import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, AnimationBuilder, AnimationPlayer} from '@angular/animations';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-rainobj',
  templateUrl: './rainobj.component.html',
  styleUrls: ['./rainobj.component.css']
})
export class RainobjComponent implements OnInit {
   private player: AnimationPlayer;
   status:string = "rain";
   img:any;
   count:number = 1;
   message:string = "notrun";
   imgno:string;

  constructor(private animationBuilder: AnimationBuilder) { }

  ngOnInit() {
    this.dropanimation(document.getElementById('rain'));
  }

  dropanimation = async (element) => {
    await this.sleep(1000);
    //もとのエレメントをplay
    this.play(element);
    //cloneを作成してplay
    for (this.count = 1; this.count < 25; this.count++) {
      await this.sleep(100);
      let clone_element = element.cloneNode(true);
    let base = document.getElementById('display_img')
      base.appendChild(clone_element);
      clone_element.id = this.count;
      this.play(clone_element);
     }
  }


  play = async(element) => {
    let player = await this.createPlayer(element);
    console.log("play")
    console.log(element);
    player.play();
    //awaitで待てないためアニメーション時間分まつ
    await this.sleep(1000);
    player.play();
    await this.sleep(1000);
    player.play();
    await this.sleep(1000);
    player.play();
    await this.sleep(1000);
    player.play();
    await this.sleep(1000);
    player.play();
    await this.sleep(1000);
    player.play();
  }

  domremover(element){
    let base = document.getElementById('display_img')
    base.removeChild(element);
  }

  createPlayer = async (element) => {
    let A = Math.floor( Math.random() * 1000 );
    console.log(A);
    let B = A - 500;
    console.log(B);
    let animationFactory;
      animationFactory = this.animationBuilder
      .build([
        animate(1000, keyframes([
          style({ opacity: 1 , transform: 'translateY(0) translatex(' + A + '%) ', offset:0}),
          style({ opacity: 1, transform: 'translateY(2500%) translatex(' + B +'%) ', offset:1})
      ]))
    ])
    return this.player = animationFactory.create(element);
  }

  sleep = async (delay, result?) => {
    return new Promise(resolve => {
      setTimeout(() => resolve(result), delay);
    });
  }
}
