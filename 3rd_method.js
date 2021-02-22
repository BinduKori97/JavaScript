var html = {
    name: "bindu",
    company: "intimetec",
    designation: "project manager",
    salary: "10 lakhs",
    location: "USA",
    display: function (obj) { }
};
html.display = function (obj) {
    console.log(html.name, obj);
};
html.display({ firstname: "JVT", lastname: "company" });
var Vehicle_information = {
    Vehicle_type: "light motor vehicle- car",
    Colour: "red",
    Engine_number: "kp98gtyihhhi7797",
    Chassis_number: "tc5678898335r45",
    output: function (obj) { }
};
Vehicle_information.output = function (obj) {
    console.log(Vehicle_information.Colour, obj);
};
Vehicle_information.output({ company: "BMW", cost: "45lakhs" });
var computer_ups_specification = {
    model: "exide-digital600",
    inputp_voltage: "230v ac",
    frequency: "50hz",
    output_voltage: "230v ac",
    battery_type: "sealed maintenance free",
    battery_capacity: "12volt 7ah",
    battery_backup: "12 to 20 mints",
    //recharge_time:"5 to 6 hours",
    //weight:"6.1 kg",
    inverter: function (obj) { }
};
computer_ups_specification.inverter = function (obj) {
    console.log(computer_ups_specification.model, obj);
};
computer_ups_specification.inverter({ recharge_time: "5 to 6 hours", weight: "6.1 kg" });
var visiting_card = {
    name: "naresh",
    mail_id: "naresh.jvt@gmail.com",
    contact_no: 9944860792,
    company_name: "jvt",
    designation: "programmer",
    address: "230/3 2nd floor hal3rd stage new thippasandra bangalore-560075",
    details: function (obj) { }
};
visiting_card.details = function (obj) {
    console.log(visiting_card.mail_id, visiting_card.address, obj);
};
visiting_card.details({ languages: "c, cpp,java", location: "jaipur", alternate_num: 7899977989, native: "bellary" });
var tv_details = {
    Model: "LG55LHX",
    LED_lighting: "Backlight w/Local Dimming",
    Sizes: " 55 inches",
    Type_of_240Hz: "scanning Backlight (240 HZ “effect”)",
    Wireless_HDMI: "yes",
    USB: "USB 2.0 (pictures, music,videos)",
    Built_in_videoservice: "youtube",
    price_RS: 55000,
    specification: function (obj) { }
};
tv_details.specification = function (obj) {
    console.log(tv_details.LED_lighting, tv_details.USB, tv_details.Built_in_videoservice, obj);
};
tv_details.specification({ model: "SAM41HHM", price: 55000, pendrive: "yes", company: "Samsung" });
