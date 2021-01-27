<script>
//1
class Google
{
constructor(birthday, gender, mobile, firstname, lastname, chooseusername, createapassword)
{
this.birthday = birthday
this.gender = gender
this.mobile = mobile
this.firstname = "bindu"
this.lastname = "sree"
this.chooseusername = "kori"
this.createapassword = "bindu245"
this.email = "binduk043@gmail.com"
}
display()
{
document.writeln(this.birthday, this.gender, this.mobile, this.firstname, this.lastname, this.chooseusername, this.createapassword,  this.email)
}
}
let get = new Google("24-05-1997", "female", 9972578229)
get.display()

//2
class IT_information 
{
	constructor (company_name, designation, salary, location)
    {
    	this.company_name = company_name
        this.designation = designation
        this.salary= salary
        this.location = location
    }
}
var intimetec = new IT_information ("intimetec", "software engg", 100000, "Silkboard, Banglore" )
var apple = new IT_information ("apple", "junior software engg", 20000, "Electronics city")
var Google_Company = new IT_information ("Google", "senior software engg", 30000, "sarjapur banglore")

document.writeln(intimetec.company_name,apple.designation, Google_Company.location, intimetec.salary, Google_Company.designation)

//3
let Speed_Post =
{
Post_office_Details: "New Thipasundra<423203>",
tracking_Number: "EM423395510IN",
Counter_No: 1,
op_code: 012,
From_address:"Sindigi Compound",
To_Address:"Vijaynagar",
wgt: "20grms",
amt: "39.00",
date_Time: "08/04/2013 16:01",
Taxes: "Rs.4.0",
}
Speed_Post.office  = function()
{
document.write(this.Post_office_Details, this.tracking_Number, this.Counter_No, this.op_code,
this.From_address, this.To_Address, this.wgt, this.Amt, this.date_Time, this.Taxes)
}
Speed_Post.office ()

//4
let Vehicle_Registration_Certificate=
{
Registration_Number: "TN 22 CY 2917",
Owner_Name : "Sachin",
S_W_Do: "Sirinivasan",
Permanent_Address:"Bellary",
Temporary_Address:"Bangalore",
Dealer: "Murugan Vehicles& Services Limited",
Classis_No : 5793603,
Engine_No: "0G3N72505757",
Class_of_Vehicle: "LMV (CAR)",
maker_Name: "Maruthi SuzUKI India LTD",
No_of_Cylinder: 3,
Weight_KG : 740,
wheel_Base: 2360,
Seating_capacity: 5,
Fuel : "Petrol",
Cubic_cylinder:796,
}
Vehicle_Registration_Certificate.book = function()
{
document.write(this.Registration_Number, this.Owner_Name , this.S_W_Do, this.Permanent_Address,
this.Temporary_Address, this.Dealer, this.Classis_No, this.Engine_No, this.Class_of_Vehicle, this.maker_Name,
this.No_of_Cylinder, this.Weight_KG, this.wheel_Base, this.Seating_capacity, this.Fuel , this.Cubic_cylinder)
}
Vehicle_Registration_Certificate.book()

//5
let Ticket  =
{
TransactionID:100000380284535,
PNRNo:4115023549,
Train_No_Name :"56213 / TIRUPATI PASSR",
Date_of_Booking :"14-Dec-2015",
Class:"SLEEPERCLASS",
Quota:"GENERAL",
Date_of_Journey :"04-Jan-2016",
From :"KJM",
To :"TPTY",
Boarding_At :"KJM",
DateOfBoarding:"04-Jan-2016",
Reservation_Upto :"TPTY",
Scheduled_Departure :"21:00 Hrs",
}
Ticket.details = function()
{
document.write(this.TransactionID, this.PNRNo, this.Train_No_Name , this.Date_of_Booking,
this.From, this.To, this.Boarding_At, this.DateOfBoarding, this.Reservation_Upto, this.Scheduled_Departure)
}
Ticket.details()


</script>
