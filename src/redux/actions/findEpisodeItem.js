export const type='findEpisodeItem';

const findEpisodeItem =id=>{

    return{
        type,
        payload:id,
    }
}

export default findEpisodeItem;