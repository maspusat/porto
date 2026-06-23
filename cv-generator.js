function collectPortfolioData() {

const personal = document.getElementById("cv-data");

// HOME
const name = document.querySelector("#home h1")?.innerText || "";
const title = document.querySelector("#home p")?.innerText || "";

// ABOUT
const about = document.querySelector("#about p")?.innerText || "";

// SKILLS
const skills = Array.from(document.querySelectorAll("#skills i"))
.map(i => i.getAttribute("title") || "");

// EXPERIENCE
const experiences = Array.from(document.querySelectorAll("#experience > div > div"))
.map(item => {

const title = item.querySelector("h3")?.innerText || "";
const date = item.querySelector("em")?.innerText || "";

const desc = Array.from(item.querySelectorAll("li"))
.map(li => li.innerText || "");

return { title, date, desc };
});

// EDUCATION
const education = Array.from(document.querySelectorAll("#education > div > div"))
.map(item => ({
title: item.querySelector("h3")?.innerText || "",
date: item.querySelector("em")?.innerText || ""
}));

// CERT
const certificates = Array.from(document.querySelectorAll("#certificates .card h3"))
.map(i => i.innerText);

// PROJECT
const projects = Array.from(document.querySelectorAll("#projects .card h3"))
.map(i => i.innerText);

// PHOTO
const photo = document.querySelector("#home img")?.src || "";

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

phone: personal?.dataset.phone || "",
location: personal?.dataset.location || "",
email: personal?.dataset.email || "",
github: personal?.dataset.github || "",
portfolio: personal?.dataset.portfolio || "",
linkedin: personal?.dataset.linkedin || ""
};
}

// BUTTON RESUME
document.getElementById("resumeBtn").addEventListener("click", () => {
collectPortfolioData(); // cukup trigger
window.open("cv.html", "_blank");
});