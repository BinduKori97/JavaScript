//1
function Mother(salary, company, address) 
{
document.write(salary, company, address)
return 0
}
Mother( "10000", "intimetec", "silk board" )

//2
function Details(name, education, dob, address, 
num, email, exp, skills, manager, pancardnum) 
{
    var designation = "software"
document.write(name, education, dob,address, num, email, exp, skills, manager, pancardnum, designation);
}
Details("jai", "BTECH", "2/6/1988", "thippasandra", "7899977978", "bindu@gmail.com", 
"1year", "c", "tarun", "ghhjs3456")

//3
function System(rating)
 {
var rating = "4.5"
var processor = "Intel"
var RAM = "4gb"
var systemtype = "64-bit"
var penandtouch = "no"
document.write(rating, processor, RAM, systemtype, penandtouch)
}
System("4.5")

//4
function Google(birthday, gender, mobile)
{
var firstname = "bindu"
var lastname = "sree"
var chooseusername = "kori"
var createapassword = "bindu245"
var email = "binduk043@gmail.com"
document.write(firstname, lastname, chooseusername, createapassword,  email, birthday, gender, mobile)
}
Google("24-05-1997", "female", "9972578229")

//5
function Health(name, id, phone, billno, age, dob)
{
var gender = "male"
var fasting= "yes"
var roomno = "105"
var enterdate = "08-09-15"
document.write(gender, fasting, roomno, enterdate, name, id, phone, age, dob)
}
Health("Venkatesh", "186346124", "7899977989", "567725", "54", "15-07-1962")

//6
function library(BookID, Bookname, BookAuthor)
{
//return 0
document.write(BookID,Bookname,BookAuthor)
}
 library("12345634","C Programming","Dennis Ritche")

//7
function L_ibrary(Issue_Date, Due_Date, IDNo)
{
	this.a = Issue_Date
	this.u = Due_Date
    	this.s =IDNo
	document.write(this.a,this.u,this.s)
    return 0
}
L_ibrary("14/01/2012","13/02/2012","2008Ec027")


//8
function Holi(date, day)
{
	}
 Holi("14-jan-21", "thursday")
document.write(date, day)

//9
function Einfo()
{
	var Name = "Jai Venkateswara Technologies"
	var EducationalQualification = "B TECH MCA MBA BSC MSC"
	var DateOfBirth = "2/6/1988"
	var CommunicationAddress = "233/3 Ground floor new thippasandra"
 	var ResidenceNumber = 08025216666
	var Mobile = 9900367097
	var Email = "venkatesh.db@gmail.com"
	var TotalITExp = "1 years"
	var SkillRelevantExperience = "C,CPP all Lang & 1 years"
 	var ReportingManager = "Venkatesh"
	var PANCARDNO = "asu675901f"
    document.write(Name,EducationalQualification,DateOfBirth ,CommunicationAddress, ResidenceNumber,Mobile,Email,TotalITExp ,SkillRelevantExperience,ReportingManager,PANCARDNO)
}
Einfo()

//10
function netconnreq(broadbanduserid)
{
	var accountno = 1135497
	var broadbanduserid = 11128550
    var	IPAddress = "10.245.97.123"
  document.write(broadbanduserid, accountno, IPAddress);

return accountno
}
 netconnreq("11128550");
 document.write("bindu")
 document.write("24/05/1997")
document.write("7899977989")

//11
function bank_details()
{
var Account_Name= "Mr. VENKATESH DUSETTI BABU"
var Address = "NO 233, GROUND FLOOR, 5TH MAIN,1ST FLOOR, NEW THIPPASANDRA,BANGALORE-560075,Bangalore"
var Date = "24 Dec 2015"
var Account_Number = "00000000167856041"
var Account_Description = "SBCHQ-GEN-PUB-IND-NONRURAL-INR"
var Branch = "NEW TIPPASANDRA, BANGALORE"
var Drawing_Power = "0.00"
var Interest_Rate = "4.0"
var MOD_Balance = "0.00"
var CIF_No = 86617689795
var IFS_Code = "SBIN0015645"
var MIC_Code = 560002189
var Nomination_Registered = "Yes"
document.write(Account_Name, Address, Date, Account_Number, Account_Description,
 Branch, Drawing_Power, Interest_Rate, MOD_Balance ,  CIF_No,  IFS_Code, MIC_Code , Nomination_Registered)
 }
 bank_details()

//12
 function home ( Units_Available1,  Age_of_Construction)
 {
 var Rent = "17,000 Negotiable (? 13 per sqft)"
 var Other_Charges = "water and electricity"
 var Address = "Close to Market New thippasandra, Close to Market, Bangalore - East - 560075 see on map"
 var Project_Society= "ME"
 var Facing = "East"
 var Area = "1300 sqft (covered)"
 var Flooring = "Vitrified"
 var Tenants_Preferred = "Family, non-Vegetarians, Without Company Lease, Pets allowed"
 var Age_of_Construction_2 = "5 to 10 years"
 var Units_Available = 1
 console.log( Units_Available1,  Age_of_Construction ,Rent ,  Other_Charges, Address,
  Project_Society, Facing, Flooring, Tenants_Preferred,  Age_of_Construction_2,Units_Available) 
 }
 home(2, "6 to 15years")
 
//13
function mother()
{
	var emotion = "happiness"
	var caring = "always she want me to be happy"
	var money = 5000
	var areuinoffice = "yes"
	var hadbrkfst = "yes"
	document.write(emotion,caring,money,areuinoffice,hadbrkfst)
}
mother()
