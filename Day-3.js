<script>


3.class Company
 {
constructor() 
{
this.name = "jvt"
this.desgn="programmer"
this.salary="22000"
this.locn="blore"
}

display() 
{
document.write(this.name, this.desgn, this.salary, this.locn)
}
}

let corporate = new Company()
corporate.display()

4.Company = ["infyosis", "testing", "450000", "mangalore"]
document.writeln(Company[0])

5.class Account
 {
constructor() 
{
this.num = "1135497"
this.bb = "11223456"
this.ipaddresss = "10.245.97.123"
}
display() 
{
document.writeln(this.num, this.bb, this.ipaddress)
}
}
let manju = new Account()
manju.display()

6.Account = ["1133456", "1324567"]
document.writeln(Account[0], Account[1])

7.class Test
{
constructor()
 {
this.WBc = "4.4"
this.RBC = "4.05"
this.Haemoglobin = "14.83"
this.Hematocrit = "41.7"
this.mcv = "86"
this.mch = "30"
this.neutriphils = "47" 
this.monocytes = "3"
document.write(this.WBc, this.RBC, this.Haemoglobin, this.Hematocrit, 
this.mcv, this.mch, this.neutriphils, this.monocytes )
}
flag ()
 {
this.WBc = "nil"
this.RBC = "low"
this.Haemoglobin = "nil"
this.Hematocrit = "nil"
this.mcv = "nil"
this.mch = "nil"
this.neutriphils = "high"
this.monocytes = "low"
document.write(this.WBc, this.RBC, this.Haemoglobin, this.Hematocrit, 
this.mcv, this.mch, this.neutriphils, this.monocytes )
}
units() 
{
this.WBc = "X10E3/UL"
this.RBC = "X10E6/UL"
this.Haemoglobin = "g/dl"
this.Hematocrit = "%"
this.mcv = "FI"
this.mch = "Pg"
this.neutriphils = "%"
this.monocytes = "%"
document.write(this.WBc, this.RBC, this.Haemoglobin, this.Hematocrit, 
this.mcv, this.mch, this.neutriphils, this.monocytes )
}
lab ()
 {
this.WBc = "01"
this.RBC = "01"
this.Haemoglobin = "01"
this.Hematocrit = "01"
this.mcv = "80-98"
this.mch = "27-34"
this.neutriphils = "14-46"
this.monocytes = "4-13"
document.write(this.WBc, this.RBC, this.Haemoglobin, this.Hematocrit, 
this.mcv, this.mch, this.neutriphils, this.monocytes )
}
referenceinterval()
 {
this.WBc = "4.0-10.5"
this.RBC = "4.10-5.60"
this.Haemoglobin = "12.5-17.0" 
this.Hematocrit = "36.0 - 50.0"
this.mcv = "01"
this.mch = "01"
this.neutriphils = "02"
this.monocytes = "02"
document.write(this.WBc, this.RBC, this.Haemoglobin, this.Hematocrit, 
this.mcv, this.mch, this.neutriphils, this.monocytes )
}
}
let result  = new Test()
result.flag()
result.units()
result.lab()
result.referenceinterval()

8.class Banking
{
constructor() 
{
this.bank = "SBI"
this.date = 29/05/14
this.time = "19:48"
this.atmno = "SJNBL48"
this.branch = "bangalore main branch"
this.Txnno = "2907"
this.Responsecode = "072"
this.withdrawl = "5000"
}
statement() 
{
//this.froma/c ="02462913486"
this.availablebal = "1000"
this.website = "www.sbi.com"
document.write(this.bank, this.date, this.time, this.atmno, this.branch, 
this.Txnno, this.Responsecode, this.withdrawl,
this.availablebal, this.website)
}
}
let SBI = new Banking()
SBI.statement()

9.class Visiting
{
constructor() 
{
this.name = "naresh"
this.mailid = "naresh.jvt@gmail.com"
this.contact = "998765789"
this.company = "Intimetec"
this.designation = "programmer"
this.address = "new thippasandra"
}

details() 
{
document.write(this.name, this.mailid, this.contact, this.company,
this.designation, this.address) 
}
}
let card = new Visiting()
card.details()

10.class Electric 
{
constructor() 
{
this.website = "www.tnebnet.org"
this.password = "1234567"
this.consumernum = "23468864"
this.billingstatus = "paidunpaid"
this.username = "kumar007"
this.bank = "sbi"
this.paymentstatus = "sucessfull"
this.password = "1234567"
}

paid()
 {
document.write(this.website, this.password, this.consumernum, 
this.billingstatus, this.username, this.paymentstatus,
this.password, this.bank)
}
}
let netbanking = new Electric()
netbanking.paid()

//--------------------------------coding on static----------------------------//

1.class supercoder
{
static passedout = "2019"
constructor() 
{
this.dob = "24-05-1997"
this.name = "bindu"
}
get()
 {
document.writeln(this.name, this.dob)
}
static engineering() 
 {
     document.write(supercoder.passedout)

}
}
let code = new supercoder()
code.get()
supercoder.engineering()

2.class Details
{
static place = "rajimpet"
constructor()
{
this.lastname = "kumar"
this.firstname= "Pavan"
this.middlename= "bijjavaram"
this.dob= "12.07.1992"
}
get()
{
document.writeln(this.dob, this.middlename, this.firstname, this.lastname)
}
static software()
{
document.write(Details.place)
}
}
let developer = new Details()
developer.get()
Details.software()

3.class Verification
 {
constructor() 
{
this.name = "JVT"
this.age = 5
this.gender = "male"
this.address = "BEML main road"
this.city = "blore"
this.state = "Karnataka"
this.zip = 560075
this.country = "India"
}
get () 
{
document.write(this.state, this.zip,  this.country, this.city, this.address, this.gender, this.age, this.name)
}
}
let passport = new Verification()
passport.get()


4.class Appearance  
{
static state = "ap"
static country = "India"
constructor()
 {
this.weight = 55
this.height = "5.8"
this.eyecolor = "brown"
this.gender = "male"
this.homeaddress = "#6/96, rajampet, kadap"
this.phone = 975545445
this.mobile = 855377745
}
get ()
 {
document.write(this.mobile, this.phone, this.homeaddress, this.gender, this.eyecolor, this.height, this.weight)
}
static set()
 {
document.write(Appearance.state, Appearance.country)
}
}
let information = new Appearance()
information.get()
Appearance.set()

5.class Vehicle 
{
static enginenum = "kp98gtyihh457797"
static classnum = "tc56788990865r45"
static company = "BMW"
constructor() 
{
this.vehicletype = "light motor vehicle  car"
this.color = "red"
//document.write(this.color, this.vehicletype)
}
get() 
{
document.write(this.color, this.vehicletype)
}
static license()
 {
document.write(Vehicle.enginenum, Vehicle.classnum, Vehicle.company)
}
}
let info = new Vehicle()
info.get()
Vehicle.license()

6.class System
 {
static description = "work group"
static edition = "windows 7"
static product = "00426-OEM-8992662"
 constructor() 
{
this.rating = "4.5"
this.processor = "Intel"
this.RAM = "4gb"
this.systemtype = "64-bit"
this.penandtouch = "no"
}
get() 
{
document.write(this.rating, this.processor, this.RAM, this.systemtype , this.penandtouch) 
}
static computer() 
{
document.write(System.description, System.edition, System.product)
}
}
let properties = new System()
properties.get()
System.computer()

7.class Movie 
{
static nooftickets = "5"
static seatnum = "c1 c2 c3 c4 c5"
static totalamount = "Rs.750.00"
constructor()
 {
this.theatre = "PSS multiplex"
this.screen = "screen 3"
this.name = "c, cpp"
this.class = "first"
this.ticket = "Rs.1050.00"
}
get() 
{
document.write(this.theatre, this.screen, this.name, this.class, this.ticket)
}
static film()
 {
document.write(Movie.nooftickets, Movie.seatnum, Movie.totalamount)
}
}
let direction = new Movie()
direction.get()
Movie.film()

//---------------coding on validation---------------------------//
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







</script>
