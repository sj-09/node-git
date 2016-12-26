/**
 * Created by Nan on 2016/11/16.
 */
(function () {
    var submitBtn = $('#submitBtn');
    init();
    function init() {
        submitBtn.on('click', function () {
            var data = {
                user: $('#user').val(),
                pswd: $('#pswd').val()
            };
            $.ajax({
                type: "POST",
                url: "/userLogin",
                dataType: 'json',
                data: data,
                success: function (res) {
                    if (res.errCode == 0 && res.isSuccess) {
                        alert('登陆成功');
                        location.href = "http://localhost:8080/home";
                    }
                }
            });
        });
    }
})();