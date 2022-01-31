class MdpDAO {
    lister(action){
        fetch("https://5eetpobsmi.execute-api.ca-central-1.amazonaws.com/default/mdp-lister", {mode:'cors'})
            .then(response => response.json())
            .then(data =>
            {
                console.log(data);
                let listemdp = [];
                for(let position in data){
                    let mdp = new Mdp(
                        data[position].siteWeb,
                        data[position].url,
                        data[position].mdp,
                        data[position].questionSecrete,
                        data[position].reponseSecrete,
                        data[position].id);

                    console.log(mdp);
                    listemdp.push(mdp);
                }
                action(listemdp);
            });
    }
    chercher(id, action){
        fetch("https://e6k0w1zjkc.execute-api.ca-central-1.amazonaws.com/default/mdp-chercher-par-id" + '?id=' + id , {mode:'cors'})
            .then(response => response.json())
            .then(data =>
            {
                console.log(data);
                let mdp = new Mdp(
                    data.siteWeb,
                    data.url,
                    data.mdp,
                    data.questionSecrete,
                    data.reponseSecrete,
                    data.id);
                action(mdp);
            });
    }
    ajouter(mdp, action){
        fetch("https://i9idwxed1m.execute-api.ca-central-1.amazonaws.com/default/mdp-ajouter",
            {
                method: 'POST',
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded'
                },
                body: "mdpjson=" + JSON.stringify(mdp),
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
