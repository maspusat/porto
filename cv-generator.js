function collectPortfolioData() {

const personal = document.getElementById("cv-data");

// HOME
const name = document.querySelector("#home h1")?.innerText || " ";
const title = document.querySelector("#home p")?.innerText || "";

// ABOUT
const about = document.querySelector("#about p")?.innerText || "";

// SKILLS
const skills = Array.from(document.querySelectorAll("#skills i"))
.map(i => i.getAttribute("title") || "");

// EXPERIENCE
const experiences = Array.from(document.querySelectorAll("#experience > div"))
.map(item => {

const title = item.querySelector("h3")?.innerText || "";
const date = item.querySelector("em")?.innerText || "";

const desc = Array.from(item.querySelectorAll("li"))
.map(li => li.innerText || "");

return { title, date, desc };
});

// EDUCATION
const education = Array.from(document.querySelectorAll("#education > div"))
.map(item => ({
title: item.querySelector("h3")?.innerText || "",
date: item.querySelector("em")?.innerText || ""
}));

// CERT
const certificates = Array.from(document.querySelectorAll("#certificates .card h3"))
.map(el => el.innerText || "");

// PROJECT
const projects = Array.from(document.querySelectorAll("#projects .card h3"))
.map(el => el.innerText || "");

// PHOTO
const photo = document.querySelector("#home img")?.src || "";

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

// DEBUG WAJIB
console.log("CV DATA:", data);

return data;
}

document.getElementById("resumeBtn").addEventListener("click", () => {

const data = collectPortfolioData();

// 🔥 penting: validasi dulu
if(!data.name || data.name.trim() === ""){
alert("Data kosong, cek selector #home h1");
return;
}

sessionStorage.setItem("portfolioData", JSON.stringify(data));

window.open("cv.html", "_blank");
});