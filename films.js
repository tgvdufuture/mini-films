let filterarray =[];

// gallery card array

let galleryarray = [
    {
        id:1,
        name : "l'ascension",
        src : "assets/images/ascension.jpg",
        link : "./films/Ascencion/index.html"
    },
    {
        id:2,
        name : "avatar",
        src : "assets/images/avatar.jpg",
        link : "./films/Avatar/index.html"
    },
    {
        id:3,
        name : "avatar 2",
        src : "assets/images/avatar2.jpg",
        link : "#"
    },
    {
        id:4,
        name : "the batman",
        src : "assets/images/batman.jpg",
        link : "#"
    },
    {
        id:5,
        name : "captaine fantastique",
        src : "assets/images/cpt-fantastic.jpg",
        link : "#"
    },
    {
        id:6,
        name : "ready player one",
        src : "assets/images/ready-player-one.jpg",
        link : "#"
    },
    {
        id:7,
        name : "retour vers le futur",
        src : "assets/images/retour1.jpg",
        link : "#"
    },
    {
        id:8,
        name : "retour vers le futur 2",
        src : "assets/images/retour2.jpg",
        link : "#"
    },
    {
        id:9,
        name : "retour vers le futur 3",
        src : "assets/images/retour3.jpg",
        link : "#"
    },
    {
        id:10,
        name : "spiderman no way home",
        src : "assets/images/spiderman.jpg",
        link : "#"
    },
    {
        id:11,
        name : "star wras I : la menace fantôme",
        src : "assets/images/star-wars1.jpg",
        link : "#"
    },
    {
        id:12,
        name : "star wras II : l'attaque des clones",
        src : "assets/images/star-wars2.jpg",
        link : "#"
    },
    {
        id:13,
        name : "star wras III : la revanche des sith",
        src : "assets/images/star-wars3.jpg",
        link : "#"
    },
    {
        id:14,
        name : "star wras IV : un nouvel espoir",
        src : "assets/images/star-wars4.jpg",
        link : "#"
    },
    {
        id:15,
        name : "star wras V : l'empire contre-attaque",
        src : "assets/images/star-wars5.jpg",
        link : "#"
    },
    {
        id:16,
        name : "star wras VI : le retour du Jedi",
        src : "assets/images/star-wars6.jpg",
        link : "#"
    },
    {
        id:17,
        name : "star wras VII : le réveil de la force",
        src : "assets/images/star-wars7.jpg",
        link : "#"
    },
    {
        id:18,
        name : "star wras VIII : les derniers jedi",
        src : "assets/images/star-wars8.jpg",
        link : "#"
    },
    {
        id:18,
        name : "star wras IX : l'ascension de skywalker",
        src : "assets/images/star-wars9.jpg",
        link : "#"
    },
    {
        id:19,
        name : "black panther",
        src : "assets/images/black-panther.jpg",
        link : "#"
    },
    {
        id:20,
        name : "black panther: wakanda forever",
        src : "assets/images/black-panther2.jpg",
        link : "#"
    },
    {
        id:21,
        name : "black adam",
        src : "assets/images/black-adam.jpg",
    link : "./films/BlackAdam/index.html"
    },
    {
        id:22,
        name : "la grande aventure lego",
        src : "assets/images/lego.jpg",
        link : "#"
    },
    {
        id:23,
        name : "fast and furious",
        src : "assets/images/fast and furious.jpg",
        link : "#"
    },
    {
        id:24,
        name : "fast and furious 2",
        src : "assets/images/fast and furious 2.jpg",
        link : "#"
    },
    {
        id:25,
        name : "fast and furious: tokyo drift",
        src : "assets/images/fast and furious 3.jpg",
        link : "#"
    },
    {
        id:26,
        name : "fast and furious 4",
        src : "assets/images/fast and furious 4.jpg",
        link : "#"
    },
    {
        id:27,
        name : "fast and furious 5",
        src : "assets/images/fast and furious 5.jpg",
        link : "#"
    },
    {
        id:28,
        name : "fast and furious 6",
        src : "assets/images/fast and furious 6.jpg",
        link : "#"
    },
    {
        id:29,
        name : "fast and furious 7",
        src : "assets/images/fast and furious 7.jpg",
        link : "#"
    },
    {
        id:30,
        name : "fast and furious 8",
        src : "assets/images/fast and furious 8.jpg",
        link : "#"
    },
    {
        id:31,
        name : "fast and furious 9",
        src : "assets/images/fast and furious 9.jpg",
        link : "./films/FastAndFurious9/index.html"
    },
    {
        id:32,
        name : "taxi",
        src : "assets/images/taxi.jpg",
        link : "#"
    },
    {
        id:33,
        name : "taxi 2",
        src : "assets/images/taxi 2.jpg",
        link : "#"
    },
    {
        id:34,
        name : "taxi 3",
        src : "assets/images/taxi 3.jpg",
        link : "#"
    },
    {
        id:35,
        name : "taxi 4",
        src : "assets/images/taxi 4.jpg",
        link : "#"
    },
    {
        id:36,
        name : "taxi 5",
        src : "assets/images/taxi 5.jpg",
        link : "#"
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