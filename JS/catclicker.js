var model = {
currentCat: null,
cats: [
     
       {
        name: "Marie",
        url: "https://sgtr.files.wordpress.com/2010/09/mariedisneycat.gif",
        numClicks: 0
        },
      {   
        name: "Figaro",
        url: "http://ak-hdl.buzzfed.com/static/2013-10/enhanced/webdr06/28/21/anigif_enhanced-buzz-8750-1383009330-0.gif",
        numClicks: 0
      },
      {
        name: "Siamese",
        url: "http://media.giphy.com/media/12Rm726db4Vthm/giphy.gif",
        numClicks: 0
      },
      {
        name: "Cheshire Cat",
        url: "http://vignette4.wikia.nocookie.net/aliceinwonderland/images/3/3b/Cc5.gif/revision/latest?cb=20120628160653",
        numClicks: 0
      },
      {
        name: "Oliver",
        url: "https://33.media.tumblr.com/fb406b33f463d2030b192763d6fd85c8/tumblr_n4is5fgHD21tue1eio1_500.gif",
        numClicks: 0
      },
      {
        name: "Simba",
        url: "https://38.media.tumblr.com/a8d264dd1aae455fcb06a63137154b4b/tumblr_n15j08KLEj1rncdgao1_500.gif",
        numClicks: 0
      }
      ]

};

/*-----------Octopus-------*/

var octopus = {
    
//calls catView function that creates clickable cat list
init: function(){
       catView.start();
       catView.list();
    },
    
//gets model.cats from the model
getCats: function() {
        return model.cats;
    },
    
setCurrentCat: function(cat) {
        model.currentCat = cat;
    },
getCurrentCat: function() {
        return model.currentCat;
    }
    
};

/*--------View-----------*/

var catView = {
  
//this function create a list of clickable cats

start: function(){
    var theCats = octopus.getCats();
    
    document.getElementById("name").innerHTML = theCats[0].name 
    document.getElementById("thecat").src = theCats[0].url;
    document.getElementById("count").innerHTML = "Count: " + theCats[0].numClicks;
    octopus.setCurrentCat(theCats[0]);
  
},

list: function() {
    
    var theCats = octopus.getCats();
    document.getElementById("list").innerHTML = "";
    
    for (var i = 0; i < theCats.length; i++) {
    var num = i;

    var elem = document.createElement('li');
    elem.textContent =  theCats[i].name

    elem.addEventListener('click', (function(seeCat) {
        return function() {
            document.getElementById("name").innerHTML = theCats[seeCat].name 
            document.getElementById("thecat").src = theCats[seeCat].url;
            theCats[seeCat].numClicks = theCats[seeCat].numClicks + 1;
            document.getElementById("count").innerHTML = "Count: " + theCats[seeCat].numClicks;
            octopus.setCurrentCat(theCats[seeCat]);
              
        };
    })(num));
    console.log(elem);
    document.getElementById("list").appendChild(elem);   
};
},

//this function increments points on click
change: function() {
    var current = octopus.getCurrentCat();
    current.numClicks = current.numClicks + 1;
    document.getElementById("count").innerHTML = "Count: " + current.numClicks;    //code
    
    
},

click: function(){
    document.getElementById("admin").style.display = "block";
},

clearIt: function(){
    document.getElementById('catname').value = "";
    document.getElementById('caturl').value = "";
    document.getElementById('nclicks').value = "";
},

save: function(){
    var current = octopus.getCurrentCat();
    current.name = document.getElementById('catname').value;
    current.url = document.getElementById('caturl').value;
    current.numClicks = parseInt(document.getElementById('nclicks').value);
    document.getElementById("name").innerHTML = current.name 
    document.getElementById("thecat").src = current.url;
    document.getElementById("count").innerHTML = "Count: " + current.numClicks;
    catView.list();
    document.getElementById("admin").style.display = "none";
    catView.clearIt();

},


cancel: function(){
    document.getElementById("admin").style.display = "none";
    catView.clearIt();
}
};

//start the list
octopus.init();
