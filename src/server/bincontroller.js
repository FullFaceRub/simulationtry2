module.exports = {
    update: (req,res) =>{
        const shelfid = req.params.shelfid
        const binid = req.params.binid
        const {name, price, image_url} = req.body
        const db = req.app.get('db');
        console.log(req.body)
        db.update_bin([name, price, image_url, shelfid, binid])
        .then((inventory)=>{
            res.status(200).send(inventory)
        })
    },

    getOne: (req,res) =>{
        const shelfid = req.params.shelfid;
        const binid = req.params.binid;

        const db = req.app.get('db');

        db.getOne_bin([shelfid,binid])
        .then((bin)=>{
            res.status(200).send(bin)
        })
    },

    getAll: (req,res) =>{
        const db = req.app.get('db');

        db.getAll_bin()
        .then((bins)=>{
            res.status(200).send(bins)
        })
    }
}