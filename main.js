//ambil element
const skills = document.getElementById("skills");
const primarySkills = document.getElementById("primarySkill");

const mySkills = ["ES6", "Git", "Web Development"];

//map
const printSkillsMap = mySkills.map((skill) => {
    return skill;
});

skills.innerHTML = printSkillsMap;

//filter
const printPrimarySkill = mySkills.filter((skill)=>{
    return skill === "ES6";
})

primarySkill.innerHTML - printPrimarySkill;