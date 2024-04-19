let user = [
    {
        identite : {nom:"Adili" , prenom:"Tarik", genre:"H"},
        profil : "Stagiaire",
        specialite : "Developpement Digital",
        classe : "DD102",
        notes : {M101 : 12, M102:14, M103:17}

    }
]
let specialites = ["Developpeme Digital", "UI/UX", "infrastructure Digital", "inteligence Afrificielle"]
function afficher(){
    let form = [
        {
            identite : {nom:"nm" , prenom:"prnm" , genre:"gr"},
            profile : "Stagiaire",
            specialite : "spec",
            classe : "cls",
            notes : {M101:"n1", M102:"n2",M103:"n3"}
        }

    ]

    
form.map((s)=>{
        nm = document.getElementById("nom").value;
        prnm = document.getElementById("prenom").value;
        gr = document.getElementById("genre").value;
        spec=document.getElementById("specialite").value;
        cls=document.getElementById("class").value;
        n1=document.getElementById("note1").value;
        n2=document.getElementById("note2").value;
        n3=document.getElementById("note3").value;
    
        moyenne=((Number(n1)+Number(n2)+Number(n3))/3);
        document.getElementById("ccontainer").innerHTML += `
            <div class="card" id="card" style="background-color: ${gr == 'homme' ? '#BDD7EE' : '#f8cbad'};">
                <div class="filter">
                    <button id="delete" onclick="deleteCard(this)">-</button>
                    <button id="change" >+</button>
                </div>
                <div class="image">
                    <img src="${gr == 'homme' ? './assets/cara3.png' : './assets/cara4.png'}" alt="" width="120px" height="120px">
                </div>
                <div class="information">
                    <p class="p1">${nm} ${prnm}</p>
                    <p class="p2">${spec} - ${cls}</p>
                </div>
                <div class="moyenne">
                    <p><span>#1</span> Moyenne : ${moyenne.toFixed(2)}</p>
                </div>
            </div>
            
        
        `

    })

returntocard=document.getElementById("ajouterlestagiaire").value;
if(returntocard=true){
    document.getElementById("card").style.display="block";
    document.getElementById("ccontainer").style.display="flex";
    document.getElementById("formulaire").style.display="none";
    document.getElementById("h1").style.display="flex";
}

}

function deleteCard(button) {
    button.parentElement.parentElement.remove();
}
function showwarning(){
aaaaa=document.getElementById("delete").value;
if (aaaaa=true) {
    document.getElementById("container").style.display="none"
    document.getElementById("formulaire").style.display="none";
    document.getElementById("warning").style.display="block";
}}

function afficherformulaire(){
ajouter_stagiaire=document.getElementById("add").value;
if(ajouter_stagiaire=true){
    document.getElementById("card").style.display="none";
    document.getElementById("h1").style.display="none";
    document.getElementById("title").style.marginTop="-185px";
    document.getElementById("ccontainer").style.display="none";
    document.getElementById("formulaire").style.display="block";
}}



