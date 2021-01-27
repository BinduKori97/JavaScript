function Tablet()
{
var DOLO = "650MG TABLET"
var Mfg = "MICRO (Other Products from MICRO)"
var Comp = "Paracetamol 650 MG"
var Form = "TABLET"
var Pack_Size =  "15 (Units)"
var Delivery_Time = "4 - 24 HRS"
var MRP_perpack = "Rs. 33.46 Save upto 15%"
document.write(DOLO )
document.write( Mfg)
document.write(Comp)
document.write(Form)
document.write(Pack_Size)
document.write(Delivery_Time)
document.write(MRP_perpack)
}
Tablet()

//15
function Brand_Concept()
{
var Product_Code_AUTCOMBOF = "CONVIVA67682242A608C"
var  Product_Weight = "150 gm"
var In_The_BoxPack = "2 Perfumes"
var Quantity = "70 ml each"
var Effective_Price = "Rs 194 after cashback"
document.writeln( Product_Code_AUTCOMBOF)
document.writeln(Product_Weight)
document.writeln(In_The_BoxPack)
document.writeln(Quantity)
document.writeln(Effective_Price)
}
Brand_Concept()


function Watch()
{
var Item_Code = 131843
var Rs = 349
var Type =  "Analog Watch"
var Case = "Fibre Case with Steel Back"
var Dial = "Round Dial"
var Strap = "Fibre"
var Clasp_Type = "Buckle"
var Occasion = "Casual"
var Movement = "PC21 Movement"
var Others = "One Year Warranty"
document.writeln(Item_Code)
document.writeln(Rs)
document.writeln(Type)
document.writeln( Case)
document.writeln( Dial)
document.writeln( Strap)
document.writeln(Clasp_Type)
document.writeln(Occasion)
document.writeln(Movement)
document.writeln(Others)
}
Watch()

function Car_Details()
{
var City = "Kolkata"
var FUEL_TYPE = "Petrol"
var KMS_Driven = "29,479 KM"
var COLOUR = "Brown"
var NUMBER_OF_OWNERS = 1
var POWER_STEERING = "Yes"
var INSURANCE_TYPE = "Expired"
var INSURANCE_EXPIRY = "N/A"
var MANUFACTURING_YEAR = 2012
var DATE_OF_REGISTRATION = "25-May-2012"
var REGISTRATION_TYPE = "Individual"
var RTO_LOCATION = "beltala"
document.write(City)
document.write(FUEL_TYPE)
document.write(KMS_Driven)
document.write(COLOUR)
document.write(NUMBER_OF_OWNERS)
document.write(POWER_STEERING)
document.write( INSURANCE_TYPE)
document.write(INSURANCE_EXPIRY)
document.write(MANUFACTURING_YEAR)
document.write(DATE_OF_REGISTRATION )
document.write(REGISTRATION_TYPE)
document.write( RTO_LOCATION)
}
Car_Details()

function Job()
{
var Interview_Date = "6th Dec 2014 Saturday"
var Name = "Bindu"
var Mobile_No = 7899977989
var Alternate_Mobile_No = 9972578229
var Email_Id = "binduk2497@gmail.com"
var Alternate_Email_Id = "bindu.kori@intimetec.com"
var DOB = "24/05/1997"
var Gender = "female"
var Marital_Status = "single"
var Current_Company = "Intimetec"
var Current_Designation = "Developer"
var Notice_period = "1year"
var Current_CTC = "5.5lakhs"
var Expected_CTC = "6.6lakhs"
document.write(Interview_Date , Name , Mobile_No, Alternate_Mobile_No, Email_Id,
Alternate_Email_Id, DOB, Gender,Marital_Status, Current_Company,  Current_Designation,
Notice_period,  Current_CTC , Expected_CTC)
 }
Job()

class company
{
name = "JVT"
desgn = "programmer"
salary = "2.3 or 23000"
locn = "blore"
}
var JVT = new company()
document.write (JVT.name)
var programmer = new company()
document.write (programmer.desgn)


class Tirupathi
{
constructor()
{
this.tickettype = "special entry darshan"
this.date = "dec 1st"
this.day = "tuesday"
this.time = "3:30am"
this.perslotticekts = "2000"
this.bookingnum = "IS151110080016"
this.ordernum = "0100689579"
this.name = "bindu"
document.write(this.tickettype, this.date, this.day, this.time, this.perslotticekts,
this.bookingnum, this.ordernum, this.name)
}
Darshan(email, 	amount, proof, bookeddata, noofpersons, 
nameoftheseva, reportingtime, performancedate, available)
{
this.email = email
this.amount = amount
this.proof = proof
this.bookeddata = bookeddata
this.noofpersons = noofpersons
this.nameoftheseva = nameoftheseva
this.reportingtime = reportingtime
this.performancedate = performancedate
this.available = available
document.write(this.email, this.amount, this.proof, this.bookeddata,this.noofpersons, 
this.nameoftheseva, this.reportingtime, this.performancedate, this.available )
}
}
let details = new Tirupathi()
details.Darshan("binduk043@gmail.com", "220","5912343051", 
"11062525 11:35", "1", "archana", "4am", "2laddoos", "1")
//document.write(this.name, this.amount, this.proof, this.bookeddata,this.noofpersons, 
//this.nameoftheseva, this.reportingtime, this.performancedate, this.available )

class Shopping 
{
constructor() 
{
this.brand = "Scott international"
this.color = "black"
this.size = "s"
this.material = "cotton"
this.occasion = "casual"
this.pattern = "solid"
this.sleeve = "full sleeves"
this.necktype = "hooded"
this.fit = "slim"
this.gender = "men"
document.write(this.brand, this.color, this.size, this.material,  this.occasion,
this.pattern, this.sleeve, this.necktype, this.fit, this.gender)
}
Details(arrival, returnpolicy, buyfor, price)
{
this.arrival = arrival
this.returnpolicy = returnpolicy
this.buyfor =  buyfor
this.price = price
document.write(this.arrival, this.returnpolicy, this.buyfor, this.price)
}
}
let shipping = new Shopping()
shipping.Details("9days", "within 15 days from the date of shipping", "Rs453")

class Operating
{
constructor() 
{
this.os = "ios 9"
this.chipset = "APPLE A9"
this.CPU = "Dual-core"
this.GPU = "PowerVrGT7600"
this.Model = "iphone"
this.manufacturer = "Apple"
this.processor = "1Ghz"
this.ram = "512mb"
this.flash = "led"
this.videorecording = "720F"
document.write(this.os, this.chipset, this.CPU, this.GPU, this.Model, this.manufacturer,
this.processor, this.ram , this.flash, this.videorecording)
}
platform(os, chipset, cpu, gpu)
{
this.os = os
this.chipset = chipset
this.cpu = cpu
this.gpu = gpu
document.write(this.os, this.chipset, this.cpu, this.gpu)
}
battery(standby, talktime, musicplay)
{
this.standby = standby
this.talktime = talktime
this.musicplay = musicplay
document.write(this.standby, this.talktime, this.musicplay)
}
body(dimension, weight, sim)
{
this.dimension = dimension
this.weight = weight
this.sim = sim
document.write(this.dimension, this.weight, this.sim)
}
}
let mobile = new Operating()
mobile.platform("Apple A9", "Dual-core", "powervr")
mobile.battery("upto 240h", "upto 14h", "upto 50h")
mobile.body("138.3*67.1*7.1", "143g", "Nano-sim")

class Electric_bill 
{
    
	constructor (website ,password ,consumer_number , Billing_status , mode_of_payment ) 
	{
    		this.website = website
        	this.password =password
        	this.consumer_number = consumer_number
        	this.Billing_status = Billing_status
        	this.mode_of_payment = mode_of_payment
    	}
    	person_billing (choose_bank ,username , password_1, Transaction_no , payment_status )
	{
    		this.choose_bank = choose_bank
        	this.username = username
       	 	this.Transaction_no = Transaction_no
        	this.payment_status = payment_status
    	}
 	display()  
	{
    		document.write( this.consumer_number,  this.Transaction_no,  this.username)
    	}
}
var Power_consumed = new Electric_bill ("www.tnebnet.org", 987655, 23456123, "paid/unpaid", "netbanking"  )
 Power_consumed .person_billing("sbi", "kumar00", 123456, "18cv21828578437", "successful")
 Power_consumed .display()

class Emertxe 
{
constructor()
 {
this.name = "python"
this.course = "fee"
}
display() 
{
document.writeln(this.name)
}
set (fee) 
{
document.write(this.course)
}
}
let embedded = new Emertxe
document.writeln(embedded)
embedded.display()

class bindu
 {
constructor()
 {
this.name = "kori"
}
display() {
document.write(this.name)
}
}
let sree = new bindu()
sree.display()
