import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { Product, Pallier } from '../world';

declare var require;  
const ProgressBar = require("progressbar.js");
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {

  @ViewChild('bar') progressBarItem

  serverImage="http://localhost:8080/images/"
  ProgressBar = require("progressbar.js");
  progressbar: any;
  lastupdate: any;
  
  @Output notifyProduction: EventEmitter<Product>=new EventEmitter<Product>();
  


  constructor() { }

  ngOnInit() {
    
    this.progressbar = new ProgressBar.Line(this.progressBarItem.nativeElement, { strokeWidth: 50, color: '#45dd33' });
    //this.calcScore();{}
  }
  product: Product;
   @Input() set prod(value: Product) {
    this.product = value; 
      //this.progressbar.set(progress);
     setInterval(() => { this.calcScore(); }, 100);
   
  }
  //animation progress bar
  startFabrication() {
  
this.lastupdate=Date.now();
        if (this.product.quantite >= 1) {
          this.product.timeleft = this.product.vitesse;
    
          this.progressbar.animate(1,{ duration: this.product.vitesse });
                }
    }

    calcScore() {


  
      if(this.product.timeleft>0){
        let tempsEcoule = Date.now()-this.lastupdate;
        this.product.timeleft=(this.product.vitesse)-tempsEcoule;
        if(this.product.timeleft<=0){
          this.product.timeleft=0;
          this.progressbar.set(0); // remise  zero
          this.notifyProduction.emit(this.product);
        }
      }
    }

    notifyProduction(){
      this.notifyProduction.emit(this.product);
    }
  