'use strict';
'use strict';
(function () {
    var recipe_dir = "",
        i,
        result_html = "",
        recipe = [
            { "name": "Jose Manuel Olmedo Balandrano", "puesto": "Business Development", "linkedin": "https://www.linkedin.com/in/jos%C3%A9-manuel-olmedo-balandrano/", "resume": "https://drive.google.com/open?id=1_f-OB-yXtFONKhA6YdywWwCzo-M3VapO" },
			{ "name": "Alfredo Rodríguez Flores", "puesto": "Business Development", "linkedin": "https://www.linkedin.com/in/alfredrodgz/", "resume": "https://drive.google.com/open?id=1_f-OB-yXtFONKhA6YdywWwCzo-M3VapO" },
			{ "name": "Marta Chaves Betancor", "puesto": "Business Development", "linkedin": "https://www.linkedin.com/in/marta-chaves-betancor-928", "resume": "https://drive.google.com/open?id=1UrwqxVoXzY5llKROXkTxqocUog0ykp1h" },
			{ "name": "Alvaro Plaschinski Avila", "puesto": "Business Development", "linkedin": "http://www.linkedin.com/on/alvaro-plaschinski", "resume": "https://drive.google.com/open?id=15IIZLf3mhbCNfbkWy_ODtQasRVch-NKu" },
			{ "name": "Edy Reyes Gomez", "puesto": "Business Development", "linkedin": "https://www.linkedin.com/in/edyreyes/", "resume": "https://drive.google.com/open?id=1mfi6Jd70BPuxCr8U5HxdL9i-G4ty867y" },
			{ "name": "Jhonatan Alfredo Mejía Monroy", "puesto": "Business Development", "linkedin": "https://www.linkedin.com/in/jhonathanm/", "resume": "https://www.linkedin.com/in/jhonathanm/" },
			{ "name": "René Ulloa", "puesto": "Business Development", "linkedin": "https://www.linkedin.com/in/rene-ulloa-mon/", "resume": "https://drive.google.com/open?id=1jb0usRjYi2PlXzgUKvyozD12HkOguT7O" },
			{ "name": "Jose Alfredo Suarez Cazares", "puesto": "Business Development", "linkedin": "https://www.linkedin.com/in/alfredo-suarez-038b5b168", "resume": "https://www.linkedin.com/in/alfredo-suarez-038b5b168" },
			{ "name": "Pablo Floresmeyer Garza", "puesto": "Business Development", "linkedin": "https://www.linkedin.com/in/pablofloresmeyer/", "resume": "https://drive.google.com/open?id=1_K4hToi5_OA4BqGqdVktkDeAat9h8Q5C" },
			{ "name": "Sofia Rojas", "puesto": "Business Development", "linkedin": "https://www.linkedin.com/in/sof%C3%ADa-rojas-313565103/", "resume": "https://www.linkedin.com/in/sof%C3%ADa-rojas-313565103/" },
			{ "name": "Antonio Benítez Molina", "puesto": "Business Development", "linkedin": "https://www.linkedin.com/in/antonio-benitez-molina/", "resume": "https://drive.google.com/open?id=1i31oKp78GcWS2Ug19V97OYjJGWcagHFL" },
			{ "name": "Jose Manuel Hernandez Bautista", "puesto": "Business Development", "linkedin": "https://www.linkedin.com/in/jose-manuel-hernandez-bautista-4438a118a/", "resume": "https://drive.google.com/open?id=1xy_kU-HMonhA2U89_0t2IT0uGHL6aKiT" },
			{ "name": "Guillermo de Jesús Cabrera Núñez", "puesto": "Business Development", "linkedin": "https://www.linkedin.com/in/guillermo-cabrera-n%C3%BA%C3%B1ez-46b519118/", "resume": "https://drive.google.com/open?id=1Rp8mf7l-9_3oBatsB9SBnFATwvL3u92o" },
			{ "name": "Karla Fernanda Martinez Perez ", "puesto": "Business Development", "linkedin": "http://linkedin.com/in/karla-fernanda-martínez-7561b0109", "resume": "https://drive.google.com/open?id=1M9PPWXevt6LRnRjYQe4zTa_c2Is_FfML" },
			{ "name": "Antonio Benítez Molina", "puesto": "Business Development", "linkedin": "https://www.linkedin.com/in/antonio-benitez-molina/", "resume": "https://drive.google.com/open?id=10Q4DqpXixugIdvl0opDUL9pt2R38vUrx" },
			{ "name": "Viridiana Aguilar Oseguera ", "puesto": "Business Development", "linkedin": "http://linkedin.com/in/viridiana-aguilar-oseguera-890395206", "resume": "http://linkedin.com/in/viridiana-aguilar-oseguera-890395206" },
			{ "name": "Hermann Warnholtz Arnal", "puesto": "Business Development", "linkedin": "https://www.linkedin.com/in/hermann-warnholtz-arnal-5b026048/", "resume": "https://drive.google.com/open?id=1hgS4eoFySNEsDGanBJxS6ZBRbzonrOxe" },
			{ "name": "Luis Felipe Loyo Alarcón", "puesto": "Business Development", "linkedin": "https://www.linkedin.com/in/luis-felipe-loyo-alarcón-431a3839", "resume": "https://drive.google.com/open?id=1DXjZIWetFv3ImvsSFkNP7NqpkwQ9Q34p" },
			{ "name": "Argiñe Cob", "puesto": "Business Development", "linkedin": "https://www.linkedin.com/in/arginecob/", "resume": "https://drive.google.com/open?id=1s1jAiJdMFJhgSlL21cyqUVWQq1hG56lt" },
			{ "name": "Sandrine Pagesy Herrera", "puesto": "Business Development", "linkedin": "http://linkedin.com/in/sandrine-pagesy-herrera-298487109", "resume": "http://linkedin.com/in/sandrine-pagesy-herrera-298487109" },
			{ "name": "Nadia Alonso Feregrino", "puesto": "Business Development", "linkedin": "https://www.linkedin.com/in/nalonso030889/", "resume": "https://drive.google.com/open?id=1WbsVTXr_EQjxRoTMnZEMscxIh3ctszKC" },
			{ "name": "Daniela Berenice Quintana Montaño", "puesto": "Business Development", "linkedin": "http://www.linkedin.com//in/daniela-berenice-quintana-montaño-020407206", "resume": "https://drive.google.com/open?id=1o4crX-z4UFqrRLP5APsZSbBMspnAhxA8" },
			{ "name": "Rafael Guerrero Castillo", "puesto": "Business Development", "linkedin": "https://www.linkedin.com/mwlite/in/rafael-guerrero-castillo-630792124", "resume": "https://www.linkedin.com/mwlite/in/rafael-guerrero-castillo-630792124" },
			{ "name": "Luis Enrique Dominguez Delgado", "puesto": "Business Development", "linkedin": "https://www.linkedin.com/in/luis-enrique-dominguez13/", "resume": "https://drive.google.com/open?id=1h4g7LrzsNk4ZAYqv8n8M0TxP2Hns3FYY" },
			{ "name": "Mario Bahena Acevedo", "puesto": "Business Development", "linkedin": "http://www.linkedin.com/in/mariobahena", "resume": "https://drive.google.com/open?id=1S8x5h_D-HzGa5Rw2pDPt2JJcNSjsfspw" },
			{ "name": "Juan Sebastian Jaramillo Lopez", "puesto": "Business Development", "linkedin": "http://linkedin.com/in/juan-sebastian-jaramillo1", "resume": "https://drive.google.com/open?id=1Xbejsrd4H1J9AhUAlwGRaPHOt4kykk5D" },
			{ "name": "Diego Mauricio Navarro Huber", "puesto": "Business Development", "linkedin": "https://www.linkedin.com/in/diego-navarro-huber/", "resume": "https://drive.google.com/open?id=1hZUKGBh9F4W_8VzJWIeWfDyOW5V8bpy9" },
			{ "name": "Miguel Angel Rodriguez Jamaica", "puesto": "Business Development", "linkedin": "http://linkedin.com/in/miguelangelrodriguezjamaica", "resume": "https://drive.google.com/open?id=1I5i9Ol9z6Lzfhf1J849yu899AyIojHOn" },
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
