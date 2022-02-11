class MotDePasseDAO {
    lister(action){
        // liens Antoine : https://dg0j787qh3.execute-api.us-east-1.amazonaws.com/default/lister
        // lien Julien :   https://5eetpobsmi.execute-api.ca-central-1.amazonaws.com/default/mdp-lister
        fetch("https://5eetpobsmi.execute-api.ca-central-1.amazonaws.com/default/mdp-lister", {mode:'cors'})
            .then(response => response.json())
            .then(data =>
            {
                console.log(data);
                let listemotDePasse = [];
                for(let position in data){
                    let motDePasse = new MotDePasse(
                        data[position].siteWeb,
                        data[position].url,
                        data[position].motDePasse,
                        data[position].questionSecrete,
                        data[position].reponseSecrete,
                        data[position].id);

                    console.log(motDePasse);
                    listemotDePasse.push(motDePasse);
                }
                action(listemotDePasse);
            });
    }
    chercher(id, action){
        // liens Antoine : https://wxnywnet8j.execute-api.us-east-1.amazonaws.com/default/chercher-par-id
        // liens Julien :  https://e6k0w1zjkc.execute-api.ca-central-1.amazonaws.com/default/mdp-chercher-par-id
        fetch("https://e6k0w1zjkc.execute-api.ca-central-1.amazonaws.com/default/mdp-chercher-par-id" + '?id=' + id , {mode:'cors'})
            .then(response => response.json())
            .then(data =>
            {
                console.log(data);
                let motDePasse = new MotDePasse(
                    data.siteWeb,
                    data.url,
                    data.motDePasse,
                    data.questionSecrete,
                    data.reponseSecrete,
                    data.id);
                action(motDePasse);
            });
    }
    ajouter(motDePasse, action){
        // liens Antoine : https://9f0ctklkk7.execute-api.us-east-1.amazonaws.com/default/ajouter
        // liens Julien :  https://i9idwxed1m.execute-api.ca-central-1.amazonaws.com/default/mdp-ajouter
        fetch("https://i9idwxed1m.execute-api.ca-central-1.amazonaws.com/default/mdp-ajouter",
            {
                method: 'POST',
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded'
                },
                body: "motDePassejson=" + JSON.stringify(motDePasse),
                mode:'cors',
            })
            .then(response => response.text())
            .then(data =>
            {
                console.log('Détail:', data);
                action();
            });
    }
}
