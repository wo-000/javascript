let defaultCity='北京';
try{  //try  catch 防止部分浏览器禁用缓存或者使用隐身模式抛出异常
    if(localStorage.city){
        defaultCity=localStorage.city
    }    
}catch(e){
}

export default{
    city:defaultCity
}