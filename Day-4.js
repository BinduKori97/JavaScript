//Appearance_information.method()

1.let Vehicle_information =
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
2.let computer_ups_specification = 
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

3.let visiting_card_details =
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

4.let tv_details = 
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

5.let laptop_specification = 
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

6.let speed_Post =
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

7.let Vehicle_Registration_Certificate =
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

8.let Licence_which_state_provide =
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

9.let arr_d = ["21GB", "30mbps", "32mbps"]
document.write(arr_d[0], arr_d[1])

10.let arr1_d = new Map()
arr1_d.set("a", 5)
document.write(arr1_d.get("a"))

11.let lic_policy = ["309", "07/11/2021", "bengaluru", "6713", "saravanam"]
document.write(lic_policy[0], lic_policy[3])

12.let lic_policy1 = new Map()
lic_policy1.set("s", 6)
document.write(lic_policy1.get("s"))


13.let details = ["pavan", "kumar", "bijjavram", "ka5746732", "karnataka", "India",
"around India", "software engineer", "rajampet"]
document.write(details[4], details[6], details[8], details[3])

14.let details_1 = new Map()
details_1.set("b",10)
document.write(details_1.get("b"))

15.let information = ["55", "5.8", "brown", "male", "7899977989", "kadapa", "ap", "India"]
document.write(information[1], information[4], information[7], information[0])

16.let information_1 = new Map()
information_1.set("v", 4)
document.write(information_1.get("v"))

17.let health = ["sathish", "105678907890", "044 22245", "56725", "male",
"yes", "7f,kaveri road, velur", "105", ":08/09/15 and 08:15", "08/09/15"]
document.write(health[6], health[4], health[9], health[1], health[2])

18.let health_care = new Map()
health_care.set("q", 9)
document.write(health_care.get("q"))

19.let banking = ["SBI Bank", "29/05/14", "19:48", "SJNBL48", "xxxx xxxxx xxxx 0516", "Bangalore Main Branch", "072",
"500.00", "xxxxxxxxxx05 xx01", "www.statebankof india.com"]
document.write(banking[8], banking[7], banking[6], banking[2], banking[0],
banking[10], banking[4])

20.let banking_sbi = new Map()
banking_sbi.set("a", 3)

<script>
21.class intimetec 
{
}
let time = new intimetec()
document.write(this.name)

22.class jvt 
{
constructor() 
{
this.name = "jvt"
}
}
let p = new jvt()
let p2 = new jvt()
let p1 = {
tablet:dolo 650mg
persheet:15
}
p1.method = function()
 {
document.write(this.tablet, this.method)
}
p3.method()

let venkatesh =
{
company = "jvt",
exp = "1",
location = "blore",
verifytrainer()
document.write(this.company)
}
venkatesh.verifytrainer()

23.let arr = [1134588, 145335, "10.245.97.123")
document.write(arr[0])


</script>
