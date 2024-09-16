import React, { useEffect, useState } from 'react'

import GetCategories from '../API/GetCategories'

import '../styles/ComponentStyles/CategoriesList.scss'
import DefaultButton from './UI/DefaultButton/DefaultButton'

const CategoriesList = ({getCategoryId, ...props}) => {

    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState()

    useEffect(() => {
        fetchCategories()
    }, [])


    async function fetchCategories() {
        const ct = await GetCategories.getAll()
        setCategories(ct.items)
    }

    const pushCategoryId = (id) => {
        getCategoryId(id)
        setCurrentCategory(id)
    }

  return (
    <div {...props} className='categoriesList'>
        {categories.map(category => 
            <DefaultButton
                onClick={() => pushCategoryId(category.id)}
                style={currentCategory === category.id ? {backgroundColor: '#2D76F9'} : {backgroundColor: '#313341'}}
                key={category.id}
            >
                {category.name}
            </DefaultButton>
        )}
    </div>
  )
}

export default CategoriesList
