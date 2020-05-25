import {SAVE_COMMENT} from './types'

export function saveComment(data){
    return{
        type:SAVE_COMMENT,
        payload:data
    }
}