export const type='findEpisodes';

const findEpisodes =text=>{

    return{
        type,
        payload:text,
    }
}

export default findEpisodes;