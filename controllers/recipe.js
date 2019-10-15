
const Recipe = require("../models/recipe");

exports.addRecipe = (req, res, next) => {
    console.log(req.body);
    
    const {title, ingredients, instructions, time, difficulty} = req.body ;

    const recipe = new Recipe({
        title,
        ingredients,
        instructions,
        time,
        difficulty
    });

    recipe.save().then(() => {
        res.status(201).json({
            message: "Saved successfully"
        })
    }).catch(error => {
        res.status(500).json({
            message: "An error occured",
            error
        })
    })
}
exports.getOneRecipe  = (req, res, next) => {
    Recipe.findOne({
      _id: req.params.id
    }).then(
      (recipe) => {
        res.status(200).json(thing);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  }
  exports.modifyRecipe = (req, res, next) => {
    let recipe = new Thing({ _id: req.params._id });
  
    Recipe.updateOne({_id: req.params.id}, thing).then(
      () => {
        res.status(201).json({
          message: 'Recipe updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

  exports.deleteRecipe = (req, res, next) => {

	Recipe.findOne({_id: req.params.id}).then((thing) => {
        Recipe.deleteOne({_id: req.params.id}).then(
            () => {
              res.status(200).json({
                message: 'Deleted!'
              });
            }
          ).catch(
            (error) => {
              res.status(400).json({
                error: error
              });
            }
          );
    });
  
}

exports.getAllRecipes = (req, res, next) => {
 
 Recipe.find().then((things) => {
 	res.status(200).json(things);
 }).catch(error => {
 	res.status(500).json({
 		message: "Failed to retrieve recipe!"
 	})
 })
}
  