$(document).ready(function () {
    $("p").hide();
});

function getUsername() {
    $.ajax({
        url: "https://www.instagram.com/" + document.getElementById("username").value + "/?__a=1"
    }).then(function (data) {
        document.getElementById("ig_biography").innerHTML = data.graphql.user.biography;
        document.getElementById("ig_external_url").innerHTML = data.graphql.user.external_url;
        document.getElementById("ig_edge_followed_by").innerHTML = data.graphql.user.edge_followed_by.count;
        document.getElementById("ig_edge_follow").innerHTML = data.graphql.user.edge_follow.count;
        document.getElementById("ig_full_name").innerHTML = data.graphql.user.full_name;
        document.getElementById("ig_is_private").innerHTML = data.graphql.user.is_private;
        document.getElementById("ig_profile_pic_url_hd").src = data.graphql.user.profile_pic_url_hd;
        document.getElementById("ig_username").innerHTML = data.graphql.user.username;
        document.getElementById("ig_edge_owner_to_timeline_media").innerHTML = data.graphql.user.edge_owner_to_timeline_media.count;
        $("p").show();
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer)
                toast.addEventListener("mouseleave", Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: "success",
            title: data.graphql.user.username + "\nข้อมูลครบแล้วฮับ"
        })
    });
}