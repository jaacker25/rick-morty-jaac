export const type='findCharacterItem';

const findCharacterItem =id=>{

    return{
        type,
        payload:id,
    }
}

export default findCharacterItem;