export class Employee{
  constructor(
    public employeeId:number,
    public employeeCode:string,
    public firstName:string,
    public middleName:string,
    public lastName:string,
    public designation:string,
    public email:string,
    public gender:string,
<<<<<<< HEAD
    // public dateOfJoining:Date,
=======
    public dateOfJoining:Date,
>>>>>>> e4d16d1883385f2176f481207501d4a47ae71106
    public reportingManagerId:number,
    public employmentType:string,
    public status:string,
    public deliveryUnitId:number,
    public businessUnitId:string,
<<<<<<< HEAD
    // public exitDate:Date,
=======
     public exitDate:Date,
>>>>>>> e4d16d1883385f2176f481207501d4a47ae71106
    public exitRemarks:string,
    public isDeleted:string,
    public uuid:string,
    public createdBy:number,
<<<<<<< HEAD
    // public createdOn:Date,
    public modifiedBy:string,
    // public modifiedOn:Date,
=======
     public createdOn:Date,
    public modifiedBy:string,
     public modifiedOn:Date,
>>>>>>> e4d16d1883385f2176f481207501d4a47ae71106
  ){}
}

