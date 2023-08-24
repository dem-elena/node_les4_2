import {EventEmitter} from 'events'
class EE extends EventEmitter{}
const ee=new EE()

const receiveMessage=(userData)=>{
    const {user, message} = userData
    console.log(`${user}: ${message}`)
}
ee.on("sent",receiveMessage)

const sendMessage=(user,message)=>{
    ee.emit("sent",{user:user,message:message})
}



sendMessage("Elena","Hello")
sendMessage("Alex","Hello! How are you?")
sendMessage("Elena","Fine thanks. And you?")
sendMessage("Alex","Fine thanks!")