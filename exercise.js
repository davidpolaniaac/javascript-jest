import axios from 'axios';

const api = 'https://rickandmortyapi.com/api/character/';

export async function getUserAuthorization(idUser) {

    let permission = false;
    const response = await axios.get(api + idUser);
    const { id, name, status } = response.data;
    if (status == 'Alive') {
        permission = true;
    }
    const userAuthorization = {
        id,
        name,
        permission
    }

    return userAuthorization;
}