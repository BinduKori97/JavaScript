class person
{
            constructor(fname, lname, rollno)
        {
            this.fname=fname;
            this.lname=lname;
            this.rollno=rollno;
        };   
        disp()
        {
            return this.fname+" "+this.lname+" "+this.rollno;
        }
        name1 = "almas";
        pos1 = "enemy";
        disp1()
        {
            if(typeof(this.pos1)=="string")
            {
                return this.pos1;
            }
            else{
                return "sorry";
            }
        };
        name2 = "almas";
        pos2 = "enemy";
        disp2(value)
        {
          return this.pos2=value;
        };
    }
    let obj1 =new person("bindu", "sree",23);
    console.log(obj1.fname);
    console.log(obj1.lname);
    console.log(obj1.disp());
    console.log(obj1.disp1());
    console.log(obj1.disp2("swetha"));

    class windows
    {
     constructor(company, name, companyid, designation, salary)
        {
            this.company=company;
            this.name=name;
            this.companyid=companyid;
            this.designation = designation;
            this.salary = salary;
        };   
        disp()
        {
            return this.company+" "+this.name+" "+this.companyid+" "+this.designation+" "+this.salary;
        }
        desgn1 = "developer";
        salary1 = "5.5lakhs";
        disp1()
            {
            if(typeof(this.salary1)=="string")
            {
                return this.salary1;
            }
            else
            {
                return "sorry";
            }
        };
        //*name2 = "almas";
      //  pos2 = "enemy";
      //  disp2(value){
       //    return this.pos2=value;
       // };
    }
    let obj2 =new windows("Intimetec", "kori", "In222", "programmer", "4.5lakhs");
    console.log(obj2.company);
    console.log(obj2.companyid);
    console.log(obj2.disp());
    console.log(obj2.disp1());
    //console.log(obj2.disp2("swetha"));

    class travels
    {
                constructor(busname, departure, arrival, designation)
            {
                this.busname=busname;
                this.departure=departure;
                this.arrival=arrival;
                this.designation= designation;
            };   
            disp()
            {
                return this.busname+" "+this.departure+" "+this.arrival+" "+this.designation;
            }
            bus = "Indira";
            dep = "Blore";
            disp1()
            {
                if(typeof(this.bus)=="string")
                {
                    return this.bus;
                }
                else
                {
                    return "sorry";
                }
            };
             bus2 = "Indira";
             dep2 = "blore";
            disp2(value)
            {
              return this.dep2=value;
            }
        
            
        }
    
        let obj3 =new travels("Rajahamsa", "bangalore", "9am", "Tirupathi");
        console.log(obj3.busname);
        console.log(obj3.arrival);
        console.log(obj3.designation);
        console.log(obj3.disp());
        console.log(obj3.disp1());
        console.log(obj3.disp2("Bellary"));