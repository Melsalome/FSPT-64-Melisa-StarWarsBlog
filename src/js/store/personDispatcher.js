
const personDispatcher = {
  get: async (id) => {
        const response = await fetch(`https://www.swapi.tech/api/people/${id}`, {
            method: 'GET',
            headers:{'Content-Type':'application/json'}
        })
        const data = await response.json();
        // console.log(variable.result.properties)
        return data.result.properties;
    }
}

export default personDispatcher;