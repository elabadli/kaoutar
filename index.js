
	var maDiv=document.getElementById('maDiv')
 	var body=document.getElementById('b0') 
    var ajouter = document.getElementById('ajouter');
    var champ = document.getElementById('champ');
    //ajouter des donne dans le localStorage
    ajouter.addEventListener('click', function(e) {
     maDiv.innerHTML = champ.value;
     
 	     e.preventDefault();
   /* localStorage.firstName=champ.value;
    alert('Saved successfully!');*/
  
  
 var session = localStorage.getItem("Liste");
  // var liste = JSON.parse(session);
  //La méthode JSON.parse() parse une chaîne de caractères en JSON et construit la valeur JavaScript ou l'objet décrit par cette chaîne
  var Liste= []
 
  
  Liste.push({value: champ.value});
  if (session== null) {
  	localStorage.setItem('Liste',JSON.stringify(Liste));
  }else
  {
  	var result = JSON.parse(session)
        result.push({value:champ.value});
        localStorage.setItem("Liste", JSON.stringify(result));
  }
  
  },false);
    //supprimer une cle dans le localStorage
    var supprimer = document.getElementById('supprimer');
    supprimer.addEventListener('click', function(e) {
    e.preventDefault();
    localStorage.removeItem('Liste');
},false);

    // supprimer une valeur precise dans un tableau
    var remove = document.getElementById('remove');
    remove.addEventListener('click', function(e) {
    e.preventDefault();
    var session = localStorage.getItem("Liste");
    var result = JSON.parse(session);
    var new_session = [];

    for (var i = 0; i < result.length; i++)
    {
        if(result[i].value != champ.value)
        {
            new_session.push(result[i])
        }
    }
    
    localStorage.setItem("Liste", JSON.stringify(new_session));
   });
