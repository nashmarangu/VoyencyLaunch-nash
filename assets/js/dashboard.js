// append input field
$('.add_depart_city').on('click', function () {
    $(".profile-form-row").append(' <div class="col-lg-4 profile-form-col"><div class="profile-form-group profile-form-group-close-icon"><a href="javascript:void(0)" class="closeAppend-input" ><i><img src="assets/images/cross-btn.svg" alt=""></i></a><input type="text" placeholder="Departing City" class="profile-input-cmn"></div></div>')
})

// remove appended div
$(document).on('click', '.closeAppend-input', function (e) {
    $(this).parent().parent().remove();

})

