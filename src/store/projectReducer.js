const initState = {
    project: [
        { id: 1, title: 'XHTML Dummy Explain', content: 'blah ah ahh' },
        { id: 2, title: 'Itapsolution', content: 'It solutions provider' },
        { id: 3, title: 'Web Development', content: 'the fastest developing field' }
    ]
}
const projectReducer = (state= initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECTS':
            console.log('created project', action.project)
            return state
        case 'CREATE_PROJECT_ERR':
            console.log('create project err',  action.err)
            return state
        default:
           return state
    }
    
}
export default projectReducer