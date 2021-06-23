module.exports = {
    secret: process.env.NODE_ENV === "production" ? process.env.SECRET : "DSVSVVSDSDVDVD125F4F5D4F5DF45D4F54FD5",
    api: process.env.NODE_ENV === "production" ? "https://api.loja-teste.ampliee.com" : "http://localhost:3000",
    loja: process.env.NODE_ENV === "production" ? "https://loja-teste.ampliee.com" : "http://localhost:8000"
}