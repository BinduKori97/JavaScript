
//1
class Emertxe 
{
constructor(name, course)
 {
this.name = name
this.course = course
if(name == "")
{
document.writeln("choosed course is python")
return false;
}
else if(course == "")
{
document.writeln("course should be of string type")
return false;
}
else 
{
document.writeln("registration done succesfully")
}
}

}
let embedded = new Emertxe("python", "java")


//2
function Google(firstname, lastname, chooseusername, password,  email,birthday, gender, mobile)
{
var firstname = firstname
var lastname = lastname 
var chooseusername =  chooseusername
var password =  password 
var email = email
if(firstname == "string")
{
return "enter the name"
}
else if(password.length<6)
{
alert("password must be atleast 6 characters long");
document.write()
return false;
}
document.write(firstname, lastname, chooseusername, password,  email, birthday, gender, mobile)
}
Google("24-05-1997", "female", "9972578229")

//3
function L_ibrary(Issue_Date, Due_Date, IDNo)
{
	this.Issue_Date = Issue_Date
	this.Due_Date = Due_Date
    	this.s =IDNo
        if( Issue_Date <= "29/01/2021")
        {
        document.write("take the books")
        return false
        }
        else if( Due_Date == "30/01/2021")
        {
        document.writeln("fine should be paid on 30th");
        return false;
        }
	document.write(this.Issue_Date,this.Due_Date,this.s)
    //return 0
}
L_ibrary("28/01/2021","30/01/2021","2008Ec027")


//4
function Electric_bill(website, tnebusername, password,consumer_number, billing_status,mode_of_payment, choose_bank, username,
password,  Transaction_no, payment_status)
{
this.website = website
this.tnebusername = tnebusername
this.password =  password
this.consumer_number = consumer_number
this.Billing_status=billing_status
this.mode_of_payment = mode_of_payment
this.choose_bank = choose_bank
this.username=username
this.password= password
this.Transaction_no = Transaction_no
this.payment_status=  payment_status

if(tnebusername == "")
{
document.write("enter valid username")
return false;
}

if(password == "")
{
document.write("enter password")
return false;
}

if(consumer_number == "")
{
document.write("enter number")
return false;
}

if(mode_of_payment == "net_banking" || "googlepay")
{
document.write("bill paid through online")
}
else
{
document.write("bill paid through cash")
}

if(choose_bank == "sbi" || "canara_bank")
{
document.write("choosen bank is sbi")
return false;
}
else
{
document.write("choosen bank is canara_bank")
}

if(mode_of_payment == "successfull")
{
return successfull;
}
else
{
return unsuccessfull;
}
}
let Current = new Electric_bill(" www.tnebnet.org ", "bindu", "1234567", "23456123", "paid/unpaid",
"cash", "mysore_bank", "kumar007 ", "1234567", "18cv21828578437", "successful")


//5
function bank_details()
{
var Account_Name = "Mr. VENKATESH DUSETTI BABU"
var Address = "NO 233, GROUND FLOOR, 5TH MAIN,1ST FLOOR, NEW THIPPASANDRA,BANGALORE-560075,Bangalore"
var Date = "24 Dec 2015"
var Account_Number = "00000000167856041"
var Account_Description = "SBCHQ-GEN-PUB-IND-NONRURAL-INR"
var Branch = "NEW TIPPASANDRA, BANGALORE"
var Drawing_Power = "0.00"
var Interest_Rate = "4.0"
var MOD_Balance = "0.00"
var CIF_No = 8661768979000
var IFS_Code = "MYSN0015645"
var MIC_Code = 560002189
var Nomination_Registered = "Yes"

if(Account_Name == "" || Account_Name == null)
{
document.write("name cant be blank or NULL")
return false;
}

/*if( CIF_No == "")
{
document.write("number should not exceed 10 digits")
return false;
}*/

if(IFS_Code == "SBIN0015645")
{
document.write("IFS code of SBI")
//return false;
}
else
{
document.write("IFS code of other banks")
return false;
}

if(Nomination_Registered == "Yes")
{
document.write("registered successfully")
}
else
{
document.write("nomination not registered succesfully")
return false;
}
document.write(Account_Name, Address, Date, Account_Number, Account_Description,
 Branch, Drawing_Power, Interest_Rate, MOD_Balance ,  CIF_No,  IFS_Code, MIC_Code , Nomination_Registered)
}
bank_details()

//6
function netconnreq(a_num,broadbanduserid, IP_add)
{
	var accountno = a_num
	var broadbanduserid = broadbanduserid
    var	IPAddress = IP_add
    
 if ( accountno == 1135496 )
 {
 document.write("account num verified")
 }
 else
 {
  document.write("enter the correct account number")
  return false;
  }
 
  if(IPAddress == number)
 {
 document.write("enter the number")
 return false;
 }
 
document.write(broadbanduserid, accountno, IPAddress)
}
 netconnreq(1135497,11128550,10.245.97.123 )

//7
 function Home ( Rent, Other_Charges, add, project, facing, area,,flooring, Tenants, Units_Available,  Age_of_Construction)
 {
 var Rent =Rent
 var Other_Charges = Other_Charges
 var Address = add
 var Project_Society= project
 var Facing = facing
 var Area = area
 var Flooring = flooring
 var Tenants_Preferred = Tenants
 if(Address == "Close to Market New thippasandra, Close to Market, Bangalore - East - 560075 see on map")
 {
 document.write("get in")
 }
 else
  {
  document.write("need a home in bangalore")
  return false;
  }
  
  if(Facing != "East")
  {
  document.write("need a home of east facing")
  return false;
  }
 
 if(Tenants_Preferred == "Family, non-Vegetarians, Without Company Lease, Pets allowed")
  {
 document.write("all set")
  }
  else
  {
 document.write("tenants are not allowed")
 return false;
  }
document.write( Units_Available,  Age_of_Construction ,Rent ,  Other_Charges, Address,
  Project_Society, Facing, Flooring, Tenants_Preferred) 
 }
 Home( "17,000 Negotiable (? 13 per sqft)","water and electricity",   "Close to Market New thippasandra, Close to Market, Bangalore - East - 560075 see on map",
"ME","East", "1300 sqft (covered)", "Vitrified","Family, Vegetarians, Without Company Lease, Pets allowed",   2, "6 to 15years")

//8
function Tablet(DOLO , Mfg,  Comp, Form, Pack_Size, Delivery_Time, MRP_perpack )
{
var DOLO = DOLO 
var Mfg =  Mfg 
var Comp = Comp
var Form =Form 
var Pack_Size =  Pack_Size
var Delivery_Time = Delivery_Time
var MRP_perpack = MRP_perpack 
if( DOLO == "650MG TABLET")
{
document.writeln("tablets are preferred for fever")
}
else
{
document.writeln("tablets are not preferred for fever")
return false;
}

if (Mfg == "MICRO (Other Products from MICRO)")
{
document.writeln("tablets are manfactured from the micro company")
}
else
{
document.writeln("return it to the pharmacy")
return false;
}

if( Form != "TABLET" )
{
document.writeln("tablets are required")
return false;
}

if(Pack_Size < "15 (Units)")
{
document.writeln("take upto 15units")
return false;
}

document.write(DOLO )
document.write( Mfg)
document.write(Comp)
document.write(Form)
document.write(Pack_Size)
document.write(Delivery_Time)
document.write(MRP_perpack)
}
Tablet("650MG TABLET","MICRO (Other Products from MICRO)",  "Paracetamol 650 MG","TABLET", "13 (Units)",  "4 - 24 HRS","Rs. 33.46 Save upto 15%",   )

//9
function Brand_Concept(product, weight, num, quantity, price)
{
var Product_Code_AUTCOMBOF = product
var  Product_Weight = weight
var In_The_BoxPack = num
var Quantity = quantity
var Effective_Price = price

if(Product_Code_AUTCOMBOF == "CONVIVA67682242A608C")
{
document.writeln("products are from CONVIVA brand")
}
else
{
document.writeln("products are not from CONVIVA")
}

if( In_The_BoxPack != "2 Perfumes")
{
document.writeln("invalid packaging")
return false;
}

if(Quantity < "70 ml each")
{
document.writeln("Quantity is not appropriate")
return false;
}

if(Effective_Price > "Rs 194 after cashback")
{
document.writeln("not affordable")
return false;
}
document.writeln( Product_Code_AUTCOMBOF)
document.writeln(Product_Weight)
document.writeln(In_The_BoxPack)
document.writeln(Quantity)
document.writeln(Effective_Price)
}
Brand_Concept("CONVIVA67682242A608C", "150 gm",  "2 Perfumes",  "70 ml each",  "Rs 204 after cashback")

//10

class Movie 
{
constructor(Theatre_name,Screen,movie_name,movie_certification, class1, price_per_ticket , Number_of_tickets, seat_numbers, Total_amount)
{
this.Theatre_name =Theatre_name
this.Screen = Screen
this.movie_name = movie_name
this.movie_certification = movie_certification
this.class1 = class1
this.price_per_ticket = price_per_ticket 
this.Number_of_tickets = Number_of_tickets
this.seat_numbers =seat_numbers
this.Total_amount =  Total_amount    

}
display()
{
//document.write(this.Theatre_name, this.Screen, this.movie_name, this.movie_certification,
//this.class1, this.price_per_ticket, this.Number_of_tickets , this.seat_numbers, this.Total_amount )
if(this.movie_name == "JVT")
{
 if(this.Screen == "screen 3")
 {
  document.writeln("screen is available")
 }
 else
 {
  document.writeln("screen is not available")
 }
}
else
{
document.writeln("movie is not available")
return false;
}
}
}
let Film = new Movie("PSS multiplex", "screen 3", "JVT", "U",  "first ","Rs.1050.00 ", 5, "c1,c2,c3,c4,c5 ","Rs.750.00" )
Film.display()



//11
class Electric 
{
constructor(website, bank, password, consumernum, billingstatus, username, paymentstatus, password_1) 
{
this.website = website
this.bank = bank
this.password = password
this.consumernum = consumernum
this.billingstatus = billingstatus
this.username = username
this.paymentstatus = paymentstatus
this.password_1 = password_1
}
paid()
 {
document.writeln(this.website, this.password, this.consumernum, 
this.billingstatus, this.username, this.paymentstatus,this.password, this.bank)
if(this.website == "www.tnebnet.org")
{
document.writeln("website is valid")
}
else if(this.bank == "sbi")
{
document.writeln("bankname is valid")
return false;
}
else
{
document.writeln("entered input is not valid")
return false;
}
if(this.password != this.password_1)
{
document.writeln("password is invalid")
return false;
}
if(this.consumernum < 10)
{
document.writeln("consumer number should not be less than 10")
return false;
}
if(paymentstatus == phonepe || paymentstatus == googlepay)
{
document.writeln("netbanking is acceptable")
}
}
}
let netbanking = new Electric("www.sbi.com", "sbi",  1234567, 3456789, "paid_unpaid", "kumar007",  "successfull", 1234567)
netbanking.paid()

//12
class Company
 {
constructor(name, desgn, salary, locn) 
{
this.name = name
this.desgn=desgn
this.salary=salary
this.locn=locn
}
display() 
{
if(this.name == "jvt")
{
document.writeln("companyname is valid")
return false;
}
else if(this.desgn == "programmer")
{
document.writeln("designation is suitble")
return false;
}
else if(this.salary == 22000)
{
document.writeln("worth package")
return false;
}
else if(this.locn == "blore")
{
document.writeln("location is okay")
return false;
}
else
{
document.writeln("company is not suitable")
return false;
}
}
}
let corporate = new Company("jvt", "developer", 23000, "mysore")
corporate.display()

