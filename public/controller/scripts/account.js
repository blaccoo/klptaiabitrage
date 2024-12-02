function ucwords(str) {
  return str.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
}
////// send mail function to send members verification emails
function send_mail(x) {
  if (x == "") {
    Msg(
      "<i class='fa fa-warning'></i>&nbsp; Error! Reload Page.",
      "alert-danger",
      0,
      "#code_container",
      10000
    );
  } else {
    var data = "user_unique=" + x;
    $.ajax({
      type: "POST",
      url: "../controller/post.php?send_mail",
      data: data,
      beforeSend: function () {
        $("#code_btn").html('<i class="fa fa-spinner fa-spin"></i> ');
      },
      success: function (data) {
        if (data == 1) {
          $("#code_btn").html("send code");
          $("#code_btn").attr("disabled", true);
          Msg(
            '<strong><i class=\'bx bx-check-circle\'></i>&nbsp; Code sent. If there is no mail in the "Inbox", please check your "Spam" folder.</strong>',
            "alert-success",
            0,
            "#code_container",
            10000
          );
          setTimeout(function () {
            $("#code_btn").attr("disabled", false);
          }, 3000);
        } else if (data == 2) {
          Msg(
            "<strong><i class='bx bx-error'></i>&nbsp; User not found. Reload page!!!</strong>",
            "alert-danger",
            0,
            "#code_container",
            10000
          );
          $("#code_btn").html("send code");
        } else {
          Msg(
            "<strong><i class='bx bx-error'></i>&nbsp; Unknown error, try again," +
              data +
              "</strong>",
            "alert-danger",
            0,
            "#code_container",
            10000
          );

          $("#code_btn").html("send code");
        }
      },
    });
  }
} ///////////////////////////
//
////////////////////// account funding request step one ///////////////
//('.panel-heading').toggleClass('active')
function copy_text(x) {
  var btn_content = $("#" + x + "_btn").html();
  /* Get the text field */
  var copyText = document.getElementById(x);
  var btn = $("#" + x + "_btn");
  btn.html("Copied");
  setTimeout(function () {
    btn.html(btn_content);
  }, 3000);
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
  btn.prop("disabled", false);
  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
}
function highlight(x, y) {
  $("#" + x).toggleClass("highlight");
  if ($("#" + y).hasClass("highlight")) {
    $("#" + y).toggleClass("highlight");
  }
  setTimeout(function () {
    if ($("#" + x).hasClass("highlight")) {
      $("#" + x).toggleClass("highlight");
    }
  }, 10000);
}
// Update the count down every 10 second
///////////////////////
function send_message(done) {
  if ($("#subject").val().length == 0) {
    $("#subject").focus();
    Msg(
      "<i class='fa fa-warning'></i>&nbsp; subject is required",
      "alert-danger",
      0,
      "#support_status",
      12000
    );
  } else if ($("#msg_message").val().length < 10) {
    $("#msg_message").focus();
    Msg(
      "<i class='fa fa-warning'></i>&nbsp; message is required",
      "alert-danger",
      0,
      "#support_status",
      12000
    );
  } else if (done == 0) {
    $("#support_btn").prop("disabled", true);
    var btn_content = $("#support_btn").html();
    var data = $("#support_form").serialize();
    $.ajax({
      type: "POST",
      url: "index.php",
      data: data,
      beforeSend: function () {
        $("#support_btn").html(
          '<span class="spinner-border spinner-border-sm align-middle ms-2"></span>'
        );
      },
      success: function (data) {
        if (data == 1) {
          Msg(
            "<strong><i class='bx bx-check-circle'></i>&nbsp;</strong>  We have received your inquiry and will get back to you ASAP",
            "alert-success",
            0,
            "#support_status",
            10000
          );
          setTimeout(function () {
            $("#support_form").trigger("reset");
          }, 5000);
        } else if (data == 2) {
          Msg(
            "<strong><i class='fa fa-warning'></i>&nbsp; fill the form!!!</strong>",
            "alert-danger",
            0,
            "#support_status",
            12000
          );
        } else if (data == 3) {
          Msg(
            "<strong><i class='bx bx-error'></i>&nbsp; account does not exist</strong>",
            "alert-danger",
            0,
            "#support_status",
            12000
          );
        } else {
          Msg(
            "<strong><i class='bx bx-error'></i>&nbsp; Unknown error. please try again</strong>",
            "alert-danger",
            0,
            "#support_status",
            12000
          );
        }
        done = 1;
        $("#support_btn").html(btn_content);
        $("#support_btn").prop("disabled", false);
      },
    });
  }
}
$("#support_btn").click(function (e) {
  send_message(0);
  e.preventDefault();
});
//// Update the last time they checked notification bar
function update_seen(x) {
  if ($("#note_check_contoler").val().length > 0) {
    var note_controler = $("#note_check_contoler").val();
    if (note_controler > 0) {
      var data = { update_email_seen: x };
      $.ajax({
        type: "POST",
        url: "../controller/post.php?update_seen",
        data: data,
        success: function (data) {
          if (data == 1) {
            setTimeout(function () {
              $("#note_number").css("display", "none");
            }, 10000);
            $("#note_check_contoler").val(0);
          }
          //			else{
          //                            alert('error');
          //			}
        },
      });
    }
  }
}
function play_audio() {
  const audio = new Audio("../assets/notification.mp3");
  //    const audio = new Audio("https://freesound.org/data/previews/501/501690_1661766-lq.mp3");
  audio.play();
  setTimeout(function () {
    audio.pause();
  }, 2000);
}
