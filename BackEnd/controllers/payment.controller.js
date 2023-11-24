const mercadopago = require('mercadopago');
const mercadoPagoCtrl = {}

mercadoPagoCtrl.createorder = async (req, res) => {
    mercadopago.configure({
        access_token: 'TEST-2512975377843072-062919-5bf57159f3ddb0d4750ac8d6a9029388-1409068793'
    });

    try {
        const result = await mercadopago.preferences.create({
            items: [
                {
                    title: req.body.title,
                    unit_price: req.body.unit_price,
                    currency_id: 'ARS',
                    quantity: 1,
                    description: req.body.description
                },
            ],
            notification_url: "https://3604-190-228-64-254.sa.ngrok.io/webhook",
            back_urls: {
                success: "http://localhost:4200/gimnasio",
                // pending: "https://e720-190-237-16-208.sa.ngrok.io/pending",
                // failure: "https://e720-190-237-16-208.sa.ngrok.io/failure",
            },
        });

        console.log(result);

        // res.json({ message: "Payment creted" });
        res.json(result.body);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
}


mercadoPagoCtrl.receiveWebhook = async (req, res) => {
    try {
        const payment = req.body;
        console.log(payment);
        if (payment.type === "payment" && payment.data && payment.data.id) {
            const paymentId = payment.data.id;

            // Obtén los datos de la transacción utilizando el ID del pago
            const data = await mercadopago.payment.findById(paymentId);
            console.log("-----------DATA--------------")
            console.log(data);

            // Guarda los datos de la transacción en tu base de datos o realiza las operaciones necesarias
            // ...

            // Responde con un código 204 para indicar que se recibió la notificación correctamente
            res.sendStatus(204);
        } else {
            // Si la notificación no contiene datos de pago válidos, responde con un código de error
            res.sendStatus(400);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something goes wrong" });
    }
}


module.exports = mercadoPagoCtrl;