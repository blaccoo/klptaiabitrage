/////////////////////////
$("#withdraw_method").change(function () {
  var withdraw_method = "--";
  if ($("#withdraw_method").val().length != 0) {
    withdraw_method = ucwords($("#withdraw_method").val());
  }
  $(".cur_type").html(withdraw_method);
});
$("#amount").keyup(function () {
  var amount = 0.0;
  var fee = 0;
  if ($("#amount").val().length != 0) {
    amount = parseFloat($("#amount").val());
    fee = (parseFloat($("#with_fee").val()) * amount) / 100;
  }
  var new_amount =
    "$" +
    amount.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  $(".cur_amount").html(new_amount);
  $(".cur_total").html(new_amount);
  $(".with_fee").html(fee);
});
$("#withdraw_details").blur(function () {
  var wallet = "--";
  if ($("#withdraw_details").val().length != 0) {
    wallet = $("#withdraw_details").val();
  }
  $(".cur_wallet").html(wallet);
});
$("#withdraw_details").keyup(function () {
  var wallet = "--";
  if ($("#withdraw_details").val().length != 0) {
    wallet = $("#withdraw_details").val();
  }
  $(".cur_wallet").html(wallet);
});
/////////////////////////
$(".step_1").click(function () {
  var val = parseFloat($("#amount").val());
  var withdraw_method = $("#withdraw_method").val();
  var wallet = $("#withdraw_details").val();
  var status = "#status_pay";
  var min_with = parseFloat($("#min_with").val());
  var with_balance = parseFloat($("#with_bal").val());
  if (withdraw_method.length == 0) {
    $("#withdraw_method").focus();
    Msg(
      "<i class='ti ti-error'></i>&nbsp; select currency...",
      "alert-danger",
      0,
      status,
      12000
    );
  } else if ($("#amount").val().length == 0) {
    $("#amount").focus();
    Msg(
      "<i class='ti ti-error'></i>&nbsp; enter amount...",
      "alert-danger",
      0,
      status,
      12000
    );
  } else if (wallet.length < 20) {
    $("#withdraw_details").focus();
    Msg(
      "<i class='ti ti-error'></i>&nbsp; enter a valid wallet address...",
      "alert-danger",
      0,
      status,
      12000
    );
  } else if (val < min_with) {
    Msg(
      "<i class='ti ti-error'></i>&nbsp; minimum withdrawal is $" +
        min_with +
        "...",
      "alert-danger",
      0,
      status,
      12000
    );
    $("#amount").focus();
  } else if (with_balance < val) {
    Msg(
      "<i class='ti ti-error'></i>&nbsp; insufficient balance",
      "alert-danger",
      0,
      status,
      12000
    );
    $("#amount").focus();
  } else {
    $("#dep_status").html("");
    withdraw_funds();
  }
});

////////////////////// account withdrawal request ///////////////
function withdraw_funds() {
  var min_with = parseFloat($("#min_with").val());
  var status = "#status_pay";
  var btcontent = $("#withdraw_btn").html();
  $("#withdraw_btn").prop("disabled", true);
  var data = $("#withdraw_form").serialize();
  $.ajax({
    type: "POST",
    url: "../controller/post.php?withdraw_money",
    data: data,
    beforeSend: function () {
      $("#withdraw_btn").html(
        '<span class="spinner-border spinner-border-sm align-middle ms-2"></span>'
      );
    },
    success: function (data) {
      if (data == 1 || data.length == 10) {
        $(".dep_invoice").html(data);
        $(".form_con").addClass("d-none");
        $(".payment_con").removeClass("d-none");
        setTimeout(function () {
          $("#withdraw_form").trigger("reset");
        }, 6000);
      } else if (data == 2) {
        Msg(
          "<strong><i class='ti ti-error'></i>&nbsp;</strong> all fields are required!!!",
          "alert-danger",
          0,
          status,
          12000
        );
      } else if (data == 3) {
        Msg(
          "<strong><i class='ti ti-error'></i>&nbsp;</strong> account does not exist",
          "alert-danger",
          0,
          status,
          12000
        );
      } else if (data == 4) {
        Msg(
          "<strong><i class='ti ti-error'></i>&nbsp;</strong> Action Rejected!!!. You must fund your account first",
          "alert-danger",
          0,
          status,
          12000
        );
      } else if (data == 5) {
        Msg(
          "<strong><i class='ti ti-error'></i>&nbsp;</strong> insufficient balance",
          "alert-danger",
          0,
          status,
          12000
        );
      } else if (data == 6) {
        Msg(
          "<strong><i class='ti ti-error'></i>&nbsp;</strong> minimum withdrawal is $" +
            min_with,
          "alert-danger",
          0,
          status,
          12000
        );
      } else if (data == 7) {
        Msg(
          "<strong><i class='ti ti-error'></i>&nbsp;</strong> incorrect security pin",
          "alert-danger",
          0,
          status,
          12000
        );
      } else if (data == 31) {
        Msg(
          "<strong><i class='ti ti-error'></i>&nbsp;</strong> Invalid google 2FA code",
          "alert-danger",
          0,
          status,
          12000
        );
      } else if (data == 8) {
        Msg(
          "<strong><i class='ti ti-error'></i>&nbsp;</strong> invalid withdrawal address",
          "alert-danger",
          0,
          status,
          12000
        );
      } else if (data == 9) {
        Msg(
          "<strong><i class='ti ti-error'></i>&nbsp;</strong> you have pending withdrawals",
          "alert-danger",
          0,
          status,
          12000
        );
      } else if (data == 10) {
        Msg(
          "<strong><i class='ti ti-error'></i>&nbsp;</strong> Payment option currently not available..",
          "alert-danger",
          0,
          status,
          12000
        );
      } else {
        Msg(
          "<strong><i class='ti ti-error'></i>&nbsp;</strong> Unknown error. " +
            data,
          "alert-danger",
          0,
          status,
          12000
        );
      }
      if (data != 1) {
        $("#withdraw_btn").prop("disabled", false);
      }

      $("#withdraw_btn").html(btcontent);
    },
  });
}
