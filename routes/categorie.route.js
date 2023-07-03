const express = require('express');
const router = express.Router();
const Categorie=require("../models/categories")
router.post('/', async (req, res) => {
    const { nomcategorie, imagecategorie} = req.body;
    const newCategorie = new Categories({nomcategorie:nomcategorie, 
    imagecategorie:imagecategorie})
    try {
        await newCategorie.save();
        res.status(200).json(newCategorie );
        } catch (error) {
        res.status(404).json({ message: error.message });
        }
    });
 router.get('/', async (req, res )=> {
            try {
                const cat = await Categorie.find();
                res.status(200).json(cat);
                } catch (error) {
                res.status(404).json({ message: error.message });
                }
                
        });
router.delete('/:categorieId', async (req, res)=> {
            const id = req.params.categorieId;
            await Categorie.findByIdAndDelete(id);
            res.json({ message: "categorie deleted successfully." });
            });
            

        module.exports = router;
        