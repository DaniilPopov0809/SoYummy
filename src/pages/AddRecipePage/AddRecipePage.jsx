import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recipeOperations } from 'redux/recipes/operations';
import { ingredientOperations } from 'redux/ingredients/operations';
import { MainContainer } from 'components/MainContainer/MainContainer';
import AddRecipeForm from 'components/AddRecipeForm/AddRecipeForm';
import PageTitle from 'components/ReusableComponents/PageTitle/PageTitle';
import { selectIngredientsList } from 'redux/ingredients/ingredientsSelector';

const AddRecipePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ingredientOperations.getIngredientsList());
    dispatch(recipeOperations.getCategoryList());
  }, [dispatch]);

  const ingredientsList = useSelector(selectIngredientsList);

  return (
    
    <MainContainer>
      <PageTitle title={'Add recipe'} />
     {ingredientsList && <AddRecipeForm />}
    </MainContainer>
  );
};
export default AddRecipePage;
