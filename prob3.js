const consent = confirm("Do you agree to share your personal information with our site?");

if (consent) {
    console.log(`Name: Doreen\nHeight: 5'2”\nWeight: 99.225 lbs`);
} else {
    console.log("User does not wish to share his/her information.");
}