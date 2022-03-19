import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, } from '@angular/router';
declare let $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'DigiProofApp';
  showLoadingIndicator = false;
  
  constructor(private renderer: Renderer2, private router: Router) {   
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if ((event['url'].indexOf('/Home')>=0) || (event['url'] == '/')) {
          this.renderer.addClass(document.body, 'dark-layout');
          document.querySelector('#navigation')?.classList.add('nav-dark');          
          document.querySelector('#navigation')?.classList.remove('nav-white'); 
        } else {
          this.renderer.removeClass(document.body, 'dark-layout')
          document.querySelector('#navigation')?.classList.add('nav-white');
          document.querySelector('#navigation')?.classList.remove('nav-dark'); 
        }
        
        this.showLoadingIndicator = true;
      }
      if(event instanceof NavigationEnd){
        this.router.navigated = false;
        this.showLoadingIndicator=false;
      }
    })    
  } 

  
}

