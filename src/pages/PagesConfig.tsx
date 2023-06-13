import ProductGrid from "./product/ProductGrid";
import Home, { RedirectToHomePage } from "./home/HomePage";
import NotFound from "../commons/pages/NotFound";
import ProductCreate from "./product/ProductCreate";
import ProductEdit from "./product/ProductEdit";
import ProductDetail from "./product/ProductDetail";

export interface PageConfig {
  key: string;
  path: string;
  exact?: boolean;
  component: () => JSX.Element;
}

const pagesConfig: PageConfig[] = [
  {
    key: "home",
    path: "/",
    exact: true,
    component: Home,
  },
  {
    key: "products-grid",
    path: "/products",
    exact: true,
    component: ProductGrid,
  },
  {
    key: "products-create",
    path: "/products/create",
    exact: true,
    component: ProductCreate,
  },
  {
    key: "products-edit",
    path: "/products/edit/:id(\\d+)",
    exact: true,
    component: ProductEdit,
  },
  {
    key: "products-detail",
    path: "/products/detail/:id(\\d+)",
    exact: true,
    component: ProductDetail,
  },
  {
    key: "not-found",
    path: "/not-found",
    exact: true,
    component: NotFound,
  },
  {
    key: "page-not-found",
    path: "*",
    component: () => RedirectToHomePage(),
  },
];

export default pagesConfig;
