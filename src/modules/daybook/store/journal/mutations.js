// ? Como tiene que verse el mutation
// export const myMutation = ( state ) => {
// }

// ! Si no se usa el state se puede comentar para no tener problemas con linter

export const setEntries = ( state, entries ) => {

    state.entries = [ ...state.entries, ...entries ]
    state.isLoading = false

}

export const updateEntry = ( /*state*/ ) => {
    
}

export const addEntry = ( /*state*/ ) => {
    
}