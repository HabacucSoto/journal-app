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

export const getEntryById = ( /*state*/ ) => {
    
}