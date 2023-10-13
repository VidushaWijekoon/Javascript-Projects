// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(data => console.log(data));

// get data from api
const getData = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    console.log(data);
}

getData();

const sendData =  
    {
        userID: 123,
        title: 'asdsadsad',
        body: 'dfsfsgsdsdsadad'
    
      
    }
 

// sent data to server
const getData1 = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        // headers: {'Content-Type: application/json'},
        body: JSON.stringify(sendData)
    });
    const data = await res.json();
    console.log(data);
}

getData1();