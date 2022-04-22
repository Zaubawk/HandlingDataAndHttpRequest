import { Component } from '@angular/core';
import { WikipediaService } from './Services/wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  pages: {}[] = [];

  constructor(private wikipedia: WikipediaService) {
    
  }
  onTerm(term: string) {
    // const results = this.wikipedia.search(term);
    // console.log(results);
    this.wikipedia.search(term).subscribe(pages => {
     
      this.pages = pages;
      //console.log(this.pages);
    });
  }
}
