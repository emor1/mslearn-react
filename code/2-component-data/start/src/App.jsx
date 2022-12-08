import './index.css'
import React from 'react';
// TODO: Import RecipeTitle
import RecipeTitle from './RecipeTitle';
import IngredientList from './IngredientList';
import RecipeStep from './RecipeStep';

// TODO: Import IngredientList
const recipe = {
    title: 'Mashed potatoes',
    feedback:{
        rating: 4.8,
        reviews: 20
    },
    ingredients:[
        {name:'3 potatoes, cut into 1/2 pieces', prepared:false},
        {name: '4 Tbsp butter', prepared:false},
        {name: 'Salt', prepared:true},
        {name: 'Pepper', prepared:true},
    ],
    steps:[
        {step:"濃い塩水が入った鍋に、カットしたジャガイモを加えます。"},
        {step:"鍋を沸騰させます。"},
        {step:"フォークを刺せるくらいの柔らかさまでジャガイモを茹でます (約 15-20 分)。"},
        {step:"ジャガイモをざるにあけます。"},
        {step:"ジャガイモを鍋に戻します。"},
        {step:"バター、クリーム、塩、こしょうを加えて好みの味にします。"},
        {step:"ジャガイモをマッシュします。"},
        {step:"必要に応じて味を調え、バターとクリームを追加します。"}
    ]
};

function App() {
    // TODO: Add recipe object

    return (
        <article>
            <h1>Recipe Manager</h1>
            {/* TODO: Add RecipeTitle component */}
                <RecipeTitle title={recipe.title} feedback={recipe.feedback}/>
            {/* TODO: Add IngredientList component */}
                <IngredientList ingredients={recipe.ingredients}/>

                <RecipeStep steps={recipe.steps}/>
        </article>
    )
}

export default App;
