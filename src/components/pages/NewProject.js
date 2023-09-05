import ProjectFrom from '../projects/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {
    return (
        <div className={styles.newproject_container}>
            <h1>Create Poject</h1>
            <p>Create your project and then add the services</p>
            <ProjectFrom btnText="Create Project"/>
        </div>
    )
}
export default NewProject