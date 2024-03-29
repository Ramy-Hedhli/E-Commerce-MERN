const Payments = require('../models/paymentModel')
const Users = require('../models/userModel')



exports.getPayments = async (req, res) => {
    try {
        const payments = await Payments.find()
        res.status(200).send(payments)
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}
exports.createPayment = async (req, res) => {
    try {
        const user = await Users.findById(req.user.id).select('name email')
        if (!user) return res.status(400).json({ msg: "User does not exist." })

        const { cart, paymentID, address } = req.body;

        const { _id, name, email } = user;

        const newPayment = new Payments({
            user_id: _id, name, email, cart, paymentID, address
        })

        await newPayment.save()
        res.status(200).send({ msg: "Payment Succes!" })

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}


