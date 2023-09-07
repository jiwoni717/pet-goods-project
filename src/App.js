import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; // ==RequestMapping
import Header from "./components/layout/Header";
import Home from "./components/layout/Home";
import Footer from "./components/layout/Footer";
import {Provider} from "react-redux";
import GoodsList from "./components/goods/GoodsList";
import GoodsDetail from "./components/goods/GoodsDetail";
import GoodsFind from "./components/goods/GoodsFind";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <Routes>
          <Route exact path={"/"} element={<Home/>}/>
            <Route path={"/goods/goods_list"} element={<GoodsList/>}/>
            <Route path={"/goods/goods_detail/:user_id"} element={<GoodsDetail/>}/>
            <Route path={"/goods/goods_find/:fd"} element={<GoodsFind/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
