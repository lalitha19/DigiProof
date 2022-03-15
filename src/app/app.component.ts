import { Component, Renderer2 } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, } from '@angular/router';

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
        if ((event['url'] == '/Home') || (event['url'] == '/')) {
          this.renderer.addClass(document.body, 'dark-layout');
          document.querySelector('#navigation')?.classList.add('nav-dark');
        } else {
          this.renderer.removeClass(document.body, 'dark-layout')
          document.querySelector('#navigation')?.classList.add('nav-white');
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

