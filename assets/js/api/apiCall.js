// TESTING THE FETCH METHOD
if (self.fetch) {

    // HOST DETAILS
    const ssl = 'http://';
    const host = '153.126.207.19';
    const directries = '/api/public/api/';



    /*ERROR HANDLING-------------------------------------------------------------------*/

    /*  :Types
        ERROR(code);   => Error With Standard Status Codes
        ERROR('_000'); => Error With 'UnExpectedError'
        ERROR('_000',message); => Error With 'message'
    */

    // STATUS CODES
    const status_codes = {
        _1xx: 'Communicates transfer protocol-level information',
        _2xx: 'Client request was accepted successfully',
        _3xx: 'Client must take some additional action order to complete their request',
        _4xx: 'Client side error',
        _5xx: 'Server side error',
    }

    // CREATE ERROR MESSAGE
    const ERROR = (code,message='UnExpectedError') =>{
        message = code == '_000' ? message : status_codes[`_${code.substr(0,1)}xx`];
        //console.error(`Error: ${message}`);
        throw new Error(`Error: ${message}`);
    }


    /*REQUEST HANDING-------------------------------------------------------------------*/


    // CREATE HANDLING
    const header ={
        'Accept': 'application/json; charset=utf-8',
        'Content-Type': 'application/json; charset=utf-8'
    }

    // MAKE URL
    const makeUrl = (user_type) => `${ssl}${host}${directries}${user_type}`;

    // HANDLING THE REQUEST FROM SEPERATE JS FILES
    var Handler = (code_type , func , Method , _row_data) =>{
        let _url_ = makeUrl(code_type);
        _url_ += `/${func}`;
        if(Method == 'POST'){
            return PostRequest(_url_, _row_data);
        }else if(Method == 'GET'){
            return getPosts(_url_);
        }else{
            ERROR(`_000`,'Invalid Method');
        }

    }

    //------------------------------------------------------------
    // FOR GET METHODS
    const getPosts = (_url) => {
      return fetch(_url)
      .then(
          res =>{
                  if (`${res.status}`.substr(0,1) != 2) {
                    ERROR(`${res.status}`);
                    return;
                }else{
                    return res.json();
                }
              }
      )
      .catch(error => ERROR(`_000`,error));
    }

    //------------------------------------------------------------
    // FOR POST METHODS
    const PostRequest = (_url,_data={rowdata:'rowdata'}) =>{
      // console.log(_data);
      const options ={
          method: 'POST',
          mode:'cors',
          body:JSON.stringify(_data),
          //body:_data,
          headers: new Headers(header)
      }

      return fetch(_url,options)
        .then(
            res =>{
                    if (`${res.status}`.substr(0,1) != 2) {
                      ERROR(`${res.status}`);
                      return;
                  }else{
                      return res.json();
                  }
                }
        )
        .catch(error => ERROR(`_000`,error));
    }
    //------------------------------------------------------------

} else {
    // NEED TO IMPLEMENT XMLHttpRequest METHOD IF NOT WORKING
}



// TEST DATA
/*
const datax = {
    title: 'foo',
    body: 'bar',
    userId: 1
}
PostRequest('https://jsonplaceholder.typicode.com/posts',datax).then(res_jsonx => console.log(res_jsonx));
// PostRequest(datax,'https://jsonplaceholder.typicode.com/posts').then(res_jsonx => console.log(res_jsonx)).catch(error => ERROR(`_000`,error));
getPosts('https://jsonplaceholder.typicode.com/todos/1').then(res_jsonx => console.log(res_jsonx));
*/
