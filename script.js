$(document).ready(function() {           
    $("#driver").click(function(event){
       $.getJSON('https://api.github.com/users', function(data) {
            for (var i = 0; i < data.length; i++)
                 {
                var item = data[i];
                $('#stage').append('<p> Login: ' + item.login + '</p>');
                $('#stage').append('<p>ID : ' + item.id+ '</p>');
                $('#stage').append('<p> Image:' + item.avatar_url+ '</p>');
                }
       });
    });       
 });

/*

 $(document).ready(function () {
    $("#driver").click(function(event){
    // FETCHING DATA FROM JSON FILE
    $.getJSON("https://api.github.com/users", 
            function (data) {
        var student = '';

        // ITERATING THROUGH OBJECTS
        $.each(data, function (key, value) {

            //CONSTRUCTION OF ROWS HAVING
            // DATA FROM JSON OBJECT
            student += '<tr>';
            student += '<td>' + 
                value.login + '</td>';

            student += '<td>' + 
                value.id + '</td>';

            student += '<td>' + 
                value.avatar_url + '</td>';

            
            student += '</tr>';
        });
          
        //INSERTING ROWS INTO TABLE 
        $('#table').append(student);
    });
});
});
*/