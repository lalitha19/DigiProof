import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('init home component');
    this.loadscript();
  }

  private loadscript(){
    const node=document.createElement('script');
    node.src='/assets/js/plugins.js';
    node.type="text/javascript";
    node.async=true;
    node.charset='utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
  
  Contact(form:NgForm){
const details=form.value;
console.log(details.name);
  }
}

