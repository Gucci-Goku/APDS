import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-task-display',
  templateUrl: './task-display.component.html',
  styleUrls: ['./task-display.component.css']
})
export class TaskDisplayComponent implements OnInit {
tasks:{_id:string,id:string,name:string,__v:string}[] = [];

constructor(public taskservice: TaskServiceService){}
private tasksubscription!: Subscription

ngOnInit() {
  this.taskservice.gettask_service();
  this.tasksubscription = this.taskservice.getUpdateListner().
  subscribe((tasks:{_id:string,id:string,name:string,__v:string}[])=>{
    this.tasks=tasks;
  });
}
ngOnDestroy(){
  this.tasksubscription.unsubscribe();
}
ondelete(taskid: string){
  this.taskservice.deletetask_service(taskid)
}

}
