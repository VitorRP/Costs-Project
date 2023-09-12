import { useNavigate } from 'react-router-dom'

import ProjectFrom from '../projects/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {

    const navigate = useNavigate()

    function createPost(project) {

        // initialize cost and services
        project.cost = 0
        project.services = []

        fetch("http://localhost:40059/projects", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                navigate('/projects', {message: 'Project created successfully!'})
            })
            .catch(err => console.log(err))

    }

    return (
        <div className={styles.newproject_container}>
            <h1>Create Poject</h1>
            <p>Create your project and then add the services</p>
            <ProjectFrom handleSubmit={createPost} btnText="Create Project" />
        </div>
    )
}
export default NewProject