class VueMotDePasse {
  constructor(){
    this.html = document.getElementById("html-vue-motDePasse").innerHTML;
    this.motDePasse = null;
  }

  initialisermotDePasse(motDePasse){
    this.motDePasse = motDePasse;
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    document.getElementById("motDePasse-siteWeb").innerHTML = this.motDePasse.siteWeb;
    document.getElementById("motDePasse-url").innerHTML = this.motDePasse.url;
    document.getElementById("motDePasse-motDePasse").innerHTML = this.motDePasse.motDePasse;
    document.getElementById("motDePasse-questionSecrete").innerHTML = this.motDePasse.questionSecrete;
    document.getElementById("motDePasse-reponseSecrete").innerHTML = this.motDePasse.reponseSecrete;
  }

}
