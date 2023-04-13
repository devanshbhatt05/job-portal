import { Component,Input, OnInit } from '@angular/core';
import { Job } from 'src/app/Job';

@Component({
  selector: 'app-jobshow',
  templateUrl: './jobshow.component.html',
  styleUrls: ['./jobshow.component.css']
})
export class JobshowComponent implements OnInit {

  @Input() task:Job={};
  constructor(){

  }
  ngOnInit(): void {
    
  }

}
