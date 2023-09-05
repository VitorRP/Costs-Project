import { useState, useEffect } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

function ProjectFrom({ btnText }) {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/categories",
            {
                method: "GET",
                headers: {
                    'Content-Type': "application/json",
                }
            }
        )
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    }, [])


    return (
        <form className={styles.form}>
            <Input
                type="text"
                text="Project Name"
                name="name"
                placeholder="Enter project name"
            />
            <Input
                type="number"
                text="Project budget"
                name="budget"
                placeholder="Enter project budget"
            />

            <Select name="category_id" text="Select the category" options={categories} />

            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectFrom