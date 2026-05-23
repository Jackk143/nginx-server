# Node.js Static File Server

A basic static file server built using core Node.js modules without Express.

## Features

* Creates HTTP server using Node.js
* Serves static files
* Handles routes using `req.url`
* Reads files using `fs`
* Determines file types using MIME types
* Returns 404 page if file not found

---

# Modules Used

## http

Used to create server.

```js id="v7u2pk"
const http = require('http')
```

---

## fs

File System module.

Used to read files from computer.

```js id="x4j9lo"
const fs = require('fs')
```

---

## path

Used for safely creating file paths.

```js id="o2m7rt"
const path = require('path')
```

---

# How Server Works

## Create Server

```js id="n8v1as"
const server = http.createServer((req,res)=>{

})
```

### What Happens

1. Browser sends request
2. Node receives request
3. Node creates:

   * req object
   * res object
4. Callback executes

---

# Request Object

Contains request information.

Example:

```js id="v3m7pw"
req.url
```

If user visits:

```txt id="s2l8de"
/style.css
```

then:

```js id="t7p4xq"
req.url
```

becomes:

```txt id="d9m2kw"
/style.css
```

---

# Response Object

Used to send data back to browser.

Examples:

```js id="q8j1rm"
res.writeHead()
res.end()
```

---

# File Path Creation

```js id="w6u3fd"
const filePath = path.join(
   __dirname,
   req.url === '/' ? 'index.html' : req.url
)
```

### Example

If user visits:

```txt id="h1v7pe"
localhost:3004/
```

server serves:

```txt id="c4m8sz"
index.html
```

---

# path.extname()

Used to get file extension.

```js id="e7u2rb"
path.extname(filePath)
```

Example:

```txt id="f3x9lk"
.html
.css
.js
```

---

# MIME Types

Used to tell browser what type of content server is sending.

```js id="k2m8tx"
const mimeTypes = {

   '.html':'text/html',

   '.css':'text/css',

   '.js':'text/javascript',

   '.png':'image/png',

}
```

---

# Content Type

```js id="m9u1vk"
const contentType =
mimeTypes[extName] || 'application/octet-stream';
```

If extension not found:
default binary type is used.

---

# Reading Files

```js id="u7w4qs"
fs.readFile(filePath,(err,content)=>{

})
```

## What Happens

1. Node starts reading file
2. File reading happens asynchronously
3. Callback runs after reading completes

---

# Error Handling

```js id="p4x8nm"
if(err.code === "ENOENT")
```

ENOENT means:

```txt id="l2m7as"
File does not exist
```

Server returns:

```js id="r9u3kb"
404: File Not Found
```

---

# Sending Response

## Success Response

```js id="y5v1qo"
res.writeHead(200,{
   "Content-Type":contentType
})
```

```js id="z8m4er"
res.end(content)
```

---

## 404 Response

```js id="n1u7dt"
res.writeHead(404,{
   "Content-Type":"text/html"
})
```

---

# Running Server

## Start Server

```bash id="k7m2pl"
node server.js
```

---

# Open In Browser

```txt id="q3v8nx"
http://localhost:3004
```

---

# Concepts Learned

* Node.js server creation
* Request/response cycle
* Callback functions
* Async file reading
* MIME types
* File system access
* Static file serving
* HTTP status codes
* Route handling using req.url
