import Formulaire from './formulaire/formulaire';

function App () {
    let method = 'POST';
    let lien_contact = 'contact';
    let action= 'test.php';
    let Champs= [{name:'email', type:'text' , placeholder:'Enter User Name'},
    {name:'text', type:'text' , placeholder:'Enter test2'},
    {type:'btn' , placeholder:'Voici un button '},
    {name:'text', type:'date' , placeholder:'Enter test2'},
    {type:'submit' , placeholder:'submit'},
    {name:'text', type:'select' , placeholder:'test select', choix: [{name: "test"},]},

    ];
    return (

        <>
          <Formulaire champ={Champs} action ={action} method={method} lien={lien_contact}/>
        </>

    )
}
export default App;