import { useParams, useNavigate } from "react-router-dom"
import { recipeList } from "./data"
import { useContext } from "react"
import { ShoppingContext } from "../context/ShoppingContext"

export const RecipeDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { setIngredients } = useContext(ShoppingContext)

  const recipe = recipeList[id - 1]

  const routeToShop = () => {
    setIngredients(recipe.ingredients)
    navigate("/shop")
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <button
          style={{
            fontSize: 16
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
          onClick={() => {
            navigate(-1)
          }}
        >
          Back
        </button>
        <h1 className="text-4xl mt-8 mb-8">{recipe.name}</h1>
        <button
          onClick={routeToShop}
          style={{
            fontSize: 16
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
        >
          Shop Now
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img
            style={{
              objectFit: "contain"
            }}
            src={recipe.image}
            alt={recipe.name}
          />
        </div>

        <div>
          <h1 className="text-4xl mt-8 mb-8">Ingredients</h1>
          <ul className="list-decimal	list-inside">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </div>
  )
}
