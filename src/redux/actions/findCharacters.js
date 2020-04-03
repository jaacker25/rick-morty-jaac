export const type='findCharacters';

const findCharacters =text=>{

    return{
        type,
        payload:text,
    }
}

export default findCharacters;