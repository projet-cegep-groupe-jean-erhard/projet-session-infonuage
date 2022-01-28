class MdpDAO {
    lister(action){
        fetch("https://b7uoypuzod.execute-api.ca-central-1.amazonaws.com/default/lister-mdp", {mode:'cors'})
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
        fetch("https://4zgtwy94y7.execute-api.ca-central-1.amazonaws.com/default/chercher-par-id-mdp" + '?id=' + id , {mode:'cors'})
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
        console.log(mdp);
        fetch("https://gz9e99jfqd.execute-api.us-east-1.amazonaws.com/default/ajouter",
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
