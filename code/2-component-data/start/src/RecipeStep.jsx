import React from 'react'

function RecipeStep(props){
    const RecipeStepItems = props.steps.map((steps, index)=>{
        return(
            <li key={index} >
                {steps.step}
            </li>
        );
    });

    return(
        <ol>
            {RecipeStepItems}
        </ol>
    )
}

export default RecipeStep;