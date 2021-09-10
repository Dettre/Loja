module.exports = {
    mode: process.env.NODE_ENV === 'production' ? "live" : 'sandbox',
    sandbox: process.env.NODE_ENV === 'production' ? false : true,
    sandbox_email: process.env.NODE_ENV === 'production' ? null : 'c05061739674428184954@sandbox.pagseguro.com.br',
    email: 'odirlei21@hotmail.com',
    token: '32919D5A8B554755A366AB412DEFF706',
    notificationURL: "http://68.183.129.226:3000/v1/api/pagamentos/notificacao",

}
