$(function(){
  const experienceList = [
    {
      company: "Justworks",
      title: "Engineering Manager",
      date: "August 2020 - present"
    },
    {
      company: "Justworks",
      title: "Software Engineer",
      date: "January 2020 - August 2022"
    },
    {
      company: "WeWork",
      title: "Software Engineer",
      date: "March 2018 - December 2019"
    },
    {
      company: "WeddingWire",
      title: "Software Engineer",
      date: "February 2016 - March 2018"
    },
    {
      company: "General Assembly",
      title: "Student",
      date: "August 2015 - October 2015"
    },
    {
      company: "Newsela",
      title: "School Coordinator",
      date: "August 2014 - July 2015"
    },
    {
      company: "St. Elizabeth High School",
      title: "Art Educator",
      date: "August 2012 - June 2014"
    },
    {
      company: "Mills College",
      title: "MA in Education",
      date: "August 2011 - May 2014"
    },
    {
      company: "University of Michigan",
      title: "BFA in Art & Design",
      date: "September 2007 - May 2011"
    },
  ]

  experienceList.forEach((experience) => {
    $(".list").append(
      "<div><p class='company'>" + experience.company +
      "</p><p>" + experience.title + "<p><p class='date'>" +
      experience.date + "</div>"
    )
  });

  const arrayNums = Array.from({length: 10}, (x, i) => i);
  arrayNums.forEach((num) => {
    $(".loader").append("<span></span>")
    if (num % 3 || num % 5) {
      $(".loader2").append("<span></span>")
    }
  });
});
