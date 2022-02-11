class VueAjouterMotDePasse {
  constructor(){
    this.html = document.getElementById("html-vue-ajouter-motDePasse").innerHTML;
    this.ajoutermotDePasse = null;
  }

  initialiserAjoutermotDePasse(ajoutermotDePasse){
    this.ajoutermotDePasse = ajoutermotDePasse;
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    document.getElementById("formulaire-ajouter").addEventListener("submit",evenement =>this.enregistrer(evenement));
  }

  enregistrer(evenement){
    evenement.preventDefault();

    let siteWeb = document.getElementById("motDePasse-siteWeb").value;
    let url = document.getElementById("motDePasse-url").value;
    let motDePasse = document.getElementById("motDePasse-motDePasse").value;
    let questionSecrete = document.getElementById("motDePasse-questionSecrete").value;
    let reponseSecrete = document.getElementById("motDePasse-reponseSecrete").value;

    this.ajoutermotDePasse(new MotDePasse(siteWeb, url, motDePasse, questionSecrete, reponseSecrete, null));

  }

}