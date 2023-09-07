import {FETCH_MAIN_GOODS, FETCH_GOODS_LIST, FETCH_GOODS_DETAIL, FETCH_PAGE, FETCH_SEARCH_DATA, FETCH_SEARCH_PAGE} from "../actions/types";

const initialState={
    main_goods:[],
    goods_list:[],
    goods_detail:{},
    page_info:{},
    search_data:[],
    search_page_info:[]
}
export default function (state=initialState, action){

    switch(action.type)
    {
        case FETCH_MAIN_GOODS:
            return {
                ...state,
                main_goods:action.payload
            }
        case FETCH_GOODS_LIST:
            return {
                ...state,
                goods_list:action.payload
            }
        case FETCH_GOODS_DETAIL:
            return {
                ...state,
                goods_detail:action.payload
            }
        case FETCH_PAGE:
            return {
                ...state,
                page_info: action.payload
            }
        case FETCH_SEARCH_DATA:
            return {
                ...state,
                search_data: action.payload
            }
        case FETCH_SEARCH_PAGE:
            return {
                ...state,
                search_page_info: action.payload
            }
    }
}