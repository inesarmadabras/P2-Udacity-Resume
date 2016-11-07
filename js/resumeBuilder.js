var bio = {
    "name": "Inês Armada Brás",
    "role": "Web - Designer",
    "contacts": {
        "mobile": "+351 xxxxxxx",
        "email": "ines.armada.bras@gmail.com",
        "github": "inesarmadabras",
        "twitter": "@InesArmadaBras",
        "location": "Lisbon, Portugal"
    },
    "welcomeMessage": "This is not my real resume. This website was made for the Front-End Web Developer Nanodegree from Udacity. Check my real website @ http://inesarmadabras.6te.net",
    "biopic": "images\\ines.png",
    "skills": ["HTML", "CSS", "Bootstrap 3", "JavaScript", "Knockout.js", "Jasmine", "Web Performance"]
};
var data = "%data%";
bio.display = function() {
    var formattedHeaderName = HTMLheaderName.replace(data, bio.name);
    var formattedHeaderRole = HTMLheaderRole.replace(data, bio.role);
    $("#header").prepend(formattedHeaderName + formattedHeaderRole);

    //Display contact information
    //Contacts are displayed as li in ul
    //TOP
    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    $("#topContacts").append(formattedGithub);

    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    //FOOTER
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);

    var formattedPic = HTMLbioPic.replace(data, bio.biopic);
    $("#header").append(formattedPic);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);


    //Display SKILLS
    if (bio.skills.length > 0) {
        //Initialize and append header
        $("#header").append(HTMLskillsStart);

        for (i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace(data, bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }


};


var work = {
    jobs: [{
        "employer": "Google Developers Group Lisboa",
        "employerURL": "http://gdglisbon.xyz",
        "title": "Organizer",
        "location": "Lisboa, Porutgal",
        "dates": "05/2016 - in progress",
        "description": "-Organization of free workshops, codelabs and courses, open to the entire community. Monthly lectures (“Talks”) about development and tech (GDG Sessions), for developers who are interested in Google Developer technology like Android, App Engine or HTML5. Organization of GDG DevFest Lisbon - a Google tech conference. All about Android, Web and Cloud from the world experts. Responsible for media, sponsors and also for some of the design."
    }, {
        "employer": "Rato-ADCC",
        "employerURL": "http://rato-adcc.pt/index.php/pt/rato-adcc/quem-somos",
        "title": "Voluntary Trainer / President of the supervisory board",
        "location": "Miratejo, Portugal",
        "dates": "05/2013 - in progress",
        "description": "Teaching computer science in a user’s perspective,Internet and WWW. -Teaching computer science in the program “CLDS Kids”, for disadvantaged children. (Google Docs, Prezi).Tutorship for persons with restricted mobility. This action, developed in the participant's residence, result of a partnership between Rato-ADCC and the Municipal Council of Seixal. Technical work."
    }, {
        "employer": "",
        "employerURL": "http://inesarmadabras.github.io",
        "title": "Freelancer FE & Graphic Designer",
        "location": "Lisboa, Porutgal",
        "dates": "2013 - in progress",
        "description": "Sporadic contribution in graphic design projects, communication and web design for individuals and small businesses."
    }]
};

work.display = function() {
    if (work.jobs.length > 0) {
        for (var job in work.jobs) {
            if (work.jobs.hasOwnProperty(job)) {
                var jobItem = work.jobs[job];

                //Initialize and append header
                $("#workExperience").append(HTMLworkStart);

                var formattedEmployer = HTMLworkEmployer.replace(data, jobItem.employer);
                //Add employerURL
                formattedEmployer = formattedEmployer.replace("#", jobItem.employerURL);

                var formattedTitle = HTMLworkTitle.replace(data, jobItem.title);
                $(".work-entry:last").append(formattedEmployer + formattedTitle);

                var formattedDate = HTMLworkDates.replace(data, jobItem.dates);
                $(".work-entry:last").append(formattedDate);

                var formattedLocation = HTMLworkLocation.replace(data, jobItem.location);
                $(".work-entry:last").append(formattedLocation);

                var formattedDescription = HTMLworkDescription.replace(data, jobItem.description);
                $(".work-entry:last").append(formattedDescription);

            }
        }
    }
};



var projects = {
    projects: [{
        "title": "ISELeaks",
        "dates": "10/2014 - 02/2016",
        "description": "Local academic newspaper. I was responsible for the design and promotion on social networks of a small independent academic journal, available in physical and digital support.",
        "images": ""
    }]
};

projects.display = function() {
    if (projects.projects.length > 0) {
        for (var prj in projects.projects) {
            if (projects.projects.hasOwnProperty(prj)) {
                var project = projects.projects[prj];

                //Initialize and append header
                $("#projects").append(HTMLprojectStart);

                var formattedTitle = HTMLprojectTitle.replace(data, project.title);
                $(".project-entry:last").append(formattedTitle);

                formattedDates = HTMLprojectDates.replace(data, project.dates);
                $(".project-entry:last").append(formattedDates);

                var formattedDescription = HTMLprojectDescription.replace(data, project.description);
                $(".project-entry:last").append(formattedDescription);

                var formattedImages = HTMLprojectImage.replace(data, project.images);
                $(".project-entry:last").append(formattedImages);
            }
        }
    }
};


var education = {
    "schools": [{
        "name": "ISEL",
        "location": "Lisboa, Portugal",
        "dates": "2015 - Present",
        "degree": "BsC in Computer Engineering",
        "url": "http://www.isel.pt"
    }],
    "onlineCourses": [

        {
            "title": "Frontend Nanodegree",
            "school": "Udacity",
            "dates": "09/2016 - Present",
            "url": "https://classroom.udacity.com/nanodegrees/nd001"
        },

        {
            "title": "Javascript Basics",
            "school": "GDG Lisbon / Udacity",
            "dates": "06/2016",
            "url": "https://classroom.udacity.com/courses/ud804"
        }, {
            "title": "StudyJams: Android for beginners",
            "school": "GDG / Udacity",
            "dates": "04/2016",
            "url": "https://udacity.com/course/android-development-for-beginners--ud837"
        }, {
            "title": "Introduction to Java Programming – Part 1",
            "school": "Edx",
            "dates": "09/2015",
            "url": "https://www.edx.org/course/introduction-java-programming-part-1-hkustx-comp102-1x-2"
        }
    ]
};
education.display = function() {
    if (education.schools.length > 0) {
        for (var sch in education.schools) {
            if (education.schools.hasOwnProperty(sch)) {
                var school = education.schools[sch];

                $("#education").append(HTMLschoolStart);

                var formattedName = HTMLschoolName.replace(data, school.name).replace("#", school.url);

                var formattedDegree = HTMLschoolDegree.replace(data, school.degree);
                $(".education-entry:last").append(formattedName + formattedDegree);

                formattedDates = HTMLschoolDates.replace(data, school.dates);
                $(".education-entry:last").append(formattedDates);

                var formattedLocation = HTMLschoolLocation.replace(data, school.location);
                $(".education-entry:last").append(formattedLocation);

            }
        }
    }

    if (education.onlineCourses.length > 0) {

        $("#education").append(HTMLonlineClasses);

        for (var onl in education.onlineCourses) {
            if (education.onlineCourses.hasOwnProperty(onl)) {
                var course = education.onlineCourses[onl];
                //Use same as previous block to ensure correct formating
                $("#education").append(HTMLschoolStart);

                var formattedTitle = HTMLonlineTitle.replace(data, course.title).replace("#",course.url);
                var formattedSchool = HTMLonlineSchool.replace(data, course.school);

                $(".education-entry:last").append(formattedTitle + formattedSchool);

                formattedDates = HTMLonlineDates.replace(data, course.dates);
                $(".education-entry:last").append(formattedDates);

                $(".education-entry:last").append(spacerDiv);
            }

        }

    }
};


//Call the display methods for all the objects
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
