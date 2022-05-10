const url = 'https://fe-school-api.herokuapp.com/api'

const request = async (url, method = 'GET', body) => {
  const response = await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: new Headers({
      'Content-type': 'application/json'
    })
  });

  return await response.json();
}

export const getEvents = () => {
  return request(`${url}/events`);
}

export const addEvent = (data) => {
  const eventData = {
    ...data,
    archive: false,
    favorite: false
  }
  return request(`${url}/events`, 'POST', eventData)
}

export const deleteEvent = (id) => {
  return request(`${url}/events/${id}`, 'DELETE')
}

export const editEvent = (data) => {
  return request(`${url}/events`, 'PUT', data)
}
