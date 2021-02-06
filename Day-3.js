//--------------------"code on constructor"---------------------------//


<script>

1.class Emertxe 
{
constructor(name, course)
 {
this.name = name
this.course = course
}
display() 
{
document.writeln(this.name)
}
set (course) 
{
document.write(this.course)
}
}
let embedded = new Emertxe("python")
document.writeln(embedded)
embedded.display()

2.class bindu
 {

constructor(name)
 {
this.name = name
}
display()
 {
document.write(this.name)
}
}
let sree = new bindu("kori")
sree.display()

 company = [ "jvt", "programmer", "blore" ]
document.writeln(company[0], company[1])


3.class Company
 {
constructor(name, desgn, salary, locn) 
{
this.name =name
this.desgn=desgn
this.salary=salary
this.locn=locn
}
display() 
{
document.write(this.name, this.desgn, this.salary, this.locn)
}
}

let corporate = new Company("jvt", "programmer",22000, "blore")
corporate.display()

4.Company = ["infyosis", "testing", "450000", "mangalore"]
document.writeln(Company[0])

5.class Account
 {
constructor() 
{
this.num =num
this.bb = bb
this.ipaddresss = ipaddress
}
display() 
{
document.writeln(this.num, this.bb, this.ipaddress)
}
}
let manju = new Account(1135497, 135672829, 10.245.97.123")
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
constructor(bank, date, time, atmno, branch, Txnno, Responsecode, withdrawl) 
{
this.bank = bank
this.date = date
this.time = time
this.atmno = atmno
this.branch =branch
this.Txnno = Txnno
this.Responsecode = Responsecode
this.withdrawl =withdrawl
}
statement(acc, bal, web) 
{
this.from_ac =acc
this.availablebal = bal
this.website =web
document.write(this.bank, this.date, this.time, this.atmno, this.branch, 
this.Txnno, this.Responsecode, this.withdrawl,
this.availablebal, this.website)
}
}
let SBI = new Banking("SBI", 29/05/14, "19:48", "SJNBL48",  "bangalore main branch" , 2907, 072, 5000)
SBI.statement(02462913486, 1000, "www.sbi.com")

9.class Visiting
{
constructor(name, id, num, company, desgn, address) 
{
this.name = name
this.mailid = id
this.contact = num
this.company =company
this.designation = desgn
this.address = address
}

details() 
{
document.write(this.name, this.mailid, this.contact, this.company,
this.designation, this.address) 
}
}
let card = new Visiting("naresh","naresh.jvt@gmail.com",  998765789, "Intimetec", "programmer",  "new thippasandra" )
card.details()

10.class Electric 
{
constructor(web, pwd, cnum, bilstatus, uname, bank, pstatus, pwd) 
{
this.website = web
this.password = pwd
this.consumernum = cnum
this.billingstatus = bilstatus
this.username = uname
this.bank = bank
this.paymentstatus = pstatus
this.password = pwd
}

paid()
 {
document.write(this.website, this.password, this.consumernum, 
this.billingstatus, this.username, this.paymentstatus,
this.password, this.bank)
}
}
let netbanking = new Electric("www.tnebnet.org", 1234567, 3456789, "paid_unpaid", "kumar007", "sbi", "successfull", 1234567)
netbanking.paid()

//--------------------------------coding on static----------------------------//

1.class supercoder
{
static passedout = 2019
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
let code = new supercoder(24-10-1997, "bindu")
code.get()
supercoder.engineering()

2.class Details
{
static place = "rajimpet"
constructor(lname, fname, mname, dob)
{
this.lastname = lname
this.firstname= fname
this.middlename= mname
this.dob= dob
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
let developer = new Details("kumar", "Pavan", "bijjavaram", 12-07-1992)
developer.get()
Details.software()

3.class Verification
 {
constructor(name, age, gender, address, city, state, zip, country) 
{
this.name = name
this.age = age
this.gender = gender
this.address = address
this.city = city
this.state = state
this.zip = zip
this.country = country
}
get () 
{
document.write(this.state, this.zip,  this.country, this.city, this.address, this.gender, this.age, this.name)
}
}
let passport = new Verification("JVT", 5, "male", "BEML main road","blore","Karnataka", 560075,   "India" )
passport.get()


4.class Appearance  
{
static state = "ap"
static country = "India"
constructor(weight, height, color, gender, haddress, phone, mobile)
 {
this.weight = weight
this.height = height
this.eyecolor = color
this.gender = gender
this.homeaddress =haddress
this.phone = phone
this.mobile =mobile
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
let information = new Appearance(55, 5.8, "brown", "male", "#6/96, rajampet, kadap", 975545445, 855377745  )
information.get()
Appearance.set()

5.class Vehicle 
{
static enginenum = "kp98gtyihh457797"
static classnum = "tc56788990865r45"
static company = "BMW"
constructor(type, color) 
{
this.vehicletype = type
this.color = color
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
let info = new Vehicle("light motor vehicle  car",  "red )
info.get()
Vehicle.license()

6.class System
 {
static description = "work group"
static edition = "windows 7"
static product = "00426-OEM-8992662"
 constructor( rating, processor,RAM,stype , penandtouch ) 
{
this.rating = rating
this.processor =processor
this.RAM =RAM
this.systemtype =stype 
this.penandtouch =penandtouch
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
let properties = new System(4.5,"Intel", "4gb", "64-bit" ,  "no" )
properties.get()
System.computer()

7.class Movie 
{
static nooftickets = "5"
static seatnum = "c1 c2 c3 c4 c5"
static totalamount = "Rs.750.00"
constructor()
 {
this.theatre = theatre
this.screen =screen
this.name =name
this.class =class
this.ticket = ticket
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
let direction = new Movie( "PSS multiplex", "screen 3","c, cpp",  "first", "Rs.1050.00")
direction.get()
Movie.film()

</script>
