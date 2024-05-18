// register
function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

$(document).ready(function () {
  // Toggle shape when mouse enters .page2downleft
  $(document).on("mouseenter", ".page2downleft", function () {
    $(".page2downleft").toggleClass("rounded");
  });
});

$(document).ready(function () {
  // Toggle shape when mouse enters .page2downleft
  $(document).on("mouseenter", ".page2downright", function () {
    $(".page2downright").toggleClass("rounded");
  });
});

//rejister authentication
// Function to open the popup
function openPopup() {
  document.getElementById("popup").style.display = "flex";
}

// Function to close the popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

$(document).ready(function() {
  $('#registerForm').submit(function(e) {
      e.preventDefault();

      const name = $('#name').val();
      const email = $('#email').val();
      const mobile = $('#mobile').val();

      $.ajax({
          type: 'POST',
          url: 'http://localhost:5000/api/auth/register',
          data: JSON.stringify({ name, email, mobile }),
          contentType: 'application/json',
          success: function(response) {
              alert('User registered successfully');
              closePopup();
          },
          error: function(error) {
              alert('Error registering user');
          }
      });
  });
});

// Before-list
$(document).ready(function () {
  $("#addItem").click(function () {
    var item = $("#itemInput").val();
    if (item.trim() !== "") {
      $("#itemList").append(
        "<li><span class='tick'>&#10003;</span>" + item + "</li>"
      );
      $("#itemInput").val("");
    }
  });

  $("#itemList").on("click", "li", function () {
    $(this).toggleClass("strike");
    $(this).find(".tick").toggle();
  });
});

//after-list
$(document).ready(function () {
  let count = 0; // Initialize count outside the click event handler
  $("#btn").click(function () {
    var item = $("#add").val().trim();
    if (item !== "") {
      count++; // Increment count for each new day
      let currentTime = new Date().toLocaleTimeString();
      let dayContent =
        "<div><p>Day " + count + " <br>(" + currentTime + ")</p></div>";
      let taskContent = "<div><p>" + item + "</p></div>";
      $(".element").append(dayContent + taskContent);
      $("#add").val(""); // Clear the input field
    }
  });
});

//slide down
$(document).ready(function () {
  $("#flip").click(function () {
    $("#panel").slideToggle("slow");
  });
});

$(document).ready(function () {
  $("#flip1").click(function () {
    $("#pane2").slideToggle("slow");
  });
});

$(document).ready(function () {
  $("#flip2").click(function () {
    $("#pane3").slideToggle("slow");
  });
});

$(document).ready(function () {
  $(".x").mouseenter(function () {
    $(".xleft").animate({ left: "230px" });
  });
  $(".x").mouseleave(function () {
    $(".xleft").animate({ left: "0px" }); // Animating back to the initial position
  });
});

$(document).ready(function () {
  $(".x").mouseenter(function () {
    $(".xright").animate({ right: "230px" });
  });
  $(".x").mouseleave(function () {
    $(".xright").animate({ right: "0px" }); // Animating back to the initial position
  });
});

$(document).ready(function () {
  $("#primary").click(function () {
    $(".ques").toggle();
  });
  $("#send").click(function () {
    $(".ques").hide();
  });
});

$(document).ready(function () {
  $("#q1").click(function () {
    $(".ans1").toggle();
  });
});

$(document).ready(function () {
  $("#q2").click(function () {
    $(".ans2").toggle();
  });
});

$(document).ready(function () {
  $("#q3").click(function () {
    $(".ans3").toggle();
  });
});

$(document).ready(function () {
  $("#q4").click(function () {
    $(".ans4").toggle();
  });
});
$(document).ready(function () {
  $("#q5").click(function () {
    $(".ans5").toggle();
  });
});
