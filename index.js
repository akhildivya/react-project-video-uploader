const jsonServer=require('json-server')
const server=jsonServer.create()
const cors=require('cors')
const middleware=jsonServer.defaults()
const PORT=4000
const router=jsonServer.router('data.json')

server.use(cors())
server.use(middleware)
server.use(router)
server.listen(PORT,()=>{
    console.log(`-----server started at port ${PORT}--------`);
})
