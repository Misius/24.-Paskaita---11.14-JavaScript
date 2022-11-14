'use strict';
console.log('main.js');



const firstNameEl = document.getElementById('firstNameInput');
const lastNameEl = document.getElementById('lastNameInput');
const descriptionEl = document.getElementById('descriptionInput');
const linkEl = document.getElementById('linkInput');
const ageEl = document.getElementById('ageInput');
const localBtnEl = document.getElementById('addLocalStorageBtn');


// 1. Į localStorage, įrašykite savo vardą, pavardę, aprašymą, ir nuorodą į profilio nuotrauką. Informaciją įrašykite pirmą kartą užkrovus puslapį, o vėliau ją atvaizduokite.
localBtnEl.addEventListener('click', () => {
    console.log('click');
    const firstNameElValue = firstNameEl.value.trim();
    const lastNameElValue = lastNameEl.value.trim();
    const descriptionElValue = descriptionEl.value.trim();
    const linkElValue = linkEl.value.trim();
    const ageElValue = ageEl.value.trim();
    localStorage.setItem('First name', firstNameElValue);
    localStorage.setItem('Last name', lastNameElValue);
    localStorage.setItem('Description', descriptionElValue);
    localStorage.setItem('Link', linkElValue);
    age(ageElValue);
});
// 2. Parašykite funkciją, kuri priims varotojų amžių ir grąžins kiek dienų jis jau nugyveno (skaičių, metų tikslumu, neskaičiuojant keliamųjų metų - t.y. visada 365 dienos).
function age(date) {
    var dob = new Date(date);  
    //calculate month difference from current date in time 
    if(date==null || date =='') {  
        console.log('choose a date!!!');    
        return false;   
      } else {
        console.log(date);
        var month_diff = Date.now() - dob.getTime();  
      
        //convert the calculated difference in date format  
        var age_dt = new Date(month_diff);   
        
        //extract year from date      
        var year = age_dt.getUTCFullYear();  
        //now calculate the age of the user  
        var age = Math.abs(year - 1970);  
        
        //display the calculated age  
        console.log('age ===', age);
      }
//     console.log('month ===', month_diff);
//     console.log('age_dt ===', age_dt);
//     console.log('year ===', year);
//     console.log('dob ===', dob);
}
// 3. sukurti front-endą, kuris pasiimtų duomenis iš https://randomuser.me/api/ ir juos atvaizduotų juos puslapyje. Duomenys galėtų būti atvaizduoti panašioje kortelėje (randomUserApi.avif). Svarbu atvaizduoti nuotrauką, vardą, amžių ir el. pašto adresą.


// 4. Sukurkite arrow funkciją, kuri paimtų du skaičius ir grąžintų boolean value ar skaičių suma didesnė už 100 ar mažesnė (ir lygi).

// 5. Sukurkite funkciją, kuri paims stringą ir grąžins jį apverstą mažosiomis. T.y. "Petras" -> "sartep"
// 6. Parašykite funkciją, kuri priims minutes (number) ir grąžins sekundes (string: "x seconds"). Pvz: fn(3) => "180 seconds".

