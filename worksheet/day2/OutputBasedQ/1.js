function fetchSequentially(api1, api2) {
    return fetch(api1)
        .then(response => response.json())
        .then(data1 => {
            return fetch(api2)
                .then(response => response.json())
                .then(data2 => {
                    const combinedResult = { ...data1, ...data2 };
                    console.log(combinedResult);
                    return combinedResult;
                });
        })
        .catch(error => console.error('Error fetching data:', error));
}


const api1 = 'https://jsonplaceholder.typicode.com/posts/1';
const api2 = 'https://jsonplaceholder.typicode.com/users/1';

fetchSequentially(api1, api2);


