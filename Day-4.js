<script>
//------------------------------coding on callback-----------------------//

//1
function Personal(Name, Dob, Time_of_Birth, Place_of_Birth)
{
var Nativity = "Rajahmundry"
var Martial_Status = "UnMarried"
var Religion = "Hindu"
var Community = "Telugu"
var Caste = "Balija"
var SubSect = "Krishna Balija"
var Mother_tongue = "Telugu"
var Gothram = "Mathala"
var Star = "Pushyami 3,4P"
var Height = "5'1"
var Complexion = "Medium"
var Qualification = "B.Tech(CS)"
var University = "KIET"
var Bloodgroup = "B+ve"
document.write(Name, Dob, Time_of_Birth,Place_of_Birth, Nativity, Martial_Status,Religion,
 Community, Caste, Gothram, Star, Height, Complexion, Qualification,University, Bloodgroup)
 }
function details(callback)
{
callback("Bindu", "24/05/1997", "1am", "bellary")
}
details(Personal)

//2
function fare(base_fare, passenger_service_fee)
{
var User_Development_Fee = "Rs. 350"
var Govt_Service_Tax ="Rs. 51"
var Total = "Rs. 1,435"
var Round_Trip_Discount=" Rs. 105"
var You_Pay = "Rs. 1,330"
document.write(base_fare, passenger_service_fee, User_Development_Fee ,  Govt_Service_Tax ,
 Total,  Round_Trip_Discount,  You_Pay)
 }
 function details(callback)
 {
 callback("Rs.850", "Rs. 1050")
 }
 details(fare)

//3 
function home(Facing, Flooring)
{
var Rent =" 17,000 Negotiable (? 13 per sqft)"
var Other_Charges= "water and electricity"
var Address = "Close to Market New thippasandra, Close to Market, Bangalore  East - 560075 see on map"
var Project_Society = "ME"
var Area = "1300 sqft (covered)"
var Tenants_Preferred = "Family, Non-Vegetarians, Without Company Lease, Pets allowed"
var Age_of_Construction = "5 to 10 years"
var Units_Available = "1"
document.write(Facing, Flooring, Rent, Other_Charges, Address, Project_Society, Facing,
Area, Flooring,  Tenants_Preferred ,  Age_of_Construction, Units_Available)
}
function house(callback)
{
callback("east", "vitirified")
}
house(home)

//4
function tirupati(Ticket_Type, Name_of_the_pilgrim,Email,Booked_Date_Time)  
{
var Date = "Dec 1st"
var Day = "Tuesday"
var Time = "3:30 Am"
var Per_Slot_Tickets = 2000
var Booking_No = "IS151110080016"
var Order_No = "010600013554"
var Amountin_figures= "220"
var Proof_of_ID="Aadhaar Card 733498928758"
var Booked_Date_Time = "11062015 11:36:46"
var No_of_Persons= "1"
var Name_of_the_Seva_Darshan = " Archana "
var Reporting_Time = "4:00 AM"
var Performance_Date_Time = "12012015 AM 4:30:00"
var Privileges_to_the_Seva =  "Two Small Laddu"
var Booked_Time = "11:36:46"
var Accommodation_Type = "Rs 500 Tirumala"
var Available = "350"
var No_of_Tickets = "1"
var Rate = "50 to 2000"
document.write(Ticket_Type, Name_of_the_pilgrim,Email,Booked_Date_Time, Date, Day, Time, 
Per_Slot_Tickets, Booking_No, Order_No ,Amountin_figures, Proof_of_ID,
No_of_Persons, Name_of_the_Seva_Darshan, Reporting_Time ,Performance_Date_Time, Performance_Date_Time,
Privileges_to_the_Seva, Booked_Time,  Accommodation_Type, Available, No_of_Tickets,Rate)
}
function darshan(callback)
{
callback("Special Entry Darshan", "venkatesh",  "venkateshprofessional7@gmail.com", "11062015 11:36:46")
}
darshan (tirupati)

//6
function Details(Mobile, Residence_Number, Skill_Relevant_Experience)
{
var Name = "Jai Venkateswara Technologies"
var Educational_Qualification = "BTECH MCA MBA BSC MSC"
var Date_Of_Birth = "2/6/1988"
var Communication_Address = "233/3 Ground floor new thippasandra"
var Residence_Number = 08025216666
var Mobile = 9900367097
var Email = "venkatesh.db@gmail.com"
var Total_IT_Exp = "1 years"
var Reporting_Manager = "Venkatesh"
document.write(Mobile, Residence_Number, Skill_Relevant_Experience, Name,  Educational_Qualification,
Date_Of_Birth, Communication_Address,Mobile , Email,  Total_IT_Exp,  Reporting_Manager )
}
function details_1(callback)
{
callback( "9900367097", "08025216666", "C CPP all Lang & 1 years")
}
details_1(Details)

//7
function Company(Photo_ID_Card, ID_Card_No, Email_Address)
{
var Name = "JVT"
var Age = "5"
var Gender = "Male"
var Name = "Mr. venkatesh"
var Age = "25"
var Gender = "Male"
var Email_Address_a = "venkatesh.db@gmail.com"
var Address = "BEML Main Road"
var City= " Bangalore"
var State = "Karnataka"
var Zip_Pincode = "560075"
var Country = "India"
var Mobile_No = "09900367097"
var Photo_ID = "Passport"
var Photo_ID_No = "G3839975"
document.write(Photo_ID_Card, ID_Card_No, Email_Address,  Name, Age, Gender, 
Name, Age, Gender, Email_Address_a, Address, City,  State, Zip_Pincode,Country,
 Mobile_No, Photo_ID, Photo_ID_No)
 }
 function info_1(callback)
 {
 callback(  "Voter_Id_or_Ration_card", "ASUPB590F", "info@jvtechnologies.co.in")
 }
 info_1(company)
 
//8
function Driver_info(Driverlicense_number, Employee_type)
{
var Last_name= "kumar" 
var First_name="Pavan"
var Middle_name="Bijjavaram"
var Driver_license_state="karnataka "
var Drivers_license_country="India "
var Civilian_type= "around india "
var Date_of_birth=12-07-1992 
var City_of_birth="rajampet"
document.write(Last_name, First_name, Middle_name,  Driverlicense_number, 
Drivers_license_country, Civilian_type, Employee_type,  Date_of_birth,City_of_birth)
}
function Driver_details(callback)
{
callback("ka50201500006939", "software engineer ")
}
Driver_details( Driver_info)

//9
function Car_Details(POWER_STEERING,  DATE_OF_REGISTRATION, RTO_LOCATION)
{
var City = "Kolkata"
var FUEL_TYPE = "Petrol"
var KMS_Driven = "29,479 KM"
var COLOUR = "Brown"
var NUMBER_OF_OWNERS = 1
var INSURANCE_TYPE = "Expired"
var INSURANCE_EXPIRY = "N/A"
var MANUFACTURING_YEAR = 2012
var REGISTRATION_TYPE = "Individual"
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
function Manfacture(callback)
{
callback("Yes", "25-May-2012",  "beltala")
}
Manfacture(Car_Details)



let arr_d = ["21GB", "30mbps", "32mbps"]
document.write(arr_d[0], arr_d[1])

let arr1_d = new Map()
arr1_d.set("a", 5)
document.write(arr1_d.get("a"))

let lic_policy = ["309", "07/11/2021", "bengaluru", "6713", "saravanam"]
document.write(lic_policy[0], lic_policy[3])

let lic_policy1 = new Map()
lic_policy1.set("s", 6)
document.write(lic_policy1.get("s"))


let details = ["pavan", "kumar", "bijjavram", "ka5746732", "karnataka", "India",
"around India", "software engineer", "rajampet"]
document.write(details[4], details[6], details[8], details[3])

let details_1 = new Map()
details_1.set("b",10)
document.write(details_1.get("b"))

let information = ["55", "5.8", "brown", "male", "7899977989", "kadapa", "ap", "India"]
document.write(information[1], information[4], information[7], information[0])

let information_1 = new Map()
information_1.set("v", 4)
document.write(information_1.get("v"))

let health = ["sathish", "105678907890", "044 22245", "56725", "male",
"yes", "7f,kaveri road, velur", "105", ":08/09/15 and 08:15", "08/09/15"]
document.write(health[6], health[4], health[9], health[1], health[2])

let health_care = new Map()
health_care.set("q", 9)
document.write(health_care.get("q"))

let banking = ["SBI Bank", "29/05/14", "19:48", "SJNBL48", "xxxx xxxxx xxxx 0516", "Bangalore Main Branch", "072",
"500.00", "xxxxxxxxxx05 xx01", "www.statebankof india.com"]
document.write(banking[8], banking[7], banking[6], banking[2], banking[0],
banking[10], banking[4])

let banking_sbi = new Map()
banking_sbi.set("a", 3)

let arr = [1134588, 145335, "10.245.97.123")
document.write(arr[0])

//Appearance_information.method()

let Vehicle_information =
 {
	Vehicle_type : "light motor vehicle- car", 
    Colour : "red", 
    Engine_number : "kp98gtyihhhi7797" ,
    Chassis_number : "tc5678898335r45" ,
    Company : "BMW"
}
Vehicle_information.vehicle = function () 
{
	document.write(this.Vehicle_type, this.Colour, this.Engine_number, this.Chassis_number, this.Company)
}
Vehicle_information.vehicle()

//inverter_ups.method()
let computer_ups_specification = 
{
model:"exide-digital600",
inputp_voltage:"230v ac",
frequency:"50hz",
output_voltage:"230v ac",
battery_type:"sealed maintenance free",
battery_capacity:"12volt 7ah",
battery_backup:"12 to 20 mints",
recharge_time:"5 to 6 hours",
weight:"6.1 kg",
}
computer_ups_specification.inverter = function()
{
document.write(this.model, this.input_voltage, this.frequency, this.output_voltage,
this.battery_type, this.battery_capacity, this.battery_backup, this.recharge_time, this.weight)
}
computer_ups_specification.inverter()

let visiting_card_details =
 {

name: "naresh" ,
mail_id: "naresh.jvt@gmail.com" ,
contact_no:"+91 9944860792",
company_name:"jvt" ,
designation:"programmer",
address:"230/3 2nd floor hal3rd stage new thippasandra bangalore-560075",
}
visiting_card_details.info = function()
{
document.write(this.name, this.mail_id, this.contact_no, this.company_name, 
this.designation, this.address)
}
visiting_card_details.info ()

let tv_details = 
{
Model:"LG55LHX",
LED_lighting:"Backlight w/Local Dimming",
Sizes:" 55 inches",
Type_of_240Hz:"scanning Backlight (240 HZ “effect”)",
Wireless_HDMI: "yes",
USB: "USB 2.0 (pictures, music,videos)",
Built_in_videoservice: "youtube",
price_RS: "55000",
}
tv_details.specification = function()
{
document.write(this.model, this.LED_lighting, this.Sizes, this.Type_of_240Hz, 
this.Wireless_HDMI, this.USB, this.Built_in_videoservice,this.price_RS)
}
tv_details.specification()

let laptop_specification = 
{
model : "LGp430",
os: "Windows 7 home base, Premium or professional",
Processor: "Second Generation Intel Core i3,i5 or i7 processor",
RAM: "upto 8GB",
Screen: "14.0 inch HD-LCD -backlit",
Resolution: "1366*768",
Weight: "4.28 pound",
Storage :"320GB",
Graphics: "Intel HD Graphics",
Networking: "802.11 b/g/n,bluetooth 3.0",
Battery_life : "6-cell Battery",
Cost_RS: "50,000",

get() 
{
document.write(this.model, this.os, this.Processor, this.RAM, this.Screen, 
this.Resolution, this.Weight, this.Storage, this.Graphics, this.Networking,this.Battery_life, this.Cost_RS)
}
}
laptop_specification.os = function()
{
}
laptop_specification.get()


</script>
