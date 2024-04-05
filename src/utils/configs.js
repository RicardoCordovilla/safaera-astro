// export const API_URL = "http://localhost:9000/api/v1/"
export const API_URL = "https://safaera-api-production.up.railway.app/api/v1/"

export const API_METHODS = {
    configs: {
        getConfigs: {
            method: "GET",
            url: API_URL + "configs"
        },
    },
    reservas: {
        createReserva: {
            method: "POST",
            url: API_URL + "reservas"
        }
    }
}