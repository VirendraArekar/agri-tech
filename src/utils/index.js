// import { toast } from "react-toastify";
// const toastObj = {position: toast.POSITION.TOP_RIGHT};


export const imageExist = (url) =>{
   var img = new Image();
   img.src = url;
   return img.height !== 0 ? true : false;
}

export const apiErrors = (errors) => {
    if(Array.isArray(errors)){
        for(var i = 0; i < errors.length ; i++){
            // toast.error(errors[i].messages[0], toastObj);
        }
    }
    else{
        // toast.error(errors, toastObj)
    }  
}


export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

export  const formatSlashDate = (date) => {
    var d = new Date(date);
    return  (d.getDate().toString().length === 1 ? `0${d.getDate()}` : d.getDate()) + '/' + (d.getMonth().toString().length === 1 ? `${d.getMonth() + 1}` : d.getMonth() + 1) + '/' + (d.getFullYear().toString().length === 1 ? `0${d.getFullYear()}` : d.getFullYear());
}

export  const formatDate = (date) => {
    var d = new Date(date);
    return  (d.getDate().toString().length === 1 ? `0${d.getDate()}` : d.getDate()) + '-' + (d.getMonth().toString().length === 1 ? `0${d.getMonth() + 1}` : d.getMonth() + 1) + '-' + (d.getFullYear().toString().length === 1 ? `0${d.getFullYear()}` : d.getFullYear());
}

export const formatDatePost = (date) => {
    var d = new Date(date);
    return  (d.getFullYear().toString().length === 1 ? `0${d.getFullYear()}` : d.getFullYear()) + '-' + (d.getMonth().toString().length === 1 ? `0${d.getMonth() + 1}` : d.getMonth() + 1) + '-' + (d.getDate().toString().length === 1 ? `0${d.getDate()}` : d.getDate())  ;
}

export const setFormatDate = (date) => {
    var d = new Date(date);
    return  (d.getDate().toString().length === 1 ? `0${d.getDate()}` : d.getDate()) + '-' + (d.getMonth().toString().length === 1 ? `0${d.getMonth() + 1}` : d.getMonth() + 1) + '-' + (d.getFullYear().toString().length === 1 ? `0${d.getFullYear()}` : d.getFullYear()) ;
}


export const setFormatIntake = (date) => {
    var d = new Date(date);
    return  (d.getFullYear().toString().length === 1 ? `0${d.getFullYear()}` : d.getFullYear()) + '-' + (d.getMonth().toString().length === 1 ? `0${d.getMonth() + 1}` : d.getMonth() + 1);
}

export const warningMsg = (msg) => {
    // toast.warning(msg, toastObj);
 }

export const validation = (type = null, key,value) => {
    // var reg =  /^(([^<>()[],;:\s@"]+(.[^<>()[],;:\s@"]+)*)|("+"))@(([^<>()[\],;:\s@"]+)+[^<>()[\],;:\s@"]{2,})$/i;
    const reg =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var phoneno = /^\d{10}$/;
    if(type === null){
       if(value === '' || value.length < 3 ){
        warningMsg(`${key} is required! at least 3 character long.`);
        return true;
       }
       else{
        return false;
       }
    }
    else if(type === 'isNull'){
        if(value === null ){
         warningMsg(`${key} is required!`);
         return true;
        }
        else{
         return false;
        }
     }
    else if(type === 'long'){
        if(value === '' || value.length < 10 ){
         warningMsg(`${key} is required! at least 10 character long.`);
         return true;
        }
        else{
         return false;
        }
     }
    else if(type === 'empty'){
        if(value === ''){
         warningMsg(`${key} is required!`);
         return true;
        }
        else{
         return false;
        }
     }
     else if(type === 'boolean'){
        if(value === '' || (value !== true && value !== false)){
         warningMsg(`${key} is required!`);
         return true;
        }
        else{
         return false;
        }
     }
    else if(type === 'date'){
       if(value === null || value === ''){
        warningMsg(`${key} is required!`);
        return true;
       }
       else{
        return false;
       }
    }
    else if(type === 'time'){
        if(value === null || value === ''){
         warningMsg(`${key} is required!`);
         return true;
        }
        else{
         return false;
        }
    }
    else if(type === 'email'){
        if(value === ''){
             warningMsg(`${key} is required!`);
         return true;
        }
        else if(!value.toString().match(reg)){
            warningMsg(`${key} is invalid!`);
            return true;
        }
        else{
            return false;
        }
    }
    else if(type === 'phone'){
        if(value === ''){
         warningMsg(`${key} is required!`);
         return true;
        }
        else if(! value.toString().match(phoneno)){
            warningMsg(`${key} is invalid!`);
            return true;
        }
        else{
            return false;
        }
    }
    
    else if(type === 'password'){
        if(value === ''){
         warningMsg(`${key} is required!`);
         return true;
        }
        else if(value.length < 6){
            warningMsg(`${key} must be minimum 6 character long!`);
            return true;
        }
        else{
            return false;
        }
    }
    else if(type === 'array'){
        if(value.length === 0){
            warningMsg(`At least one ${key} is required!`);
            return true;
        }
        else{
            return false
        }
    }
}

export const  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


export const fullName = (item) => {
    return item.firstName + ' ' + item.lastName;
}