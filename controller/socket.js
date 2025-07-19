
import jwt from 'jsonwebtoken'

export let socketMap=[]

export const checkNotifications=async(param)=>{



   try{



  
    const unreadNotification= await Notification.find({user:param,isRead:false})




    return unreadNotification.length

   




   }


   catch(err){
    console.log(err,'error getting unread notfication')

    return null

    
   }


}






export const socketController=async (socket)=>{



   try{
      const token= socket.handshake.auth.token
      const user= jwt.verify(token,process.env.JWT_SECRET)._id
      

      
      
      if (!user || !token){
       return socket.disconnect(true)
      }
      
      
      
      const doesUserExist= socketMap.find((obj)=>obj.user===user)
      if (!doesUserExist){
       const newUser={
        user:user,
        device:[socket.id]
       }
      
       socketMap.push(newUser)
      }
      
      else{
       doesUserExist.device.push(socket.id)
      }
      
      
      
      
      
      socket.user = user;
      
      
      
      const notifications= await checkNotifications(user)
      
      if(notifications!==null){
       socket.emit('new-notifications',notifications)
      }
      
      
      
            socket.on('disconnect',()=>{
      
         const disconnectedUser= socketMap.find((obj)=>obj.user===socket.user)
      
         if (disconnectedUser){
          const removeSocket= disconnectedUser.device.find((obj)=>obj===socket.id)
      
          if (removeSocket){
            disconnectedUser.device=    disconnectedUser.device.filter((obj)=>obj!==removeSocket)
      
      
            if (disconnectedUser.device.length===0){
             socketMap = socketMap.filter((obj) => obj.user !== socket.user);
            }
      
           
         
      
          }
         }
      
      
      
      
             console.log(`user with ${socket.id} has disconnected`)
            })
      
      



   }

   catch(err){

      console.log(err,'error socket disconnected')
      return socket.disconnect(true)
   }


}