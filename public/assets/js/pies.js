// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".devoured-state").on("click", function (event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var newDevourState = {
            devoured: newDevour
        };

        // Send the PUT request.
        $.ajax("/api/pies/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("changed status to", newDevour);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newPie = {
            name: $("#pie").val().trim(),
            devoured: false
        };

        // Send the POST request.
        $.ajax("/api/pies", {
            type: "POST",
            data: newPie
        }).then(
            function () {
                console.log("added new pie");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
