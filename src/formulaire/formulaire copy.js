import React, { useState } from 'react';
function Inputs({champs}) {
        let list = [];
        for(var i in champs){
            let champ = champs[i];
            if(champ.type=== 'btn' || champ.type=== 'button'|| champ.type=== 'submit'|| champ.type=== 'reset'){
                list.push(CustomButton(champ));
            }if(champ.type=== 'select'){
                list.push(CustomSelect(champ));
            }else{
                list.push(CustomInput(champ));
            }
        }
        return list;
    }

function handleSubmit(champ) {
    alert(champ.name + '\n');
    champ.preventDefault();
}

function CustomInput (champ) {
    return (
        <> <label >{champ.placeholder}
            <input
                    name={champ.name}
                    type={champ.type}
                    placeholder={champ.placeholder}
                    value={champ.value}
                    onChange={champ.onChange}
                    key={champ.name}
            /></label>
            <div></div>
        </>
    )
}

function CustomButton (button) {
    return (
        <> <button type={button.type}>{button.placeholder}</button>
            <div></div>
        </>
    )
}

function CustomOption(option) {
    return (
        <> 
                <option value={option.name}>{option.name}</option>
        </>
    )
}

function CustomSelect (select) {
    let listItems = [];
    for(var i in select.choix){
        let value = select.choix[i];
        listItems.push(CustomOption(value));

    }
    return (
        <> 
            <label for={select.name}>{select.placeholder}</label>

            <select name={select.name} id={select.name}>
                {listItems}

            </select>

        </>
    )
}

function FormMultiple({champ, action, method, titre,lien}) {
    const [champs, setChamps] = useState(champ);
    console.log(champs);
    return (
        <section id={lien} >
            <h2>{titre}</h2>
            <form action={action} mathod ={method}>
                {champs.map((value) => ( 
                    <Inputs value={value} /> 
                ))}
                <br>
                </br>
                <button type='submit' >submit</button>
            </form>
        </section>
    )
}

export default FormMultiple;