
let speed_Post =
{
Post_office_Details: "New Thipasundra<423203>",
tracking_Number: "EM423395510IN",
Counter_No: "1",
op_code:"012",
From_address: "xxxxxx",
To_Address: "xxxxxx",
wgt: "20grms",
Amt : "39.00",
dateTime: "08/04/2013 16:01",
Taxes:"Rs.4.00",
set()
{
document.write(this.Post_office_Details, this.tracking_Number, this.Counter_No,
this.op_code, this.To_Address, this.wgt, this.Amt, this.dateTime, this.Taxes)
}
}
speed_Post.details = function()
{
}
speed_Post.set()

let Vehicle_Registration_Certificate =
{
Registration_Number: "TN 22 CY 2917",
Owner_Name : "Sachin",
S_W_Do: "Sirinivasan",
Permanent_Address:"xxxxxxxxx",
Temporary_Address:"xxxxxyyyyy",
Dealer: "Murugan Vehicles& Services Limited",
Classis_No : "5793603",
Engine_No: "0G3N72505757",
Class_of_Vehicle: "LMV (CAR)",
maker_Name: "Maruthi SuzUKI India LTD",
No_of_Cylinder: "3",
Weight_KG : "740",
wheel_Base: "2360",
Seating_Capacity: "5",
Fuel : "Petrol",
Cubic_cylinder:"796",
output() 
{
document.write = (this.Registration_Number, this.Owner_Name, this.S_W_Do, this.Permanent_Address,
this.Temporary_Address, this.Dealer, this.Classis_No, this.Engine_No, this.Class_of_Vehicle, this.maker_Name, 
this.No_of_Cylinder, this.Weight_KG, this.wheel_Base, this.Seating_Capacity, this.Fuel, this.Cubic_cylinder)
}
}
Vehicle_Registration_Certificate.book = function()
{
}
Vehicle_Registration_Certificate.output()

let Licence_which_state_provide =
{
DL_No: "TN-41230120012921",
Name: "bindu",
S_D_W_of:"sadashivappa",
Address:"bellary",
D_O_B:"24/05/1997",
Licence_for: "M/cycl &LMV",
Licence_provide_on : "02/05/2012",
validity: "01/05/2032",
policy()
{
document.write(this.DL_No, this.Name, this.S_D_W_of, this.Address, this.D_O_B,
this.Licence_for, this.Licence_provide_on, this.validity)
}
}
Licence_which_state_provide.in = function()
 {
 }
 Licence_which_state_provide.policy()
 
 //--------------------------coding on validation------------------------------//

//1
function netusage(totalmbdownloaded, mobiledownloadspeed)
{
if(totalmbdownloaded >= 100)
{
return "usage is completed"

}
else
{
document.write(totalmbdownloaded,  mobiledownloadspeed)
return "usage not completed"
}
}
var result = netusage("120", "32mbps")
document.write(result)

function faresummary(Base_fare, Passenger_Service_Fee,User_Development_Fee)
//var total = "1435"
{
if(Passenger_Service_Fee == "Rs 149")
{
//var total = "1435"
return "tickets not available"
}
else
{
document.write(Base_fare, Passenger_Service_Fee, User_Development_Fee)
}
}
var fare = faresummary("Rs 1650", "Rs 125", "Rs 350")
document.write(fare)

3.function attribute(sales, face_value, net_profit, last_bonus)
{
if(net_profit != 20.5)
{
return "loss"
}
else
{
document.write(sales, face_value, net_profit, last_bonus)
}
}
var profitable = attribute("10,501", 2, "-13.05")
document.write(profitable)

4.function report_card(PE_ratio, EPS, Sales, face_value, net_profit_margin, last_dividend, return_on) 
{
if(Sales == 575)
{
return "successfull"
}
else
{
document.write(PE_ratio, EPS, Sales, face_value, net_profit_margin, last_dividend, return_on)
}
report_card("22", "77.97", "575", "10", "89.25", "1.2", "14.55")

5.let Banking_data = { 
BankName : "SBI Bank",
Date     : "29/05/14",
Time     : "19:48",
ATMNo    : "SJNBL48",
CARDNo   : "xxxx xxxxx xxxx 0516",
BRNCHNAME: "Bangalore Main Branch",
TxnNo    : 2907,
Responsecode : 072,
WithDrawl: "500.00",
FromAC   : "xxxxxxxxxx05 xx01",
ModRS    : "0.00",
AvlBal   : "1000.00",
Website  : "www.statebankof india.com",
}

if(Banking_data.CARDNo.length == 20)
{
    document.write("valid data");

}
else
{
    document.write("Invalid data");

}
if(Banking_data.BankName == "SBI Bank" )
{
    document.write("SBI Branch");
}
else
{
   document.write("other banks");
}

6.

function Tirupati(email, amount, proof, bookeddata, noofpersons, 
nameoftheseva, reportingtime, performancedate, available)
{
email = email
 amount = amount
 proof = proof
 bookeddata = bookeddata
 noofpersons = noofpersons
 nameoftheseva = nameoftheseva 
 reportingtime = reportingtime
 performancedate = performancedate
 available = available
if(proof != aadhar_card)
{
return "slot allotted"
}
else
{
document.write(email, amount, proof, bookeddata, noofpersons, 
nameoftheseva, reportingtime, performancedate, available)
}
}
var Darshan = Tirupati("binduk043@gmail.com", "220","aadhar_card", 
"11062525 11:35", "1", "archana", "4am", "2laddoos", "1")
document.write(Darshan)

7.
function Personal()
{
Name = "Naga Lalitha Kumari Bezawada"
Dob = "18-02-1989"
Time_Of_Birth = "7.30-8PM"
Place_Of_Birth = "Samalkota"
Nativity = "Rajahmundry"
Martial_Status = "UnMarried"
Religion = "Hindu"
Community = "Telugu"
Caste = "Balija"
Sub_Sect = "Krishna Balija"
Mother_Tongue = "urdu"
Gothram = "Mathala"
Star = "Pushyami"
Height = "5'1'"
Complexion = "Medium"
Qualification = "B.Tech(CS)"
University = "KIET,Kakinada"
Blood_Group = "B+ve"
if(Blood_Group != "B+ve")
{
return "Details are invalid"
}
else
{
document.write(Name, Dob, Time_Of_Birth , Place_Of_Birth, Nativity, Martial_Status, 
Religion, Community, Caste, Sub_Sect, Mother_Tongue, Gothram, Star,Height, Complexion, 
Qualification, University, Blood_Group)
}
if(Mother_Tongue == "Telugu")
{
return "Details are valid"
}
else
{
document.write("invalid")
}
if(Caste != "Balija")
{
return "invalid caste"
}
else
{
document.write(" valid caste")
}
}
var Info = new Personal()
document.write(Info)

