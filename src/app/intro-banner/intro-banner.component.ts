import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';


@Component({
  selector: 'app-intro-banner',
  templateUrl: './intro-banner.component.html',
  styleUrls: ['./intro-banner.component.css']
})
export class IntroBannerComponent implements OnInit {
  title = 'Cognitive Solution for all !';
  constructor() { }

  ngOnInit() {
    var titles = {
      strings: ['Cognitive Intelligent Solutions made simple'],
      typeSpeed: 40
    }
    

  
  let titled = new Typed('.title',titles);
  let options = {
    strings: ["^3000 #ArtificialIntelligence.", "#MachineLearning.", "#DigitialTransformation", "#automation","#Cloud.","#BlockChain.","#CognitiveSolutions"],
    typeSpeed: 50,
    backSpeed: 50,
    showCursor: false,
    cursorChar: "|",
    smartBackspace:true,
  }
  let typed = new Typed(".typing-element", options);
}
    
}
    

