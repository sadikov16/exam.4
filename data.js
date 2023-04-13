// export let Api = {
//     POST: async (value, data) => {
//         try {
//             let respons = await fetch(`https://jsonplaceholder.typicode.com/${value}`,
//             {
//                 method: "POST",
//                 headers: {"Content-type": "application/json"},
//                 body: JSON.stringify(data),
//             }   
//             )
//             .then(res => res.json())
//             .then(data => data);
            
//             return respons;
//         } catch {
//             return alert("xatolik bo'ldi");
//         }
//     },
//     DELETE: async (value)=> {
//         try{
//             let respons = await fetch(`https://jsonplaceholder.typicode.com/${value}`,
//                 {
//                     method: "DELETE",
//                 }
//                 ).then(res => res.json())
//                 .then(json => json);
                
//                 return respons;
//             }catch{
//                 return alert("xato")
//             }
//         }
//     }
    
    // let data = await fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(res => res.json())
    //     .then(data => data)
    //     .catch(error => console.log(error))
    //     console.log(data);