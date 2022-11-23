const fs = require("node:fs")
const fsp = fs.promises
const http = require('node:http')
const path = require("node:path")

const port = 8086

const server = http.createServer()
const publicDir = "./"

server.on('request', (req, res) => {
    console.log(req.method, req.url)

    let url = new URL(req.url, "http://localhost/")
    let pathname = url.pathname

    const targetPath = path.join(publicDir, decodeURIComponent(pathname))

    fs.stat(targetPath, (err, stat) => {
        if (err) {
            if (err.code === "ENOENT") {
                res.writeHead(404) // 设置响应状态码
                res.end("404 Not Found")
            } else {
                res.end(String(err))
            }
        } else {
            if (stat.isFile()) {
                fs.readFile(targetPath, (err, result) => {
                    if (err) {
                        res.end(String(err))
                    } else {
                        res.end(result)
                    }
                })
            } else if (stat.isDirectory()) {
                // 要先判断，请求地址的「路径」部分（并且不包括查询字符串）是否以斜杠来结尾；如果不是这样，那就要做必要的带斜杠修改
                if (!req.url.endsWith('/')) {
                    res.writeHead(302, {
                        Location: pathname + '/' + url.search // 这里不需要加上hash，因为hash不会被浏览器发到服务器
                    })
                    res.end()
                    return
                }
                // 先看看文件夹里面有没有index.html文件；如果有，响应这个文件；如果没有，列出文件夹的内容
                let indexPath = path.join(targetPath, "index.html")

                // 列出文件夹的内容
                fs.readdir(targetPath, { withFileTypes: true }, (err, entries) => {

                    if (err) {
                        res.end(String(err))
                    } else {
                        // 对结果进行排序，将文件夹放前面，文件放后面
                        entries.sort((a, b) => {
                            if ((a.isFile() && b.isFile()) || (a.isDirectory() && b.isDirectory())) {
                                return 0
                            } else if (a.isFile() && b.isDirectory()) {
                                return 1
                            } else if (a.isDirectory() && b.isFile()) {
                                return -1
                            }
                        })
                        res.write(`<h1>Index of ${pathname}</h1>`)
                        // res.writeHead(200, {
                        //     "Content-Type": 'text/html; charset=UTF-8',
                        // })
                        for (let entry of entries) {
                            const sep = entry.isDirectory() ? "/" : ""
                            res.write(`<div><a href="${entry.name}${sep}">${entry.name}${sep}</a></div>`)
                        }
                        res.end()
                    }
                })
            }
        }
    })
})

server.listen(port, () => {
    console.log(`server listening on port ${port}`)
})
