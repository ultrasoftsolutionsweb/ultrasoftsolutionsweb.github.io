import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';


@Component({
  selector: 'app-intro-banner',
  templateUrl: './intro-banner.component.html',
  styleUrls: ['./intro-banner.component.css']
})
export class IntroBannerComponent implements OnInit {
  title = "Cognitive Solution for all !";
  constructor() { }

  ngOnInit() {
    var titles = {
      strings: ["Cognitive Solution for all"],
      typeSpeed: 40
    }
    

  
  let titled = new Typed('.title',titles);
  let options = {
    strings: ["^3000 #Artificial Intelligence.", "#MachineLearning.", "#Cloud.","#BlockChain.","#CognitiveTechnology"],
    typeSpeed: 50,
    backSpeed: 50,
    showCursor: false,
    cursorChar: "|",
    smartBackspace:true,
  }
  let typed = new Typed(".typing-element", options);
}
    
}
    

