let filterarray =[];

// gallery card array

let galleryarray = [
    {
        id:1,
        name : "L'Ascension",
        src : "assets/images/ascension.jpg",
        link : "./films/Ascension/index.html"
    },
    {
        id:2,
        name : "Avatar",
        src : "assets/images/avatar.jpg",
        link : "./films/Avatar/index.html"
    },
    {
        id:3,
        name : "Avatar : La Voie De L'Eau",
        src : "assets/images/avatar2.jpg",
        link : "./films/Avatar2/index.html"
    },
    {
        id:4,
        name : "The Batman",
        src : "assets/images/batman.jpg",
        link : "films/Batman/index.html"
    },
    {
        id:6,
        name : "Ready Player One",
        src : "assets/images/ready-player-one.jpg",
        link : "./films/ReadyPlayerOne/index.html"
    },
    {
        id:10,
        name : "Spiderman No Way Home",
        src : "assets/images/spiderman.jpg",
        link : "./films/Spiderman/index.html"
    },
    {
        id:11,
        name : "Star Wars I : la menace fantôme",
        src : "assets/images/star-wars1.jpg",
        link : "./films/StarWars1/index.html"
    },
    {
        id:12,
        name : "tar wars II : l'attaque des clones",
        src : "assets/images/star-wars2.jpg",
        link : "./films/StarWars2/index.html"
    },
    {
        id:13,
        name : "Star Wars III : la revanche des sith",
        src : "assets/images/star-wars3.jpg",
        link : "./films/StarWars3/index.html"
    },
    {
        id:14,
        name : "Star Wars IV : un nouvel espoir",
        src : "assets/images/star-wars4.jpg",
        link : "./films/StarWars4/index.html"
    },
    {
        id:15,
        name : "Star Wars V : l'empire contre-attaque",
        src : "assets/images/star-wars5.jpg",
        link : "./films/StarWars5/index.html"
    },
    {
        id:16,
        name : "Star Wars VI : le retour du Jedi",
        src : "assets/images/star-wars6.jpg",
        link : "./films/StarWars6/index.html"
    },
    {
        id:17,
        name : "Star Wars VII : le réveil de la force",
        src : "assets/images/star-wars7.jpg",
        link : "./films/StarWars7/index.html"
    },
    {
        id:18,
        name : "Star Wars VIII : les derniers jedi",
        src : "assets/images/star-wars8.jpg",
        link : "./films/StarWars8/index.html"
    },
    {
        id:18,
        name : "Star Wars IX : l'ascension de skywalker",
        src : "assets/images/star-wars9.jpg",
        link : "./films/StarWars9/index.html"
    },
    {
        id:19,
        name : "Black Panther",
        src : "assets/images/black-panther.jpg",
        link : "./films/BlackPanther/index.html"
    },
    {
        id:20,
        name : "Black Panther : wakanda forever",
        src : "assets/images/black-panther2.jpg",
        link : "./films/BlackPanther2/index.html"
    },
    {
        id:21,
        name : "Black Adam",
        src : "assets/images/black-adam.jpg",
    link : "./films/BlackAdam/index.html"
    },
    // {
    //     id:23,
    //     name : "Fast and Furious",
    //     src : "assets/images/fast and furious.jpg",
    //     link : "#"
    // },
    // {
    //     id:24,
    //     name : "Fast and Furious 2",
    //     src : "assets/images/fast and furious 2.jpg",
    //     link : "#"
    // },
    // {
    //     id:25,
    //     name : "Fast and Furious: Tokyo Drift",
    //     src : "assets/images/fast and furious 3.jpg",
    //     link : "#"
    // },
    // {
    //     id:26,
    //     name : "Fast and Furious 4",
    //     src : "assets/images/fast and furious 4.jpg",
    //     link : "#"
    // },
    // {
    //     id:27,
    //     name : "Fast and Furious 5",
    //     src : "assets/images/fast and furious 5.jpg",
    //     link : "#"
    // },
    // {
    //     id:28,
    //     name : "Fast and Furious 6",
    //     src : "assets/images/fast and furious 6.jpg",
    //     link : "#"
    // },
    // {
    //     id:29,
    //     name : "Fast and Furious 7",
    //     src : "assets/images/fast and furious 7.jpg",
    //     link : "#"
    // },
    // {
    //     id:30,
    //     name : "Fast and Furious 8",
    //     src : "assets/images/fast and furious 8.jpg",
    //     link : "#"
    // },
    {
        id:31,
        name : "Fast and Furious 9",
        src : "assets/images/fast and furious 9.jpg",
        link : "./films/FastAndFurious9/index.html"
    },
    {
        id:32,
        name : "Taxi",
        src : "assets/images/taxi.jpg",
        link : "./films/Taxi/index.html"
    },
    {
        id:33,
        name : "Taxi 2",
        src : "assets/images/taxi 2.jpg",
        link : "./films/Taxi2/index.html"
    },
    {
        id:34,
        name : "Taxi 3",
        src : "assets/images/taxi 3.jpg",
        link : "./films/Taxi3/index.html"
    },
    {
        id:35,
        name : "Taxi 4",
        src : "assets/images/taxi 4.jpg",
        link : "./films/Taxi4/index.html"
    },
    {
        id:36,
        name : "Taxi 5",
        src : "assets/images/taxi 5.jpg",
        link : "./films/Taxi5/index.html"
    },
    {
        id:37,
        name : "Alerte Rouge",
        src : "assets/images/alerte rouge.jpg",
        link : "./films/AlerteRouge/index.html"
    },
    {
        id:38,
        name : "Free Guy",
        src : "assets/images/free-guy.jpg",
        link : "./films/FreeGuy/index.html"
    },
    {
        id:39,
        name : "Encanto",
        src : "assets/images/encanto.jpg",
        link : "./films/Encanto/index.html"
    },
    {
        id:40,
        name : "Abominable",
        src : "assets/images/abominable.jpg",
        link : "./films/Abominable/index.html"
    },
    {
        id:41,
        name : "Les Bad Guys",
        src : "assets/images/badguys.jpg",
        link : "./films/BadGuy/index.html"
    },
    ];


showgallery(galleryarray);


// create function to show card

function showgallery(cards){
    document.getElementById("card").innerText = "";
    for(var i=0;i<cards.length;i++){
        document.getElementById("card").innerHTML += `
            <div class="card-moi">
                <img src="${cards[i].src}" class="card-img-top img-card">
                <h5 class="title-card">${cards[i].name}</h5>
                <button class="buton-card"><a href="${cards[i].link}">Voir plus</a></button>
            </div>  
        `
    }
 
 }
 


// For Live Searching Product

document.getElementById("myinput").addEventListener("keyup",function(){
    let text = document.getElementById("myinput").value;

    filterarray= galleryarray.filter(function(a){
        if(a.name.includes(text)){
            return a.name;
           }

   });
   if(this.value==""){
       showgallery(galleryarray);
   }
   else{
       if(filterarray == ""){
           document.getElementById("para").style.display = 'block'
           document.getElementById("card").innerHTML = ""; 
       }
       else{

           showgallery(filterarray);
           document.getElementById("para").style.display = 'none'
       }
   }

});