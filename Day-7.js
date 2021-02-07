function Personal(Name, Dob, Time_of_Birth, Place_of_Birth)
 {
    var Nativity = "Rajahmundry";
    var Martial_Status = "UnMarried";
    var Religion = "Hindu";
    var Community = "Telugu";
    var Caste = "Balija";
    var SubSect = "Krishna Balija";
    var Mother_tongue = "Telugu";
    var Gothram = "Mathala";
    var Star = "Pushyami 3,4P";
    var Height = "5'1";
    var Complexion = "Medium";
    var Qualification = "B.Tech(CS)";
    var University = "KIET";
    var Bloodgroup = "B+ve";
    console.log(Name, Dob, Time_of_Birth, Place_of_Birth, Nativity, Martial_Status, Religion, Community, Caste, Gothram, Star, Height, Complexion, Qualification, University, Bloodgroup);
}
function information(callback)
 {
    callback("Bindu", "24/05/1997", "1am", "bellary");
}
information(Personal);

function Driver_info(Driverlicense_number, Employee_type) 
{
    var Last_name = "kumar";
    var First_name = "Pavan";
    var Middle_name = "Bijjavaram";
    var Driver_license_state = "karnataka ";
    var Drivers_license_country = "India ";
    var Civilian_type = "around india ";
    var Date_of_birth = "12-07-1992 ";
    var City_of_birth = "rajampet";
    console.log(Last_name, First_name, Middle_name, Driverlicense_number, Drivers_license_country, Civilian_type, Employee_type, Date_of_birth, City_of_birth);
}
function Driver_details(callback) 
{
    callback("ka50201500006939", "software engineer ");
}
Driver_details(Driver_info);

function Company(Photo_ID_Card, ID_Card_No, Email_Address) 
{
    var Name = "JVT";
    var Age = "5";
    var Gender = "Male";
    var Name = "Mr. venkatesh";
    var Age = "25";
    var Gender = "Male";
    var Email_Address = "venkatesh.db@gmail.com";
    var Address = "BEML Main Road";
    var City = " Bangalore";
    var State = "Karnataka";
    var Zip_Pincode = 560075;
    var Country = "India";
    var Mobile_No = 9900367097;
    var Photo_ID = "Passport";
    var Photo_ID_No = "G3839975";
    console.log(Photo_ID_Card, ID_Card_No, Email_Address, Name, Age, Gender, Name, Age, Gender, Email_Address, Address, City, State, Zip_Pincode, Country, Mobile_No, Photo_ID, Photo_ID_No);
}
function info_1(callback)
 {
    callback("Voter_Id_or_Ration_card", "ASUPB590F", "info@jvtechnologies.co.in");
}
info_1(Company);

function Tirupati(Ticket_Type, Name_of_the_pilgrim, Email, Booked_Date_Time)
 {
    var Date = "Dec 1st";
    var Day = "Tuesday";
    var Time = "3:30 Am";
    var Per_Slot_Tickets = "2000";
    var Booking_No = "IS151110080016";
    var Order_No = "010600013554";
    var Amountin_figures = "220";
    var Proof_of_ID = "Aadhaar Card 733498928758";
    var Booked_Date_Time = "11062015 11:36:46";
    var No_of_Persons = "1";
    var Name_of_the_Seva_Darshan = " Archana ";
    var Reporting_Time = "4:00 AM";
    var Performance_Date_Time = "12012015 AM 4:30:00";
    var Privileges_to_the_Seva = "Two Small Laddu";
    var Booked_Time = "11:36:46";
    var Accommodation_Type = "Rs 500 Tirumala";
    var Available = "RS 350";
    var No_of_Tickets = "1";
    var Rate = "50 to 2000";
    document.write(Ticket_Type, Name_of_the_pilgrim, Email, Booked_Date_Time, Date, Day, Time, Per_Slot_Tickets, Booking_No, Order_No, Amountin_figures, Proof_of_ID, No_of_Persons, Name_of_the_Seva_Darshan, Reporting_Time, Performance_Date_Time, Performance_Date_Time, Privileges_to_the_Seva, Booked_Time, Accommodation_Type, Available, No_of_Tickets, Rate);
}
function darshan(callback)
 {
    callback("Special Entry Darshan", "venkatesh", "venkateshprofessional7@gmail.com", "11062015 11:36:46");
}
darshan(Tirupati);

function Car_Details(POWER_STEERING, DATE_OF_REGISTRATION, RTO_LOCATION)
 {
    var City = "Kolkata";
    var FUEL_TYPE = "Petrol";
    var KMS_Driven = "29,479 KM";
    var COLOUR = "Brown";
    var NUMBER_OF_OWNERS = 1;
    var INSURANCE_TYPE = "Expired";
    var INSURANCE_EXPIRY = "N/A";
    var MANUFACTURING_YEAR = 2012;
    var REGISTRATION_TYPE = "Individual";
    console.log(City);
    console.log(FUEL_TYPE);
    console.log(KMS_Driven);
    console.log(COLOUR);
    console.log(NUMBER_OF_OWNERS);
    console.log(POWER_STEERING);
    console.log(INSURANCE_TYPE);
    console.log(INSURANCE_EXPIRY);
    console.log(MANUFACTURING_YEAR);
    console.log(DATE_OF_REGISTRATION);
    console.log(REGISTRATION_TYPE);
    console.log(RTO_LOCATION);
}
function Manfacture(callback) 
{
    callback("Yes", "25-May-2012", "beltala");
}
Manfacture(Car_Details);
