class MdpDAO {
    lister(action){
        fetch("https://fsaulsurf7.execute-api.ca-central-1.amazonaws.com/default/lister", {mode:'cors'})
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
        fetch("https://3dfpczdxag.execute-api.ca-central-1.amazonaws.com/default/chercher-par-id" + '?id=' + id , {mode:'cors'})
            .then(response => response.json())
            .then(data =>
            {
                console.log(data);
                let mdp = new Mdp(
                    data[position].siteWeb,
                    data[position].url,
                    data[position].mdp,
                    data[position].questionSecrete,
                    data[position].reponseSecrete,
                    data[position].id);
                action(mdp);
            });
    }
    ajouter(mdp, action){
        console.log(mdp);
        fetch("https://achlj1hu2e.execute-api.ca-central-1.amazonaws.com/default/ajouter",
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
