//ES UNA FUNCION.
//el middleware thunk hace el dispatchs al back de forma asincronica y realiza manejos de estados ->

//se manejan 3 estados sobre save-data
// state Products - muestra productos -> save-data-fullfilled
// isLoading - cuando esta cargando, podemos poner un spinner -> save-data-loading
// isError - cuando hay error -> save-data-rejected

//en un try catch, el error sale por isError.

//primero tenemos que agregar las actions y meter la logica

import { saveData, saveDataLoading, saveDataRejected } from "./actions"

export const saveProducts = () => async (dispatch) => {
    try {
        dispatch(saveDataLoading(true));
        const response = await fetch('http://localhost:3001/products');
        const productsResponse = await response.json();
        if (response.status !== 200) throw new Error('Error');
        dispatch(saveData(productsResponse));
        dispatch(saveDataLoading(false));
    } catch (error){
        dispatch(saveDataRejected());
    }
}

