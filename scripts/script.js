function searchCEP(cep) {
    // remove non-numeric characters
    let cleancep = cep.replace(/\D/g, '');
    // check lenght is ocurring on front
    // assemble url
    let url = `https://viacep.com.br/ws/${cleancep}/json/`;
    // access the url
    return fetch(url)
        // convert to json
        .then(response => response.json())
        .then(api => {
            //console.log(cep);
            document.getElementById("res-cep").textContent = api.cep;
            document.getElementById("res-logradouro").textContent = api.logradouro;
            document.getElementById("res-complemento").textContent = api.complemento;
            document.getElementById("res-bairro").textContent = api.bairro;
            document.getElementById("res-localidade").textContent = api.localidade;
            document.getElementById("res-uf").textContent = api.uf;
            document.getElementById("res-estado").textContent = api.estado;
            document.getElementById("res-regiao").textContent = api.regiao;
            document.getElementById("res-ibge").textContent = api.ibge;
            document.getElementById("res-gia").textContent = api.gia;
            document.getElementById("res-ddd").textContent = api.ddd;
            document.getElementById("res-siafi").textContent = api.siafi;
            //console.log("Street:", address.logradouro);
            //console.log("City:", address.localidade);
            
        })
        //error response
        .catch(error => {
            console.log("Error:", error);
            throw error;
        });
}




//https://viacep.com.br/ws/01001000/json/