import { Component } from '@angular/core';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent {
  jobs = [
    {
      title: "Software Developer",
      description : "we are looking for blah blah",
      location: 'New york'
    }
  ]

}
