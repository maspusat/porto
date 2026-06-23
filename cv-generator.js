function collectPortfolioData() {

const personal = document.getElementById("cv-data");

// HOME
const name = document.querySelector("#home h1")?.innerText || "";
const title = document.querySelector("#home p")?.innerText || "";

// ABOUT
const about = document.querySelector("#about p")?.innerText || "";

// SKILLS
const skills = [];
document.querySelectorAll("#skills i").forEach(skill => {
skills.push(skill.getAttribute("title"));
});

// EXPERIENCE (FIXED)
const experiences = [];
document.querySelectorAll("#experience > div").forEach(item => {
const title = item.querySelector("h3")?.innerText || "";
const date = item.querySelector("em")?.innerText || "";
// ambil semua bullet point
const desc = [];
item.querySelectorAll("li").forEach(li => {
desc.push(li.innerText);
});

experiences.push({
title,
date,
desc
});

});

// EDUCATION
const education = [];
document.querySelectorAll("#education > div").forEach(item => {
education.push({
title: item.querySelector("h3")?.innerText || "",
date: item.querySelector("em")?.innerText || ""
});
});

// CERTIFICATE
const certificates = [];
document.querySelectorAll("#certificates .card h3").forEach(item => {
certificates.push(item.innerText);
});

// PROJECT
const projects = [];
document.querySelectorAll("#projects .card h3").forEach(item => {
projects.push(item.innerText);
});

// FOTO
const photo = document.querySelector("#home img")?.getAttribute("src") || "";

return {
name,
title,
about,
skills,
experiences,
education,
certificates,
projects,
photo,

phone: personal.dataset.phone,
location: personal.dataset.location,
email: personal.dataset.email,
github: personal.dataset.github,
portfolio: personal.dataset.portfolio,
linkedin: personal.dataset.linkedin
};
}

// BUTTON RESUME (FIXED - TANPA SESSION STORAGE)
document.getElementById("resumeBtn").addEventListener("click", () => {

collectPortfolioData(); // cukup trigger data tersedia

window.open("cv.html", "_blank");

});