// ? Como tiene que verse el action
// export const myAction = async ({ commit }) => {
// }

import journalAPI from "@/api/journalAPI"

// ! Si no se usa el commit se puede comentar 

export const loadEntries = async (/*{ commit }*/) => {

    const { data } = await journalAPI.get('/entries.json')
    console.log(data)

}

export const updateEntry = async (/*{ commit }*/) => {

}

export const createEntry = async (/*{ commit }*/) => {

}