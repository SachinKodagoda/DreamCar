// DECLARE THE TYPE OF THE CODE
const code_type = 'user';


// REGISTER NEW USER
function Register_New_User(_row_data){
    let Method = 'POST';
    let func = 'create';
    return Handler(code_type , func , Method , _row_data );
}

// GET MASTER DATE
function Get_MasterData(_row_data){
    let Method = 'POST';
    let func = 'getMaster';
    return Handler(code_type , func , Method , _row_data );
}

// UPDATE EMAIL
function Update_email(_row_data){
    let Method = 'POST';
    let func = 'update_email';
    return Handler(code_type , func , Method , _row_data );
}
//UPDATE PASSWORD
function Update_password(_row_data){
    let Method = 'POST';
    let func = 'update_password';
    return Handler(code_type , func , Method , _row_data );
}

// GET USER DATA BY USER_ID
function Get_UserData(_row_data){
    let Method = 'POST';
    let func = 'list';
    return Handler(code_type , func , Method , _row_data );
}



// UPDATE USER DATE BY USER_ID
function Update_UserData(_row_data){
    let Method = 'POST';
    let func = 'getRegistrationInfo';
    return Handler(code_type , func , Method , _row_data );
}
