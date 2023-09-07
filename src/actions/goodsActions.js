import {FETCH_MAIN_GOODS, FETCH_GOODS_DETAIL, FETCH_GOODS_LIST, FETCH_SEARCH_PAGE, FETCH_SEARCH_DATA, FETCH_PAGE} from "./types";
import axios from "axios";
import {type} from "@testing-library/user-event/dist/type";

export const fetchMain=()=>dispatch=>{

    axios.get('http://localhost/goods/main_list').then(response=>dispatch({
        type:FETCH_MAIN_GOODS,
        payload:response.data
    }))

}

export const fetchGoodsList=(page)=>dispatch=> {

    axios.get('http://localhost/goods/goods_list', {
        params:{
            page:page
        }
    }).then(response=>dispatch({
        type:FETCH_GOODS_LIST,
        payload:response.data
    }))
}

export const fetchGoodsDetail=(user_id)=>dispatch=>{

    axios.get('http://localhost/goods/goods_detail_info',{
        params:{
            user_id:user_id
        }
    }).then(response=>dispatch({
        type:FETCH_GOODS_DETAIL,
        payload:response.data
    }))
}

export const fetchGoodsListPage=(page)=>dispatch=>{

    axios.get('http://localhost/goods/goods_list_page',{
        params:{
            page:page
        }
    }).then(response=>dispatch({
       type:FETCH_PAGE,
       payload:response.data
    }))
}

export const fetchSearchGoods=(fd, page)=>dispatch=>{
    axios.get('http://localhost/goods/goods_find', {
        params:{
            page:page,
            fd:fd
        }
    }).then(response=>dispatch({
        type:FETCH_SEARCH_DATA,
        payload:response.data
    }))
}

export const fetchSearchPage=(fd,page)=>dispatch=>{
    axios.get('http://localhost/goods/goods_find_page', {
        params:{
            page:page,
            fd:fd
        }
    }).then(response=>dispatch({
        type:FETCH_SEARCH_PAGE,
        payload:response.data
    }))
}

