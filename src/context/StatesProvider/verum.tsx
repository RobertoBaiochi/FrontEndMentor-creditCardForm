import { useReducer } from "react"

type FormState = {
    firstName: string
    lastName: string
    age: string
}
type FormAction = {
    type: string
    payLoad: string
}
const initialState: FormState = {
    firstName: "",
    lastName: "",
    age: "",
}
type FormValidityState = {
    firstNameError: boolean
    lastNameError: boolean
    ageError: boolean
}
const initialValidityState: FormValidityState = {
    firstNameError: false,
    lastNameError: false,
    ageError: false
}
type FormValidityAction = {
    type: string
    payLoad: FormState
}

const formReducer = (state: FormState, action: FormAction): FormState => {
    switch(action.type){
        case "UPDATE_FIRST_NAME": return{
            ...state, firstName: action.payLoad,
        }
        case "UPDATE_LAST_NAME": return{
            ...state,lastName: action.payLoad,
        }
        case "UPDATE_AGE": return{
            ...state, age: action.payLoad,
        }
        default:
            return state
    }
}

const formValidityReducer = (state: FormValidityState, action: FormValidityAction): FormValidityState => {
    switch(action.type){
        case "VALIDATE_FIRST_NAME": return{
            ...state,
            ...({firstNameError: action.payLoad.firstName.length > 0 ? false: true})
        }
        case "VALIDATE_LAST_NAME": return{
            ...state,
            ...({lastNameError: action.payLoad.lastName.length > 0 ? false: true})
        }
        case "VALIDATE_AGE": return{
            ...state,
            ...({ageError: action.payLoad.age.length > 0 ? false: true})
        }
    default:
        return state
    }
}

export const Form = () => {

    const [formData, setFormData] = useReducer(formReducer, initialState)
    const [formValidityData, setFormValidityData] = useReducer(formValidityReducer, initialValidityState)

    const onButtonPress = (event: React.FormEvent) => {
        event.preventDefault()
        console.log(formData)
        //Form submission happens here
    }
    return(
        <form onSubmit={onButtonPress}>
            <div><label htmlFor="first_name">First Name</label></div>
            <div>
                <input
                id="first_name"
                style={{backgroundColor:formValidityData.firstNameError ?"pink" : ""}}
                onChange={(e) =>setFormData({type:"UPDATE_FIRST_NAME", payLoad:e.target.value})}
                onBlur={(e) => setFormValidityData({type: "VALIDATE_FIRST_NAME", payLoad: formData})}
                type="text"/>
            </div>
            <div><label htmlFor="last_name">Last Name</label></div>
            <div>
                <input id="last_name"
                style={{backgroundColor:formValidityData.lastNameError ? "pink" : ""}}
                onChange={(e) =>setFormData({type:"UPDATE_LAST_NAME", payLoad:e.target.value})}
                onBlur={(e) => setFormValidityData({type: "VALIDATE_LAST_NAME", payLoad: formData})}
                type="text"/>
            </div>
            <div><label htmlFor="age">Age</label></div>
            <div>
                <input
                id="age"
                style={{backgroundColor:formValidityData.ageError ? "pink" : ""}}
                onChange={(e) =>setFormData({type:"UPDATE_AGE", payLoad:e.target.value})}
                onBlur={(e) => setFormValidityData({type: "VALIDATE_AGE", payLoad: formData})}
                type="number"/>
            </div>
            <input disabled={formValidityData.firstNameError===true || formValidityData.lastNameError===true || formValidityData.ageError===true} type="submit"/>
            </form>
    )
}
