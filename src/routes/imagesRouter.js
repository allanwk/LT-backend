const router = require('express').Router();
let Image = require('../models/image-model');

router.route('/').get((req, res) => {
    Image.find()
        .then(images => res.json(images))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
    const { url, name, size, description, price, url1, url2, url3, url4, url5 } = req.body;

    const newImage = new Image({
        url,
        name,
        size,
        description,
        price,
        url1,
        url2,
        url3,
        url4,
        url5
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
        const { url, name, size, description, price, url1, url2, url3, url4, url5 } = req.body
    Image.findById(req.params.id)
        .then(image => {
            image.url = url,
            image.name = name,
            image.size = size,
            image.description = description,
            image.price = price,
            image.url1 = url1,
            image.url2 = url2,
            image.url3 = url3,
            image.url4 = url4,
            image.url5 = url5,

            image.save()
             .then(()=>res.json('Image updated'))
             .catch(err=>res.json('Error: ' + err))
        })
})

module.exports = router;