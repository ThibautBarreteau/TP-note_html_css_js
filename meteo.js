            function showCity(){
                //alert(villePrecedente); console.log(villeCourante);
//                 alert("balise 1");
//                   alert("On sait au moins que le truc a été appellé");
//                 alert(document.getElementById("WhichCity").value;
//                  let thisCity = document.getElementById("Lyon")//.value;
                let thisCity = document.getElementById("citySelect").value; // value renvoie un String, le nom séléctionné dans les options "Lyon", "Marseille" ou "Nantes"
//                  alert("balise 2, pourvu que ça fonctionne!!!"+thisCity);
                 let cities = document.getElementsByClassName("city");
//                  alert("Si celui-là fonctionne, c'est la fête, sa taille: "+cities.length +" "+cities[0].id);
//                 alert(cities[0].id);
                for(i=0;i<cities.length;i++){
//                     alert(i+" "+cities[i].id);
                     if(cities[i].id==thisCity){
//                         alert("fonctionne pour i= "+i+", il s'agit de:"+ cities[i].id);
//                          cities[i].style.display("none");
                        document.getElementById(cities[i].id).style.display = "block";
                    }
                     else{
//                         alert("on s'approche");
                        document.getElementById(cities[i].id).style.display = "none";
                     }
                }
            }
//          let villeCourante="Villeurbanne";
//          let villePrecedente="Paris"
