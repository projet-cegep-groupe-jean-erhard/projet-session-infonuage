class Application {
  constructor(window, vueListemotDePasse, vuemotDePasse, vueAjoutermotDePasse, motDePasseDAO){

    this.window = window;

    this.vueListemotDePasse = vueListemotDePasse;

    this.vuemotDePasse = vuemotDePasse;

    this.vueAjoutermotDePasse = vueAjoutermotDePasse;
    // C'est l'équivalent de function(motDePasse){this.ajoutermotDePasse(motDePasse)}
    this.vueAjoutermotDePasse.initialiserAjoutermotDePasse(motDePasse =>this.ajoutermotDePasse(motDePasse));

    this.motDePasseDAO = motDePasseDAO;

    // C'est l'équivalent de function(){this.naviguer()}
    this.window.addEventListener("hashchange", () =>this.naviguer());

    this.naviguer();
  }

  naviguer(){
    let hash = window.location.hash;

    if(!hash){

      this.motDePasseDAO.lister((listemotDePasse) => this.afficherNouvelleListemotDePasse(listemotDePasse));

    }else if(hash.match(/^#ajouter-motDePasse/)){

      this.vueAjoutermotDePasse.afficher();

    }else{

      let navigation = hash.match(/^#motDePasse\/([0-9]+)/);
      let idmotDePasse = navigation[1];

      this.motDePasseDAO.chercher(idmotDePasse, (motDePasse) => this.afficherNouveaumotDePasse(motDePasse));
    }
  }

  afficherNouvelleListemotDePasse(listemotDePasse){

    console.log(listemotDePasse);
    this.vueListemotDePasse.initialiserListemotDePasse(listemotDePasse);
    this.vueListemotDePasse.afficher();
  }

  afficherNouveaumotDePasse(motDePasse){
    console.log(motDePasse);
    this.vuemotDePasse.initialisermotDePasse(motDePasse);
    this.vuemotDePasse.afficher();
  }

  ajoutermotDePasse(motDePasse){
    this.motDePasseDAO.ajouter(motDePasse, () => this.afficherListemotDePasse());
  }

  afficherListemotDePasse(){
    this.window.location.hash = "#";
  }
}

new Application(window, new VueListeMotDePasse(), new VueMotDePasse(), new VueAjouterMotDePasse(), new MotDePasseDAO());

