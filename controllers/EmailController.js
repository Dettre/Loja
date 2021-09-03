const transporter = require("nodemailer").createTransport(require("../config/email"));
const { loja } = require("../config/index");
const moment = require("moment");

const _send = ({ subject, emails, message }, cb = null) => {
    const mailOptions = { 
        from: "dettredirley@gmail.com",
        to: emails,
        subject,
        html: message
    };
    if( process.env.NODE_ENV === "production" ){
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.warn(error);
                if(cb) return cb(error);
            } else {
                if(cb) return cb(null, true);
            }
        });
    } else {
        console.log(mailOptions);
        if(cb) return cb(null, true);
    }
};

// NOVO PEDIDO
const enviarNovoPedido = ({ usuario, pedido }) => {
    const message = `
        <h1 style="text-align:center;">Pedido Recebido</h1>
        <br />
        <p>O pedido realizado hoje, no dia ${moment(pedido.createdAt).format("DD/MM/YYYY")}, foi recebido com sucesso.</p>
        <br />
        <a href="${loja}">Acesse a loja para saber mais.</a>
        <br /><br />
        <p>Atenciosamente,</p>
        <p>Equipe - Moda Brasil</p>
    `;
    _send({
        subject: "Pedido Recebido - Moda Brasil",
        emails: usuario.email,
        message
    });
}

// PEDIDO CANCELADO
const cancelarPedido = ({ usuario, pedido }) => {
    const message = `
        <h1 style="text-align:center;">Pedido Cancelado</h1>
        <br />
        <p>O pedido feito no dia ${moment(pedido.createdAt).format("DD/MM/YYYY")} foi cancelado.</p>
        <br />
        <a href="${loja}">Acesse a loja para saber mais.</a>
        <br /><br />
        <p>Atenciosamente,</p>
        <p>Equipe - Moda Brasil</p>
    `;
    _send({
        subject: "Pedido Cancelado - Moda Brasil",
        emails: usuario.email,
        message
    });
}

// ATUALIZACAO DE PAGAMENTO E ENTREGA
const atualizarPedido = ({ usuario, pedido, status, data, tipo }) => {
    const message = `
        <h1 style="text-align:center;">Pedido Atualizado</h1>
        <br />
        <p>O pedido feito no dia ${moment(pedido.createdAt).format("DD/MM/YYYY")} teve uma atualização.</p>
        <br />
        <p>Nova Atualização: ${status} - realizado em ${moment(data).format("DD/MM/YYYY HH:mm")}</p>
        <br />
        <a href="${loja}">Acesse a loja para saber mais.</a>
        <br /><br />
        <p>Atenciosamente,</p>
        <p>Equipe - Moda Brasil</p>
    `;
    _send({
        subject: "Pedido Atualizado - Moda Brasil",
        emails: usuario.email,
        message
    });
}

module.exports = {
    enviarNovoPedido,
    cancelarPedido,
    atualizarPedido
};