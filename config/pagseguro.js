module.exports = {
    mode: process.env.NODE_ENV === 'production' ? "live" : 'sandbox',
    sandbox: process.env.NODE_ENV === 'production' ? false : true,
    sandbox_email: process.env.NODE_ENV === 'production' ? null : '32919D5A8B554755A366AB412DEFF706',
    email: 'odirlei21@hotmail.com',
    token: '32919D5A8B554755A366AB412DEFF706',
    notificationURL: "https://api.loja-teste.ampliee.com/v1/api/pagamentos/notificacao",
}
