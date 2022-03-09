import API from './FindOils.js'

export const getOils = () => {
  try {
    let response = API.get('/')
    console.log("oilsercives:", response)
    return response
  }

  catch (err) {
    console.log("logging error:",err)
  }
}

export const getOil = (id) => {
  try {
    let response = API.get(`oils/${id}`)
    console.log("oil details:", response)
    return response
  }

  catch (err) {
    console.log("logging error:",err)
  }
}


export const addOil = (id) => {
  try {
    let response = API.post(`/`)
    console.log("oil details:", response)
    return response
  }

  catch (err) {
    console.log("logging error:",err)
  }
}