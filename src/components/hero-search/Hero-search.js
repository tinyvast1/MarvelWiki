import {  useRef, useState } from 'react'
import useMarvelService from '../../services/MarvelService'
import './hero-search.scss'
import ErrorMessage  from '../error/Error'
import {Form, Field, Formik, ErrorMessage as FormikErrorMessage} from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'

const HeroSearch = () => {
    const {searchCharacter, loading, error} = useMarvelService();
    const [char, setChar] = useState(1);

    const onSearch = async (values) => {
            await searchCharacter(values.name)
                    .then(setChar);
    }

    
    const pageError = error ? <ErrorMessage/> : null;
    const page = !error ? <View loading={loading} onSearch={onSearch} char={char}/> : null;
    
    return (
        <div className="hero-search">
            {page}
            {pageError}
        </div>
    )   
}

const View = ({loading, onSearch, char}) => {
    const messageTrue = char.name ? <MessageTrue char={char}/> : null;
    const messageFalse = char === false ? <MessageFalse/> : null;

    return (
        <>
            <div className="hero-search__title">Or find a character by name:</div>
                <Formik
                    initialValues={{name: ''}}
                    validationSchema={Yup.object({
                        name: Yup.string().required('This field is required')
                    })}
                    onSubmit={values => onSearch(values)}>
                    <Form className="hero-search__form">
                        <div className="hero-search__form-wrapper">
                            <Field 
                                id='name' 
                                name='name' 
                                className="hero-search__input" 
                                type="text" 
                                placeholder="Enter name"/>
                            <FormikErrorMessage 
                            className='hero-search__message hero-search__message-false' 
                            name="name" 
                            component="div"/>
                        </div>
                        <div className="hero-search__form-wrapper">
                            <button disabled={loading} className="btn btn-red hero-search__btn hero-search__form-btn">FIND</button>
                        </div>
                        
                    </Form>
                </Formik>
                {messageFalse}
                {messageTrue}
        </>
    )
}

const MessageTrue = ({char}) => {
    return (
        <div className='hero-search__message'>
            <div className='hero-search__message-true'>{`There is! Visit ${char.name} page?`}</div>
            <Link to={`char/${char.id}`} state={char} className="btn btn-grey hero-search__btn">TO PAGE</Link>
        </div>
    )
}

const MessageFalse = () => {
    return (
        <div className='hero-search__message'>
            <div className='hero-search__message-false'>The character was not found. Check the name and try again</div>
        </div>
    )
}

export default HeroSearch

