import 'whatwg-fetch';

class HttpService{
    getProducts = ()=>{
        var promise= new Promise((resolve, reject)=>{
        //        Expects a URL
        fetch('http://localhost:3000/product')
        .then(response => {
            // console.log(response.json());
            resolve(response.json());
        })

        });
        return promise;
    }
}

export default HttpService;