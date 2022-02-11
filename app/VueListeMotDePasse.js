class VueListeMotDePasse {
  constructor(){
    this.html = document.getElementById("html-vue-liste-motDePasse").innerHTML;
    this.listemotDePasseDonnee = null;
  }

  initialiserListemotDePasse(listemotDePasseDonnee){
    this.listemotDePasseDonnee = listemotDePasseDonnee;
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;

    let listemotDePasse = document.getElementById("liste-motDePasse");
    const listemotDePasseItemHTML = listemotDePasse.innerHTML;
    let listemotDePasseHTMLRemplacement = "";

    for(var numeromotDePasse in this.listemotDePasseDonnee){
      let listemotDePasseItemHTMLRemplacement = listemotDePasseItemHTML;
      listemotDePasseItemHTMLRemplacement = listemotDePasseItemHTMLRemplacement.replace("{MotDePasse.id}",this.listemotDePasseDonnee[numeromotDePasse].id);
      listemotDePasseItemHTMLRemplacement = listemotDePasseItemHTMLRemplacement.replace("{MotDePasse.siteWeb}",this.listemotDePasseDonnee[numeromotDePasse].siteWeb);
      listemotDePasseHTMLRemplacement += listemotDePasseItemHTMLRemplacement;
    }

    listemotDePasse.innerHTML = listemotDePasseHTMLRemplacement;
  }

}
