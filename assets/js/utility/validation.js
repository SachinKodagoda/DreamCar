function isValideEmail(textVal) {
    var email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if(textVal.match(email)){
        return true;
    }else{
        return false;
    }
}

function isASCII(textVal, extended) {
    var regX=/^[\x00-\x7F]*$/;
    if(extended){
        regX = /^[\x00-\xFF]*$/;
    }

    if(textVal.match(regX)){
        return true;
    }else{
        return false;
    }
}

function isFullWidth(textVal) {
    var regX_Numbers = /^[ー]?[０-９]+(．[０-９]+)?$/;
    var regX_Letters = /^[ぁ-んァ-ン一-龥]/;
    if((textVal.match(regX_Numbers)) || (textVal.match(regX_Letters))){
        return true;
    }else{
        return false;
    }
}

function isHalfWidth(textVal) {
    var regX_UpperLowerNumeric = /^[a-zA-Z0-9]+$/g;
    if(textVal.match(regX_UpperLowerNumeric)){
        return true;
    }else{
        return false;
    }
}

function getFormattedDateTime(dateTimeStr){
    var dateTime =   new Date(dateTimeStr);
    var month = dateTime.getMonth()+1;	//January is 0!
    var dd = (dateTime.getDate()<10)? '0'+dateTime.getDate():dateTime.getDate();

    var mm = (month<10)?'0'+month:month;
    var hh = (dateTime.getHours()<10)? '0'+dateTime.getHours():dateTime.getHours();
    var min = (dateTime.getMinutes()<10)? '0'+dateTime.getMinutes():dateTime.getMinutes();
    var sec = (dateTime.getSeconds()<10)? '0'+dateTime.getSeconds():dateTime.getSeconds();
    var yyyy = dateTime.getFullYear();

    var fullDateTime = dd+'-'+mm+'-'+yyyy+' '+hh+':'+min+':'+sec+' ';
    if(hh<12){
        fullDateTime +='am';
    }else{
        fullDateTime +='pm';
    }
    return fullDateTime;
}

function getParam(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
}

function  getJapaneseDate(_date){
    let dateTime = new Date(_date);
    let month = dateTime.getMonth()+1;	//January is 0!
    let dd = dateTime.getDate();
    let yyyy = dateTime.getFullYear();

    // FORMATE THE DATE INTO 1990年 1月 1日
    let fullDateTime = yyyy+'年 '+month+'月 '+dd+'日';
    return fullDateTime;
}

// GET YEAR FROM A INPUT
function  getYear(_date){
    let dateTime = new Date(_date);
    let yyyy = dateTime.getFullYear();
    return yyyy;
}

// GET MONTH FROM A INPUT
function  getMonth(_date){
    let dateTime = new Date(_date);
    let month = dateTime.getMonth()+1;	//January is 0!
    return month;
}

// GET DATE FROM A INPUT
function  getDate(_date){
    let dateTime = new Date(_date);
    let dd = dateTime.getDate();
    return dd;
}
