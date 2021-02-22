var employeee = /** @class */ (function () {
    function employeee(name, company, designation, salary, location, empId) {
        this.info = [];
        this.info.push(name);
        this.info.push(company);
        this.info.push(designation);
        this.info.push(salary);
        this.info.push(location);
        this.info.push(empId);
    }
    employeee.prototype.push = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        this.info.push(arg);
    };
    employeee.prototype.pop = function () {
        this.info.pop();
    };
    return employeee;
}());
var p = new employeee("Venkatesh", "JVT", "Programmer", 5.5, "Banglore", 2001);
p.push(["jvt1", "somya", "himanshu"], ["c", "Cpp", "java"]);
console.log(p);
console.log(p.info[6][1]);
p.pop();
var travels = /** @class */ (function () {
    function travels(traveller, departure, duration, seats, fare, designation) {
        this.info = [];
        this.info.push(traveller);
        this.info.push(departure);
        this.info.push(duration);
        this.info.push(seats);
        this.info.push(fare);
        this.info.push(designation);
    }
    travels.prototype.push = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        this.info.push(arg);
    };
    travels.prototype.pop = function () {
        this.info.pop();
    };
    return travels;
}());
var tourist = new travels("Green_line", "Bangalore", "18hrs", "5seats", "RS.5000", "Chennai");
tourist.push(["bindu", "suneel", "deeps", "xyz", "bharathi"]);
console.log(tourist);
console.log(tourist.info[6][1]);
tourist.pop();
var city = /** @class */ (function () {
    function city(place, fuel_type, kms_driven, color, owners, power_steering, Insurance_type, Insurance_Expiry, manfacturing_year, date_reg, reg_type, rto_location) {
        this.info = [];
        this.info.push(place);
        this.info.push(fuel_type);
        this.info.push(kms_driven);
        this.info.push(color);
        this.info.push(owners);
        this.info.push(power_steering);
        this.info.push(Insurance_type);
        this.info.push(Insurance_Expiry);
        this.info.push(manfacturing_year);
        this.info.push(date_reg);
        this.info.push(reg_type);
        this.info.push(rto_location);
    }
    city.prototype.push = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        this.info.push(arg);
    };
    city.prototype.pop = function () {
        this.info.pop();
    };
    return city;
}());
var tour = new city("Kolkata", "petrol", "29,479km", "brown", 1, "yes", "expired", "N/A", 2012, "25-May-2012", "Individual", "Beltala");
tour.push(["bmw", "Audi", "Renault", "Benz"]);
console.log(tour);
console.log(tour.info[2][3]);
tour.pop();
