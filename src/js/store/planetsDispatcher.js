
const planetDispatcher = {
    get: async (id) => {
        const response = await fetch(`https://www.swapi.tech/api/planets/${id}`, {
            method: 'GET',
            headers:{'Content-Type':'application/json'}
        })
        const data = await response.json();
        // console.log(data.result.properties)
        return data.result.properties;
      
        
    }
    
}



export default planetDispatcher;