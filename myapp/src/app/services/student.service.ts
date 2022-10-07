export class StudentService{
    students=[];
    addStudent(name:string,status:string){
        this.students.push({name:name,status:status});
    }
    updateStatus(id:number,newstatus:string){
this.students[id].status=newstatus;
    }

}