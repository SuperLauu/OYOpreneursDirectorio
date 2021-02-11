'use strict';
(function () {
    var recipe_dir = "/img/recipe",
        i,
        result_html = "",
        recipe = [
            { "name": "Jose Manuel Olmedo Balandrano", "linkedin": "https://www.linkedin.com/in/jos%C3%A9-manuel-olmedo-balandrano/", "resume": "https://drive.google.com/open?id=1_f-OB-yXtFONKhA6YdywWwCzo-M3VapO" },
			{ "name": "Ramon Eduardo Martinez De la Garza", "linkedin": "www.linkedin.com/in/ramon-martinez-3629311b", "resume": "https://drive.google.com/open?id=1_f-OB-yXtFONKhA6YdywWwCzo-M3VapO" },
			{ "name": "María Leroux Padilla", "linkedin": "http://linkedin.com/in/mlerouxp", "resume": "https://drive.google.com/open?id=1P8oj-WXsnRW79J88bafHslcFaQZqTial" },
			{ "name": "Luis Arturo Becerra Salgado", "linkedin": "https://www.linkedin.com/in/luis-bec-sal/", "resume": "https://drive.google.com/open?id=1C2-p0cKQhMzT1dartH3tB0FLx_cDlZCW" },
			{ "name": "Juan Pablo Velazquez Serralde", "linkedin": "https://www.linkedin.com/in/juanpablovelazquezserralde/", "resume": "https://drive.google.com/open?id=1pZVFAVys1qgYUI29pJUUIPn-k1wBu-XM" },
			{ "name": "Alfredo Rodríguez Flores", "linkedin": "https://www.linkedin.com/in/alfredrodgz/", "resume": "https://drive.google.com/open?id=1_f-OB-yXtFONKhA6YdywWwCzo-M3VapO" },
			{ "name": "Daniela Sanchez Benitez Toledo", "linkedin": "https://www.linkedin.com/in/danielasanchezbeniteztoledo/", "resume": "https://drive.google.com/open?id=145zGsUJe5oHW-qVK1kD1RadcKyTCk6KA" },
			{ "name": "Manuel Magar Vergara", "linkedin": "https://www.linkedin.com/in/manuel-magar-vergara-941393189/", "resume": "https://drive.google.com/open?id=145zGsUJe5oHW-qVK1kD1RadcKyTCk6KA" },
			{ "name": "Alan Patjane Tame", "resume": "https://drive.google.com/open?id=1yOwb1JdWTltLvKd7ZusvIup47ZypOZQR" },
			{ "name": "Sarah Orueta", "linkedin": "https://www.linkedin.com/in/sarah-orueta-284a0b22/", "resume": "https://drive.google.com/open?id=1UrwqxVoXzY5llKROXkTxqocUog0ykp1h" },
        ]
    function generateRecipeCard(recipe_object) {
        var result_html = "<div class='col-md-4'>";
        result_html += '<div class="card" style="margin-bottom:15px;">';
        result_html += '<div class="card-body">';
        result_html += '<h5 class="card-title">' + recipe_object.name + '</h5>';
		result_html += '<a href="' + recipe_object.linkedin + '" class="card-link">Linkedin</a>';
		result_html += '<a href="' + recipe_object.resume + '" class="card-link">Curriculum</a>';
        result_html += '</div>';
        result_html += '</div>';
        result_html += '</div>';
        return result_html;
    }
    result_html += '<div class="row">';
    for (i = 0; i < recipe.length; i++) {
        result_html += generateRecipeCard(recipe[i]);
    }
    result_html += '</div>';
    document.getElementById("card-decks").innerHTML = result_html;
})();