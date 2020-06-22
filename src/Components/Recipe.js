import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Style from './recipe.module.css';

const Recipe = ({ title, image, ingredients }) => {
    return (
        <div >

            <div className={Style.main}>
                <div className={Style.container}>
                    <div className={Style.imag}>
                        <img src={image} alt="" />
                    </div>
                    <div className={Style.textcontainer}>
                        <span></span>
                        <h1 className={Style.recipe}>{title}</h1>
                        <ul>
                            {ingredients.map(ingredient => (
                                <li>{ingredient.text}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div >


    );
}

export default Recipe;