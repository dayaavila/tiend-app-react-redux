import React, { useState } from 'react';

import Modal from 'react-modal';
import { useForm } from 'react-hook-form';

import { useDispatch } from 'react-redux';
// import { AddCards } from '../../actions/cards';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');
export const CardsModal = () => {

    const dispatch = useDispatch();
  
    const addCard = (cardsData) => {
     dispatch({ type: 'ADD-CARD', payload: cardsData })
    }

    const {register, handleSubmit, errors} = useForm();

    const [modalIsOpen, setModalIsOpen] = useState(true);

    const [formValues, setFormValues] = useState({ 
        title: '',
        description: '',
        imgUrl: ''
    });

    const { title, description, imgUrl } = formValues;

    const closeModal = () => {
        setModalIsOpen(false);
    }

    const openModal = () => {
      setModalIsOpen(true);
    }

    const onSubmit = (data, e) => {
        e.preventDefault();
        console.log(data);
        //dispatch( AddCards(12314, 'adasf') );
        
        addCard(data);
        //e.target.reset();

        closeModal();
    }

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues, 
            [target.name]: target.value
        });
    }


    return (
        <div>

        <button className="btn btn-danger btn-lg" onClick={ openModal }>Crear Tarjeta</button>
        
        <Modal
          isOpen={ modalIsOpen }
          onRequestClose={ closeModal }
          style={ customStyles }
          closeTimeoutMS={ 200 }
          className="modal"
          overlayClassName="modal-fondo"
        >
        <h1> Nueva tarjeta </h1>

        <form 
            className="container"
            onSubmit={handleSubmit(onSubmit)}
        >

            <div className="form-group">
                <input  type="text"  
                        className="inputStyleForm"
                        placeholder="Título" 
                        name="title"
                        autoComplete="off" 
                        value={ title }
                        onChange={ handleInputChange }
                        ref={register({ 
                            required: { value: true, message: 'El título es requerido' },
                            maxLength: { value: 10, message: 'Máximo 10 caracteres!' },
                            minLength: { value: 2, message: 'Mínimo 2 caracteres!' }
                            })}
                />
                <span className="text-danger text-small d-block mb-2">
                    {errors.title && errors.title.message}
                </span>
            </div>

            <div className="form-group">
                <input type="text"  
                       className="inputStyleForm"
                       placeholder="Descripción" 
                       name="description"
                       autoComplete="off"
                       value={ description }
                       onChange={ handleInputChange }
                       ref={register({ 
                        required: { value: true, message: 'La descripción es requerida' },
                        maxLength: { value: 10, message: 'Máximo 10 caracteres!' },
                        minLength: { value: 2, message: 'Mínimo 2 caracteres!' }
                        })}
            />
            <span className="text-danger text-small d-block mb-2">
                {errors.description && errors.description.message}
            </span>
            </div>

            <div className="form-group">
                <input 
                    type="text" 
                    className="inputStyleForm"
                    placeholder="Imagen (Url)"
                    name="imgUrl"
                    autoComplete="off"
                    value={ imgUrl }
                    onChange={ handleInputChange }
                    ref={register()}
                />
                <small id="emailHelp" className="form-text text-muted">Formato .jpg o .png.</small>
            </div>

            <button
                type="submit"
                className="btn btn-danger btn-lg"
            >
                <i className="far fa-save"></i>
                <span> Añadir </span>
            </button>

        </form>

        </Modal>


        </div>
    )
}

















// import React, { useState } from 'react';

// import Modal from 'react-modal';
// import { useForm } from 'react-hook-form';

 
// const customStyles = {
//   content : {
//     top                   : '50%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '-50%',
//     transform             : 'translate(-50%, -50%)'
//   }
// };

// Modal.setAppElement('#root');
// export const CardsModal = () => {

//     const [modalIsOpen, setModalIsOpen] = useState(true);
//     const [titleValid, setTitleValid] = useState(true);

//     const [formValues, setFormValues] = useState({ 
//         title: 'title escrito',
//         description: '',
//         imgUrl: ''
//     });

//     const { title, description, imgUrl } = formValues;

//     const closeModal = () => {
//         setModalIsOpen(false);
//     }

//     const openModal = () => {
//       setModalIsOpen(true);
//     }

//     const handleSubmitForm = (e) => {
//         e.preventDefault();
//         console.log( formValues );

//         if ( title.trim().length < 2 || description.trim().length < 2) {
//             return setTitleValid(false);
//         }

//         setTitleValid(true);
//         closeModal();
//     }

//     const handleInputChange = ({ target }) => {
//         setFormValues({
//             ...formValues, 
//             [target.name]: target.value
//         });
//     }


//     return (
//         <div>
//         <button className="btn btn-danger btn-lg" onClick={ openModal }>Crear Tarjeta</button>
//         <Modal
//           isOpen={ modalIsOpen }
//           onRequestClose={ closeModal }
//           style={ customStyles }
//           closeTimeoutMS={ 200 }
//           className="modal"
//           overlayClassName="modal-fondo"
//         >
//         <h1> Nueva tarjeta </h1>
//         <form 
//             className="container"
//             onSubmit={ handleSubmitForm }
//         >

//             <div className="form-group">
//                 <input  type="text"  
//                         className={ `form-control inputStyleForm ${ !titleValid && 'is-invalid' }` }
//                         placeholder="Título" 
//                         name="title"
//                         autoComplete="off" 
//                         value={ title }
//                         onChange={ handleInputChange }
//                 />
//             </div>

//             <div className="form-group">
//                 <input type="text"  
//                        className={ `form-control inputStyleForm ${ !titleValid && 'is-invalid' }` }
//                        placeholder="Descripción" 
//                        name="description"
//                        autoComplete="off"
//                        value={ description }
//                        onChange={ handleInputChange }
//                 />
//             <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
//             </div>

//             <div className="form-group">
//                 <input 
//                     type="text" 
//                     className="inputStyleForm"
//                     placeholder="Imagen (Url)"
//                     name="imgUrl"
//                     autoComplete="off"
//                     value={ imgUrl }
//                     onChange={ handleInputChange }
//                 />
//                 <small id="emailHelp" className="form-text text-muted">solo formato .jpg o .png.</small>
//             </div>

//             <button
//                 type="submit"
//                 className="btn btn-danger btn-lg"
//             >
//                 <i className="far fa-save"></i>
//                 <span> Añadir </span>
//             </button>

//         </form>

//         </Modal>


//         </div>
//     )
// }
