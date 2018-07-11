// The dataModule is encapsulates our data so it does not pollute the rest of our site. It can only pass information to the appController through one method, display().

const dataModule = (function () {
  const data = {
    bio: {
      name: 'Tony Boswell',
      role: 'Front End Web Developer',
      contacts: {
        mobile: '816.519.7201',
        email: 'TBoswell@kc.rr.com',
        github: `<a href="https://github.com/Shylmysten">https://github.com/Shylmysten</a>`,
        location: 'Kansas City, Missouri'
      },
      welcomeMessage: `<em>"If you can dream it, you can build it! - Walt Disney"</em>`,
      skills: ['Adobe FireWorks & Photoshop','HTML5, CSS3, JavaScript, jQuery, React', 'Jasmine & Chrome Dev Tools','Gulp','Git & GitHub','Aria & Accessibility'],
      biopic: 'images/me.png',
    },
    education: {
      schools: [
        {
          name: 'Maple Woods Community College',
          location: 'Kansas City, MO',
          degree: 'AAS',
          majors: ['Engineering Technology, Computers & Electronics'],
          dates: '\'93 - \'95',
          url: ''
        },
        {
          name: 'DeVry Univeristy',
          location: 'Kansas City, MO',
          degree: '',
          majors: ['Electronics Engineering'],
          dates: '\'96 - \'97',
          url: ''
        }
      ],
      onlineCourses: [
        {
          title: 'Front End Web Developer Nanodegree',
          school: 'Udcity',
          degree: 'Front End Web Developer Nanodegree',
          dates: 'Apr 2018 - Oct 2018',
          url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
        },
        {
          title: 'Grow with Google Developer Challenge',
          school: 'Udacity',
          dates: 'Jan 2018 - Feb 2018',
          url: 'http://bsft.io/x/qej8cn?uid=4a9a1248-ae92-4144-9d0e-809846df6a2d&mid=8f14a9b7-81e5-4791-8aa8-c05de1529f7f&txnid=4563c2b0-562d-4290-adc1-d073b4047dca'
        },
        {
          title: 'A Beginners Guide to Advanced JavaScript & ES6 - ES2017',
          school: 'Udemy',
          instructor: 'Brandon Morelli',
          dates: 'Dec 2017',
          url: 'http://ude.my/UC-77P2W20C'
        },
        {
          title: 'The Complete JavaScript Course: Build Real Projects!',
          school: 'Udemy',
          instructor: 'Jonas Schmedtmann',
          dates: 'Dec 2017',
          url: 'http://ude.my/UC-TA8JU8PZ'
        },
      ]
    },
    work: {
      jobs: [
        {
          employer: 'P2P Transport, llc.',
          title: 'Owner-Operator',
          location: 'Enid, Oklahoma',
          dates: 'June 2014 - Dec 2017',
          description: 'Owned and Operated a Long Haul Trucking Business with Specialized Services to the Oil & Gas Service Sector, Pet Food Ingredients and Agricultural Industries'
        },
        {
          employer: 'JP Energy Partners',
          title: 'Crude Oil Driver',
          location: 'Pratt, Ks',
          dates: 'Jan 2013 - Jun 2014',
          description: 'While at JP Energy Partners, I Safely Operated a tanker truck, hauling crude oil and various drilling fluids, to and from remote drilling locations over various environments, terrain and through extreme weather conditions.'
        },
        {
          employer: 'Chesapeake Energy Corporation',
          title: 'Crude Oil Driver',
          location: 'Enid, Oklahoma',
          dates: 'Apr 2012 - Jan 2013',
          description: 'While at Oilfield Trucking Solutions, a Chesapeake Energy company, I Safely Operated a tanker truck, hauling crude oil and various drilling fluids, to and from remote drilling locations over various environments, terrain and through extreme weather conditions.'
        },
        {
          employer: 'Astral Records / Dead Famous Artists International',
          title: 'Vice President & Director of Strategic Content & Artist Development',
          location: 'Plano, Texas',
          dates: 'Aug 2005 - Mar 2006',
          description: 'While at Oilfield Trucking Solutions, a Chesapeake Energy company, I Safely Operated a tanker truck, hauling crude oil and various drilling fluids, to and from remote drilling locations over various environments, terrain and through extreme weather conditions.',
          url: 'https://airplaydirect.com/music/deadfamousartists/'
        }
      ]
    },
    projects: {
      projects: [
        {
          title: 'Pixel Art Maker',
          dates: 'Jan 2018',
          description: `Udacity/Grow with Google Front End Nanodegree Scholarship Project 2 - <strong>Pixel Art Maker</strong>`,
          images: ['images/pixel.png', 'url'],
          url: 'https://github.com/Shylmysten/Udacity-Front-End-Developer-Projects/tree/master/Project%203%20-%20Pixel%20Art%20Maker'
        },
        {
          title: 'Memory/Solitaire Game',
          dates: 'May 2018',
          description: `Udacity/Grow with Google Front End Nanodegree Scholarship Project 3 - <strong>Memory Match Game</strong>`,
          images: ['images/memory.png', 'url'],
          url: 'https://github.com/Shylmysten/fend-project-memory-game'
        },
        {
          title: 'Frogger Clone',
          dates: 'May 2018',
          description: `Udacity/Grow with Google Front End Nanodegree Scholarship Project 4 - <strong>Frogger Arcade Game Look-a-Like</strong>`,
          images: ['images/frogger.png', 'url'],
          url: 'https://github.com/Shylmysten/FEND-Arcade-game'
        },
        {
          title: 'Feed Reader Testing With Jasmine',
          dates: 'June 2018',
          description: `Udacity/Grow with Google Front End Nanodegree Scholarship Project 5 - <strong>Testing Rss Feeds with Jasmine</strong><br><br><br><br>`,
          images: ['images/feedreadertests.png', 'url'],
          url: 'https://github.com/Shylmysten/FEND-Feed-Reader-Testing-Project'
        },
        {
          title: 'Budget App',
          dates: 'Dec 2017',
          description: `A Project from Jonas Schmedtmann's Popular The Complete JavaScript Course 2018: Build Real Projects! on Udemy.com - <strong>Budget App</strong>`,
          images: ['images/budget.png', 'url'],
          url: 'https://shylmysten.github.io/Self_Study_Complete_JavaScript/6-Budgety/'
        }
      ]
    }
  }

  return {
    display: function () {
      return data;
    }
  }
})();

// The UI module controls information to and from the DOM. In this case, it receives data that was first pass from the data module to the appcontroller and then forwarded to the UI Module to be inserted into the DOM
const UIModule = (function () {
    const buildBio = function (obj) {
      const name = HTMLheaderName.replace('%data%', obj.name);
      const role = HTMLheaderRole.replace('%data%', obj.role);
      const mobile = HTMLmobile.replace('%data%', obj.contacts.mobile);
      const email = HTMLemail.replace('%data%', obj.contacts.email);
      const github = HTMLgithub.replace('%data%', obj.contacts.github);
      const location = HTMLlocation.replace('%data%',obj.contacts.location);
      const biopic = HTMLbioPic.replace('%data%',obj.biopic);
      const message = HTMLwelcomeMsg.replace('%data%',obj.welcomeMessage);
      $('#header').prepend(name);
      $('#name').after(role);
      $('#topContacts').prepend(mobile);
      $('#topContacts').append(email);
      $('#topContacts').append(github);
      $('#topContacts').append(location);
      $('#topContacts').after(biopic);
      $('.biopic').after(message);
      $('.welcome-message').after(HTMLskillsStart);
      obj.skills.forEach(function (cur,idx) {
        let skillsets = '';
        switch (idx) {
          case 0:
            skillsets = 'Image Editing:';
            break;
          case 1:
            skillsets = 'Languages:';
            break;
          case 2:
            skillsets = 'Code Testing:';
            break;
          case 3:
            skillsets = 'Task Runners:';
            break;
          case 4:
            skillsets = 'Version Control:';
            break;
          case 5:
            skillsets = 'misc:';
            break;
          default:
        };
        let skillset = HTMLskillsSet.replace('%data%',skillsets)
        $('#skills').append(skillset);
        let skills = HTMLskills.replace('%data%',cur);
        $('li:last').append(skills);
      });
    };

    const buildWorkExp = function (obj) {
        $('#workExperience h2').after(HTMLworkStart);
        obj.jobs.forEach(function (cur, i) {
          if (i > 0) {
            $('.work-entry:last').after(HTMLworkStart);
          }
          let employer = HTMLworkEmployer.replace('%data%',cur.employer);
          let title = HTMLworkTitle.replace('%data%',cur.title);
          $('.work-entry:last').append(`${employer}${title}`);
          let dates = HTMLworkDates.replace('%data%',cur.dates);
          $('.work-entry a:last').after(dates);
          let location = HTMLworkLocation.replace('%data%',cur.location);
          $('.date-text:last').after(location);
          let duties = HTMLworkDescription.replace('%data%',cur.description);
          $('.location-text:last').after(duties);
        });
    };

    const buildProjects = function (obj) {
      $('#projects h2').after(HTMLprojectStart);
      obj.projects.forEach(function (cur, i) {
        let title = HTMLprojectTitle.replace('%data%',cur.title);
        title =  title.replace('#',cur.url);
        let dates = HTMLprojectDates.replace('%data%',cur.dates);
        let overview = HTMLprojectDescription.replace('%data%', cur.description);
        let prjimg = HTMLprojectImage.replace('%data%', cur.images[0]);
        if (i > 0) {
          $('.project-entry:last').after(HTMLprojectStart);
        }
        $('.project-entry:last').append(title);
        $('.project-entry a:last').after(dates);
        $('.date-text:last').after(overview);
        $('.project-entry p:last').after(prjimg);

      });

    };

    const buildEducation = function (obj) {
      $('#education h2').after(HTMLschoolStart);
      obj.schools.forEach(function (cur,i) {
        let name = HTMLschoolName.replace('%data%', cur.name);
        name =  name+HTMLschoolDegree.replace('%data%', cur.degree);
        let dates = HTMLschoolDates.replace('%data%', cur.dates);
        let location = HTMLschoolLocation.replace('%data%', cur.location);
        let major = HTMLschoolMajor.replace('%data%', cur.majors);
        if (i > 0) {
          $('.education-entry:last').after(HTMLschoolStart);
        }
        $('.education-entry:last').append(name);
        $('.education-entry a:last').after(dates);
        $('.date-text:last').after(location);
        $('.location-text:last').after(major);
      });


      $('.education-entry:last').after(HTMLonlineClasses);
      $('#education h3').after(HTMLschoolStart);
      obj.onlineCourses.forEach(function (cur, i) {

        let course = HTMLonlineTitle.replace('%data%', cur.title);
        course = course+HTMLonlineSchool.replace('%data%', cur.school);
        course= course.replace('#', cur.url);
        let dates = HTMLonlineDates.replace('%data%', cur.dates);

        if (i > 0) {
          $('.education-entry:last').after(HTMLschoolStart);
        }
        $('.education-entry:last').append(course);
        $('.education-entry a:last').after(dates);
      });
    }

    const buildMap = function () {
      $('#mapDiv').append(googleMap);
    }

    const buildFooter = function (obj) {
      const mobile = HTMLmobile.replace('%data%', obj.contacts.mobile);
      const email = HTMLemail.replace('%data%', obj.contacts.email);
      const github = HTMLgithub.replace('%data%', obj.contacts.github);
      $('#footerContacts').append(mobile);
      $('#footerContacts').append(email);
      $('#footerContacts').append(github);
    }

    return {
      render: function (bio, work, prjx, edu) {
        buildBio(bio);
        buildWorkExp(work);
        buildProjects(prjx);
        buildEducation(edu);
        buildMap();
        buildFooter(bio);
      }
    }

})();


// The appController Module is the Octopus. It acts as a mediary between the UI Module and the Data Module as they don't know each other exist. The appController fetches data from the DataModule and passes it on to the UI Module. In other programs the UI module would fetch information from the DOM, such as User interaction with form fields, and returns it to the appcontroller and then it is forwarded to be stored in the data module
const appController = (function (dataMdl, UIMdl) {
  const data = dataMdl.display();
  const bio = data.bio;
  const work = data.work;
  const prjx = data.projects;
  const edu = data.education;

  UIMdl.render(bio,work,prjx, edu);

})(dataModule, UIModule);
