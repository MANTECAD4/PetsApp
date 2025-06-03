import { useState } from "react";

type searchFields = {
    searchText : string,
}

export const useForm = ( initialState:searchFields ) => {

    const [formState, setFormState] = useState( initialState );

    const onInputChange = ( { target }:  React.ChangeEvent<HTMLInputElement> ) => {
        const { name, value} = target;   
        setFormState( (currentState) =>  ({
            ...currentState, 
            [ name ]:value,
        }));
    }

    const onResetForm = () => 
    {
        setFormState(initialState);
    }
    
    return {
        formState,
        onInputChange,
        onResetForm,
    };
}