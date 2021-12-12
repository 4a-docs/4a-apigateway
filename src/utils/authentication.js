const { ApolloError } = require("apollo-server-errors");
const fetch = require("node-fetch");
const serverConfig = require("../server");

const authentication = async ({ req }) => {

    const token = req.headers.authorization || '';
    // console.log(token);

    if ( token == '' ) {
        return { userIdToken: null }
    }else{
        console.log("entro 1");
        try {
            console.log('entro 2');
            let requestOptions = {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "token "+token
                },
                redirect: 'follow'
            }
            
            let response = await fetch(`${serverConfig.auth_url}/api/token-user`,requestOptions);
            // let response = await fetch(`${serverConfig.auth_url}/api/token-user`,requestOptions);
            console.log('entro 3');
            // console.log(token);
            // console.log(response);
            
            // if ( response.status != 200 ) {
            //     console.log("Fallo: ",response);
            //     throw new ApolloError("SESIÓN INACTIVA", 401)
            // }

            // console.log(['id new', response]);
            return { userIdToken: (await response.json()) };

        } catch (error) {
                console.log("FALLO", error);
                throw new ApolloError("ERROR DESCONOCIDO", 500)
        }
    }
};

module.exports = authentication;