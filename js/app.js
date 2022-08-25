// Start Jquery Area
$(document).ready(function () {
  // Start Header
  // Start Nav Bar

  $(".navbuttons").click(function () {
    $(this).toggleClass("crossxs");
  });

  // End Nav Bar
  // End Header
});

// End Jquery Area

// Start Javascript Area

// Start Students Conter Section

var getcountervalues = document.querySelectorAll(".countervalues");

getcountervalues.forEach(function (getcountervalues) {
  // console.log(getcountervalues);

  getcountervalues.textContent = 0;

  const updatecounter = function () {
    // console.log("work");

    const getcttarget = +getcountervalues.getAttribute("data-target");
    // console.log(getcttarget);
    // console.log(typeof getcttarget);

    const getctcontent = +getcountervalues.textContent;
    // console.log(typeof getctcontent);

    const incnumber = getcttarget / 100;
    console.log(incnumber);

    if (getctcontent < getcttarget) {
      getcountervalues.textContent = getctcontent + incnumber;

      setTimeout(updatecounter, 50);
    }
  };

  updatecounter();
});

// End Students Conter Section

// End Javascript Area
