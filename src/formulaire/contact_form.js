import Formulaire from './formulaire';


function Contact_form () {
    
    const handleFormSubmit = (data) => {
        console.log('Form Data Submitted:', data);
    };
    
    const formFields = [
        { type: 'text', name: 'name', label: 'Nom', required: true },
        { type: 'text', name: 'email', label: 'Email', required: true },
        { type: 'button', name: 'name', label: 'Nom', required: true },
        { type: 'text', name: 'email', label: 'Email', required: true },
        {
        type: 'select',
        name: 'subject',
        label: 'Objet',
        required: true,
        options: [
            { value: 'general', label: 'Général' },
            { value: 'support', label: 'Support' },
            { value: 'sales', label: 'Ventes' },
        ],
        },
        { type: 'button', label: 'Envoyer' },
    ];
    return (

        <>
            <Formulaire fields={formFields} onSubmit={handleFormSubmit}/>
        </>

    )
}
export default Contact_form;