const Notification = ({message}) =>{
   if(!message){
    return null
   }
   else{
    return(
        <div style={{color:"black", backgroundColor:"red"}}> 
            <p>{message}</p>
        </div>
    )
   }
}
export default Notification