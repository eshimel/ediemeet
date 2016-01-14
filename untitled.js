def rentalCarCost(d)
var rental_car_cost = 40
if d >= 3 && d < 7
  puts(40 * d) - 20
elsif d >= 7
  puts(40 * d) - 50
else puts(40 * d)
end

rental_car_cost(5)

if age >= 60
    puts "Senior fare"
elsif age >= 14
    puts "Adult fare"
elsif age > 2
    puts "Child fare"
else
    puts "Free"
end

function getMiddle(s){
//variable holding string methods for odd number of characters
var res = s.charAt(s.length/2);
//variable holding  string methods for even number of characters
var res2 = s.charAt(s.length/2 - 1) + s.charAt(s.length/2);
 if (s.length % 2 === 1) {
     return(res);
}
else if(s.length % 2 === 0) {
return(res2);
}
};
getMiddle("Bug");
