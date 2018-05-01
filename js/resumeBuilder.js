var bio = {
    "name": "Howard Huang",
    "role": "Web Developer",
    "contacts": {
        "mobile": "xxx-xxx-xxxx",
        "email": "xxx@gmail.com",
        "github": "ho1919192000",
        "twitter": "@ho1919192000",
        "location": "Boulder"
    },
    "welcomeMessage": "Omg this is so hard, but I did it. yeeeeeeeeeeeeeeeeeeee!",
    "skills": ["awsomeness", "programming", "OverWatch", "javascript", "Hard Working"],
    "bioPic": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAJFAAAAJDU0OWIwMTVjLWI0MzEtNDVkYy05ODYwLWQ2YTRmZmZjYTk3MA.jpg"
};


var work = {
    "jobs": [
        {
            "employer": "Google",
            "title": "Front-End Devloper",
            "location": "Denver",
            "dates": "10/23/2018",
            "description": "Amazing job! Amazing job!Amazing job!Amazing job!Amazing job!Amazing job!Amazing job!Amazing job!Amazing job!Amazing job!Amazing job!Amazing job!Amazing job!"
    },
        {
            "employer": "FaceBook",
            "title": "Senior Front-End Devloper",
            "location": "San Fransico",
            "dates": "11/23/2019",
            "description": "Nice job!Nice job!Nice job!Nice job!Nice job!Nice job!Nice job!Nice job!Nice job!Nice job!Nice job!Nice job!Nice job!Nice job!Nice job!Nice job!Nice job!Nice job!Nice job!"
    },
        {
            "employer": "CHH",
            "title": "CEO",
            "location": "New York",
            "dates": "11/25/2020",
            "description": "Best year!Best year!Best year!Best year!Best year!Best year!Best year!Best year!Best year!Best year!Best year!Best year!Best year!Best year!Best year!Best year!Best year!Best year!Best year!"
    }
]
}

/*bio.skills.forEach(function (elem) {
        formattedskills += HTMLskills.replace("%data%", elem);
    });*/
var displayWork = function () {
    work.jobs.forEach(function (elem) {
        $("#workExperience").append(HTMLworkStart);
        var formattedWork = "";
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", elem.employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", elem.title);
        var formattedWorkDates = HTMLworkDates.replace("%data%", elem.dates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", elem.location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", elem.description);
        formattedWork = formattedWorkEmployer + formattedWorkTitle + formattedWorkDates + formattedWorkLocation + formattedWorkDescription;

        $(".work-entry:last").append(formattedWork);
    });
}
displayWork();
/*for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart)

    var formattedWork = "";

    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);

    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    formattedWork = formattedWorkEmployer + formattedWorkTitle + formattedWorkDates + formattedWorkLocation + formattedWorkDescription;

    $(".work-entry:last").append(formattedWork);

}*/
var education = {
    "schools": [
        {
            "name": "University of Denver",
            "location": "Dener",
            "degree": "Master",
            "majors": ["Information and Communication"],
            "dates": "2015-2017"
		},
        {
            "name": "NKFUST",
            "location": "Taiwan",
            "degree": "BA",
            "majors": ["Logistics"],
            "dates": "2010-2014"
		}
	],
    "onlineCourses": [
        {
            "title": "Javascript Basic",
            "school": "Udacity",
            "date": "2017",
            "url": "https://example.com"
        },
        {
            "title": "Javascript Advanced",
            "school": "Udemy",
            "date": "2018",
            "url": "https://example.com"
        }
    ],
    "display": function () {
        education.schools.forEach(function (edu) {
            $("#education").append(HTMLschoolStart);
            var formattedEduction = HTMLschoolName.replace("%data%", edu.name) + 　HTMLschoolDegree.replace("%data%", edu.degree) + HTMLschoolDates.replace("%data%", edu.dates) + HTMLschoolLocation.replace("%data%", edu.location);
            var formattedMajors = "";
            edu.majors.forEach(function (m) {
                formattedMajors += HTMLschoolMajor.replace("%data%", m);
            })
            formattedEduction += formattedMajors;
            $(".education-entry:last").append(formattedEduction);
        })
        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function (oc) {
            $("#education").append(HTMLschoolStart);
            var formattedOnlineCourse = HTMLonlineTitle.replace("%data%", oc.title) + HTMLonlineSchool.replace("%data%", oc.school) + HTMLonlineDates.replace("%data%", oc.date) + HTMLonlineURL.replace("%data%", oc.url)
            $(".education-entry:last").append(formattedOnlineCourse);
        })

    }
}
education.display();
/*var educations = {};
educations.display = (function(){
    education.schools.forEach(function(edu){
        $("#education").append(HTMLschoolStart);
        var formattedEduction = HTMLschoolName.replace("%data%", edu.name) +　HTMLschoolDegree.replace("%data%", edu.degree) + HTMLschoolDates.replace("%data%", edu.dates) +  HTMLschoolLocation.replace("%data%", edu.location);
        var formattedMajors = "";
        edu.majors.forEach(function(m){
            formattedMajors += HTMLschoolMajor.replace("%data%", m);
        })
        formattedEduction += formattedMajors;
        $(".education-entry:last").append(formattedEduction);
    })
    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(oc){
        $("#education").append(HTMLschoolStart);
        var formattedOnlineCourse = HTMLonlineTitle.replace("%data%", oc.title) + HTMLonlineSchool.replace("%data%", oc.school) + HTMLonlineDates.replace("%data%", oc.date) + HTMLonlineURL.replace("%data%", oc.url)
        $(".education-entry:last").append(formattedOnlineCourse);
    })
    
})()
*/
var project = {
    "projects": [
        {
            "title": "Local Weather",
            "dates": "2017",
            "description": "Show the Local Weather Show the Local Show the Local Weather Show the Local Weather Show the Local Weather Show Show the Local Weather Show Show the Local Weather Show Show the Local Weather Show Show the Local Weather Show Show the Local Weather Show Show the Local Weather Show Show the Local Weather Show Show the Local Weather Show Show the Local Weather Show Show the Local Weather Show",
            images: [
            "https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067"
        ]
    },
        {
            "title": "Wikipedia Search",
            "dates": "2017",
            "description": "Building a Wikipedia Search App Building a Wikipedia Search AppBuilding a Wikipedia Search AppBuilding a Wikipedia Search AppBuilding a Wikipedia Search AppBuilding a Wikipedia Search AppBuilding a Wikipedia Search App Building a Wikipedia Search AppBuilding a Wikipedia Search AppBuilding a Wikipedia Search App Building a Wikipedia Search App",
            images: [
            "https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067"
        ]
    }
],
    "display": function (){
        project.projects.forEach(function (pro) {
            $("#projects").append(HTMLprojectStart);
            var formattedProject = "";
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", pro.title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", pro.dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", pro.description);
            formattedProject = formattedProjectTitle + formattedProjectDates + formattedProjectDescription;
            pro.images.forEach(function (src) {
                formattedProject += HTMLprojectImage.replace("%data%", src);
            })
            $(".project-entry:last").append(formattedProject);
        })
    }
}
project.display();
/*var projects = {};
projects.display = function(){
    project.forEach(function(pro){
        $("#projects").append(HTMLprojectStart);
        var formattedProject = "";
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", pro.title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", pro.dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", pro.description);
        formattedProject = formattedProjectTitle + formattedProjectDates + formattedProjectDescription;
        pro.images.forEach(function(src){
            formattedProject += HTMLprojectImage.replace("%data%", src);
        })
        $(".project-entry:last").append(formattedProject);
    })
};
projects.display();
*/

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var ormattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
if (bio.skills.length > 0) {
    var formattedskills = "";
    /*for (index in bio.skills) {
        formattedskills += HTMLskills.replace("%data%", bio.skills[index]);
    }*/
    bio.skills.forEach(function (elem) {
        formattedskills += HTMLskills.replace("%data%", elem);
    });
}

$("#header").prepend(formattedRole).prepend(formattedName);
$("#topContacts").append(formattedMobile).append(formattedEmail).append(formattedGithub).append(formattedTwitter);
$("#header").append(formattedBioPic).append(formattedWelcomeMsg).append(HTMLskillsStart);
$("#skills").append(formattedskills)
$("#main").append(internationalizeButton);

var inName = function (name) {
    var nameArray = name.trim().toLowerCase().split(" ");
    var newName = nameArray[0].charAt(0).toUpperCase() + nameArray[0].slice(1) + " " + nameArray[1].toUpperCase();
    return newName;
}
inName("hOWARD Huang");
$("#mapDiv").append(googleMap);









/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$('#header').append();
//$("#main").append("Howard");
/*var email = "howard@udacity.com";
var newEmail = email.replace("udacity", "gmail");
console.log(email);
console.log(newEmail);

var awesomeThoughts = "I am Howard and I am AWESOME!";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME!","FUN");

$("#main").append(funThoughts);*/
/*var name = "Howard Huang";
var role = "Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var skills = ["awsomeness", "programming", "Gamer", "JS"];
$("#header").append(skills[0]);
$("#header").append(skills.length);*/
/*var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var ormattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedskills = "";
bio.skills.forEach(function (elem) {
    formattedskills += HTMLskills.replace("%data%", elem);
});

$("#header").prepend(formattedRole).prepend(formattedName);
$("#topContacts").append(formattedMobile).append(formattedEmail).append(formattedGithub).append(formattedTwitter);
$("#header").append(formattedBioPic).append(formattedWelcomeMsg).append(HTMLskillsStart);
$("#skills").append(formattedskills)*/
/*var howard = {};
howard.job = "Wordpress Developer"

var makeCourse = function () {
    console.log("Howard make a course!");
}

var courses = 0;
while (howard.job === "Wordpress Developer") {
    makeCourse();
    courses++;
    if (courses === 10) {
        howard.job = "Master of WordPress";
    }
}
console.log(howard.job);*/