const http = require('node:http')

const server = http.createServer()

// 当http服务器，接收到http请求的时候触发事件
// req形参表示请求对象
// res形参表示响应对象
server.on('request', (req, res) => {
    // req表示请求,它由连接上[接收]到的数据构建而来,基本是只读的
    // res表示响应,它将把数据从连接上[发送]出去,基本是可写的

    // 我们最关心的部分就是：请求方法、请求地址、请求头
    console.log(req.method, req.url)
    console.log('req.headers', req.headers)

    // 设置响应头
    res.setHeader('foo', 'barrrrr')
    res.setHeader("content-type", "text/html; charset=utf-8")
    res.write('Hello world')
    res.end()
})

server.listen(8085, () => {
    console.log('OK 8085')
})
