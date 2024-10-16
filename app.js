var dob = prompt("Enter your date of birth (YYYY-MM-DD):");
var dobDate = new Date(dob);
var currentDate = new Date();

var ageYears = currentDate.getFullYear() - dobDate.getFullYear();
var ageMonths = currentDate.getMonth() - dobDate.getMonth();
var ageDays = currentDate.getDate() - dobDate.getDate();

switch (true) {
    case ageDays < 0:
        ageMonths--;
        ageDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();

    case ageMonths < 0:
        ageYears--;
        ageMonths += 12;
        break;
    default:
        break;
}

alert(`Your age is: ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`);
