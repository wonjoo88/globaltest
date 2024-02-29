import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Layout from './component/Layout';
import Main from './page/main';
import Dtin from './page/dtin';
import Dtob from './page/dtob';
import Dtiv from './page/dtiv';
import Cmp from './page/cmp';
import Usr from './page/usr';
import Wmslk from './page/wmslk';
import Login from './page/login';
import Root from './routes/root';
import Error from './page/error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element: <Main/>, // 메인화면
      },
      {
        path:"/dtin",
        element: <Dtin/>, // 입고현황
      },
      {
        path:"/dtob",
        element: <Dtob/>, // 출고현황
      },
      {
        path:"/dtiv",
        element: <Dtiv/>, // 재고현황
      },
      {
        path:"/wmslk",
        element: <Wmslk/>, // WMS
      },
      {
        path:"/usr",
        element: <Usr/>, // 사용자
      },
      {
        path:"/cmp",
        element: <Cmp/>, // 업체
      },
      {
        path:"/root",
        element: <Root/>, // 공식문서 테스트
        errorElement:<Error/>
      }
    ]
  },
  {
    path:"/login",
    element:<Login/>
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
