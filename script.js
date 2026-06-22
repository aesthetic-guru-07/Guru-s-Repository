// alert(`Have a Good Day !`)
let adjective, shop_name, Another_word

x = Math.random()
if(0 <= x <= 0.33)
    adjective = "Crazy"
else if(0.33 < x <= 0.66)
    adjective = "Amazing"
else
    adjective = "Fire"

y = Math.random()
if(0 <= y <= 0.33)
    shop_name = "Engine"
else if(0.33 < y <= 0.66)
    shop_name = "Foods"
else
    shop_name = "Garments"

z = Math.random()
if(0 <= z <= 0.33)
    Another_word = "Bros"
else if(0.33 < z <= 0.66)
    Another_word = "Limited"
else
    Another_word = "Hub"

alert(`Bussiness Name: ${adjective} ${shop_name} ${Another_word}`)