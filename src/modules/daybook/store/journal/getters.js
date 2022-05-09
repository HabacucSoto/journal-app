// ? Como tiene que verse el getter
// export const myGetter = ( state ) => {
    // return state
// }

// ! Si no se usa state se puede comentar para no tener problemas con linter 

// si se quiere pasar paramateros, la primera arrow function tiene que retornar otra 
export const getEntriesByTerm = ( state ) => ( term = '' ) => {
    
    if( term.length === 0 ) return state.entries
    
    return state.entries.filter( entry => entry.text.toLowerCase().includes( term.toLocaleLowerCase() ) )

}

export const getEntryById = ( state ) => ( id = '' ) => {
    
    const entry = state.entries.find( entry => entry.id === id )
    
    if( !entry ) return 

    return { ...entry }

}

// TODO: 1. Leer url para traer la info del store 2. Mostrar la inf 3. Si la entrada no coincide con el id, sacar al usuario