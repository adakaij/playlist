/* global $ */

// BELOW Update the songs to your favorites songs. There should be at least 4.
var songs = [
    "SLOW DANCING IN THE DARK",
    "This House",
    "Francis Forever",
    "For Now",
    "Lookalike",
    "I Think You're Alright"
];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above

var image_links = [
    "https://ssle.ulximg.com/image/750x750/cover/1536764694_29b4ca606a616cf753bdf94d27c98a84.jpg/2b764f480639834555b4e1176cae3b2e/1536764694_c7d8b93295f788215b0b38bd25a38730.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/81lm4E%2BtFSL._SL1400_.jpg",
    "https://media.pitchfork.com/photos/5929ab1e13d1975652139b60/1:1/w_320/d5ef5055.jpg",
    "https://images.genius.com/500e8f2da334868da6fa60f6e466726f.640x640x1.jpg",
    "https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2Fa4f8246db1a3ef98674be831fde29f12.1000x1000x1.png",
    "https://f4.bcbits.com/img/a4281264503_10.jpg"
];
var artists = ["Joji", "Japanese Breakfast", "Mitski", "Kina Grannis", "Conan Gray", "Jay Som"];
var song_lengths = ["3:30", "3:03", "2:29", "3:16", "3:40", "3:46"];
var song_links = [
    "https://www.youtube.com/watch?v=5xwmensMDn0",
    "https://www.youtube.com/watch?v=rrnAd7UxDrE",
    "https://www.youtube.com/watch?v=UMJm_97QXHA",
    "https://www.youtube.com/watch?v=KWmCgdqP_m8",
    "https://www.youtube.com/watch?v=ZKff6nOQMA0",
    "https://www.youtube.com/watch?v=X1-15vpUF8s"
    ];
    

function displaySongInfo(){
    songs.forEach(function(song) {
        $("#songs").append("<p>" + song + "</p>"); 
    });
    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
    image_links.forEach(function(image){
        $("#images").append(`<img src = ${image}>`);
    });
    artists.forEach(function(artist){
       $("#artists").append("<p>" + artist + "</p>");
    });
    song_lengths.forEach(function(length){
        $("#lengths").append("<p>" + length + "</p>");
    });
    song_links.forEach(function(link){
        $("#links").append(`<a href = ${link}>listen now</a>`);
    });
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#artists").empty();
    $("#lengths").empty();
    $("#images").empty();
    $("#links").empty();
    $("#delete").empty();
}

function displayDelete(){
    for(let i = 0; i <= songs.length; i++){
        var deleteButton = $("<button>" + "Delete" + "</button>");
        $("#delete").append(deleteButton);
        deleteButton.click(function(){
            emptySongInfo();
            songs.splice(i, 1);
            image_links.splice(i, 1);
            artists.splice(i, 1);
            song_lengths.splice(i, 1);
            song_links.splice(i, 1);
            displaySongInfo();
            displayDelete();
        });
    }
}

function addSongInfo(){
    var songName = $("#song").val();
    songs.push(songName);
    // BELOW write the code to add new items to each of the other arrays
    var imageLink = $("#image").val();
    image_links.push(imageLink);
    var artistName = $("#artist").val();
    artists.push(artistName);
    var songLength = $("#length").val();
    song_lengths.push(songLength);
    var songLink = $("#link").val();
    song_links.push(songLink);
    songs.length++;
}


$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
    displayDelete();
});
displaySongInfo();
displayDelete();
