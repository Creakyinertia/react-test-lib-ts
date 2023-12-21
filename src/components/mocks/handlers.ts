
// import { http } from 'msw'


// function validateRequest(req) {
//     if(req)
//         return true; 
// }
// function fetchDataFromDatabaseOrAPI() {
//     const data = { example: 'data' };
//     return data;
// }
// export const handlers=[
    
//     http.get('https://jsonplaceholder.typicode.com/users',(req, res, ctx) => {
//         try {
//             if (validateRequest(req)) {
//                 const data = fetchDataFromDatabaseOrAPI();
//                 const response = res(
//                     ctx.status(200),
//                     ctx.set('Content-Type', 'application/json'),
//                     ctx.json(data)
//                 )
//                 return response
//             } else {
//                 return res(
//                     ctx.status(400),
//                     ctx.json({error: 'Invalid request'})
//                 )
//             }
//         } catch (error) {
//             console.error('Error occurred:', error)
//         }
//     })
// ]

export{}