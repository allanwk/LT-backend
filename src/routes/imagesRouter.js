const router = require('express').Router();
let Image = require('../models/image-model');

router.route('/').get((req, res) => {
    Image.find()
        .then(images => res.json(images))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
    const { url, name, size, description, addURL, price } = req.body;

    const newImage = new Image({
        url,
        name,
        size,
        description,
        addURL,
        price
    })

    newImage.save()
        .then(() => res.json('Image added'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req,res)=>{
    Image.findById(req.params.id)
        .then(image => res.json(image))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').delete((req,res)=>{
    Image.findByIdAndDelete(req.params.id)
        .then(()=> res.json('Image deleted'))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/update/:id').post((req,res) => {
        const { url, name, size, description, addURL, price } = req.body
    Image.findById(req.params.id)
        .then(image => {
            image.url = url,
            image.name = name,
            image.size = size,
            image.description = description,
            image.addURL = addURL,
            image.price = price

            image.save()
             .then(()=>res.json('Image updated'))
             .catch(err=>res.json('Error: ' + err))
        })
})

module.exports = router;