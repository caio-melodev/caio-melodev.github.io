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
        .then(address => {
            console.log(cep);
            console.log("Street:", address.logradouro);
            console.log("City:", address.localidade);
        
        })
        //error response
        .catch(error => {
            console.log("Error:", error);
            throw error;
        });
}




//https://viacep.com.br/ws/01001000/json/