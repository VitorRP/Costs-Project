import { useState, useEffect } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

function ProjectFrom({ handleSubmit, btnText, projectData }) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

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

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }
    function handleCategory(e) {
        setProject({
            ...project, category: {
                id: e.tager.value,
                name: e.target.option[e.target.selectedIndex]
            }
        })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Project Name"
                name="name"
                placeholder="Enter project name"
                handleOnChange={handleChange}
            />
            <Input
                type="number"
                text="Project budget"
                name="budget"
                placeholder="Enter project budget"
                handleOnChange={handleChange}
                
            />

            <Select
                name="category_id"
                text="Select the category"
                options={categories}
                handleOnChange={handleCategory}
                
            />

            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectFrom