// ? Como tiene que verse el action
// export const myAction = async ({ commit }) => {
// }

import journalAPI from "@/api/journalAPI"

// ! Si no se usa el commit se puede comentar 

export const loadEntries = async ({ commit }) => {

    const { data } = await journalAPI.get('/entries.json')
    const entries = []
    
    for( let id of Object.keys( data ) ){
        entries.push({
            id,
            ...data[id] //spread para crear otro objeto y no afectar al original
        })
    }

    commit('setEntries', entries)

}

export const updateEntry = async (/*{ commit }*/) => {

}

export const createEntry = async (/*{ commit }*/) => {

}