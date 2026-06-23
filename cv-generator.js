function collectPortfolioData() {

const personal = document.getElementById("cv-data");

const q = (s) => document.querySelector(s);
const qa = (s) => Array.from(document.querySelectorAll(s));

// HOME
const name = q("#home h1")?.innerText || "";
const title = q("#home p")?.innerText || "";

// ABOUT
const about = q("#about p")?.innerText || "";

// SKILLS
const skills = qa("#skills i")
.map(i => i.getAttribute("title") || "");

// EXPERIENCE
const experiences = qa("#experience > div").map(item => {

const title = item.querySelector("h3")?.innerText || "";
const date = item.querySelector("em")?.innerText || "";

const desc = qa.call(item, "li").map(li => li.innerText || "");

return { title, date, desc };
});

// EDUCATION
const education = qa("#education > div").map(item => ({
title: item.querySelector("h3")?.innerText || "",
date: item.querySelector("em")?.innerText || ""
}));

// CERT
const certificates = qa("#certificates .card h3")
.map(e => e.innerText || "");

// PROJECT
const projects = qa("#projects .card h3")
.map(e => e.innerText || "");

// PHOTO
const photo = q("#home img")?.src || "";

const data = {
name,
title,
about,
skills,
experiences,
education,
certificates,
projects,
photo,

phone: personal?.dataset?.phone || "",
location: personal?.dataset?.location || "",
email: personal?.dataset?.email || "",
github: personal?.dataset?.github || "",
portfolio: personal?.dataset?.portfolio || "",
linkedin: personal?.dataset?.linkedin || ""
};

console.log("FULL DATA:", data);
return data;
}

// BUTTON
document.getElementById("resumeBtn").addEventListener("click", () => {

const data = collectPortfolioData();

if(!data.name){
alert("Data kosong");
return;
}

sessionStorage.setItem("portfolioData", JSON.stringify(data));

window.open("cv.html", "_blank");

});