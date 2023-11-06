import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private tasksdisplay:{_id:string,id:string,name:string,__v:string}[]=[];
  private updatedtasksdisplay = new Subject<{_id:string,id:string,name:string,__v:string}[]>();
  constructor(private http: HttpClient) { }

  
addtask_service(pid:string, pname:string){
this.http.post<{message:String,task:any}>('https://localhost:3000/api/tasks/tasks',{id:pid,name:pname})
.subscribe((thetask)=>{
this.tasksdisplay.push(thetask.task);
this.updatedtasksdisplay.next([...this.tasksdisplay]);
})
}
gettask_service(){
  this.http.get<{message:String,task:any}>('https://localhost:3000/api/tasks/tasks')
  .subscribe((thetask)=>{
    this.tasksdisplay = thetask.task;
    this.updatedtasksdisplay.next([...this.tasksdisplay]);
    })
}

deletetask_service(taskid: string){
  this.http.get<{message:String,task:any}>('https://localhost:3000/api/tasks/tasks/ ')
  .subscribe(()=>{
    const updatedtasksdeleted = this.tasksdisplay.filter(task=>task._id!==taskid);
    this.tasksdisplay = updatedtasksdeleted;
    this.updatedtasksdisplay.next([...this.tasksdisplay]);


})
}

getUpdateListner(){
return this.updatedtasksdisplay.asObservable();
}
}
