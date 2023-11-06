import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskServiceService} from '../task-service.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
  constructor (public taskservice: TaskServiceService) {}
ngOnInit(): void{
  
}

onaddtask(taskform: NgForm){
  if(taskform.invalid){
    alert('Invalid!')
    return
  }
  alert(taskform.value.enteredID+':'+taskform.value.enteredName)
  this.taskservice.addtask_service(taskform.value.enteredID,taskform.value.enteredName)
  taskform.resetForm();
}

}
