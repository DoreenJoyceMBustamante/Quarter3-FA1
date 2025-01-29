let nickname = "Doreen";
let height = 62;  
let weight = 45;    

let feet = parseInt(height / 12); 
let inches = parseInt(height % 12); 

let finalWeight = weight * 2.205.toFixed(3);  

alert(`Name: ${nickname}\nHeight: ${feet}’${inches}”\nWeight: ${finalWeight.toFixed(3)} lbs`);
