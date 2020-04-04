export const createProject = (project) => {
    return(
        (dispatch, getState, {getFirebase, getFirestore}) => {
            //make async call to the database
            const firestore = getFirestore()
            firestore.collections('projects').add({
                ...project,
                authorFirstName: 'Net',
                authorLastName: 'Adebayo',
                authorId: '12345',
                createdAt: new Date()

            }).then(() => {
                dispatch({
                    type: 'CREATE_PROJECTS',
                    project: project
                })
            }).catch((err)=>{
                dispatch({
                    type: 'CREATE_PROJECTS_ERR',
                    err
                })
            })
        }
    )
}

