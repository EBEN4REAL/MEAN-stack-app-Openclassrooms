const express = require('express');

const router = express.Router();

const recipeController = require("../controllers/recipe");

router.post('/' , recipeController.addRecipe);

router.get('/',   recipeController.getAllRecipes);

router.get('/:id', recipeController.getOneRecipe);

router.put('/:id',   recipeController.modifyRecipe);

router.delete('/:id',   recipeController.deleteRecipe);


module.exports = router;