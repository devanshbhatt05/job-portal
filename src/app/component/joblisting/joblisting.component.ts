import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Job } from 'src/app/Job';

@Component({
  selector: 'app-joblisting',
  templateUrl: './joblisting.component.html',
  styleUrls: ['./joblisting.component.css']
})
export class JoblistingComponent implements OnInit {

  tasks: Job[] = [];

  constructor(private taskService: TaskService){

  }


  ngOnInit(): void {
    this.taskService.getTasks().subscribe( (tasks) => this.tasks = tasks);
  }


}
