const ticket = require('../schemas/ticket');


exports.addTicket = (req, res) => {
    try {
        let newTicket = ticket(req.body)
        newTicket.save((err, Ticket) => {
            if (err) {
                res.status(400).json({ 'msg': err })
            } else {
                res.status(201).json({
                    msg: 'succes',
                    ticket: Ticket
                })
            }
        })
    } catch {
        (err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
    }
}


