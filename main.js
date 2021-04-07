// Ambil Element
const skills = document.getElementById("skills");

//buat variabel
const mySkills = ["ES6", "UX Design", "Git"];

mySkills.push("Dev Ops");

console.log(mySkills);

//normal function
function showSkill(mySkill){
    console.log(mySkill);
}

//arrow funct
const showSkill2 = (mySkill) => { 
    console.log(mySkill);
}

// forEach
mySkills.forEach(function (mySkill){
    console.log(mySkill);
});

let parent = '<ul>';

mySkills.forEach((mySkill) => {
    parent += `<li>${mySkill}</li>`
});

parent += '</ul>';

mySkills.forEach(showSkill2);
skills.innerHTML = parent;