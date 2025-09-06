export default {
    CALORIES_PROMPT: `Based on Weight, Height,Gender,Goal
    give me calories and proteins need daily Consider
    Age as 28 in JSON format and follow the schema:
    {
        "calories": <>,
        "proteins": <>
    }`,

   GENERATE_RECIPE_OPTION_PROMPT: `:Depends on user instruction create 3 different Recipe varient with Recipe Name with Emoji,
   2 line description and main indredients list in JSON format with field recipeName, description, ingredients (without size) only Do not give me text response.`,

   GENERATE_COMPLETE_RECIPE_PROMPT:`
    - As per recipeName and description give me recipeName
    - Emoji icons for each ingredient as icon, ingredient as ingredient name, quantity as quantity
    - Total calories as calories (only number)
    - Minutes to cook as cookTime (only number)
    - Realistic image text prompt as per recipe as imagePrompt
    - Give me category list for recipe from [Breakfast, Lunch, Dinner, Snack, Dessert, Drink]
    - Give me response in JSON format only
    - Schema format should be:
    {
    "description": "string",
    "recipeName": "string",
    "calories": "number",
    "category": ["string"],
    "cookTime": "number",
    "imagePrompt": "string",
    "ingredients": [
        {
        "icon": "string",
        "ingredient": "string",
        "quantity": "string"
        }
    ],
    "serveTo": "number",
    "steps": ["string"]
    }`,

}