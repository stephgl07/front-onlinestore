import axios from "axios";
import { urlProduct, urlProductDetail } from "../config/EndpointsConfig";
import { ApiResulResponse } from "../commons/models/ApiCommons";
import {
  AddEditProductDTO,
  GetAllByIdProductsDTO,
  GetProductsDetailDTO,
  ProductGridItem,
} from "../models/Product";

export const fetchGetAllProducts = async (): Promise<ProductGridItem[]> => {
  try {
    const url = `${urlProduct}/GetAll`;
    const response = await axios.get<ApiResulResponse>(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": true,
      },
    });

    const { succeeded, message, errors, data } = response.data;

    console.log("message", message);

    if (!succeeded) {
      console.log("errors", errors);
      return [];
    }

    const products = data as ProductGridItem[];

    return products ?? [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchCreateProduct = async (
  request: AddEditProductDTO
): Promise<ProductGridItem> => {
  try {
    const defaultDetail = [
      {
        detailId: 0,
        productPrice: 50,
        stock: 10,
        warrantyPeriod: 120,
        modelName: "Detalle 1",
        imageUrl: "Img 1",
        reviewRating: 3,
        reviewCount: 4,
        productWeight: 50,
        productDimensions: "60x80",
      },
      {
        detailId: 0,
        productPrice: 65,
        stock: 5,
        warrantyPeriod: 360,
        modelName: "Detalle 2",
        imageUrl: "Img 2",
        reviewRating: 1,
        reviewCount: 8,
        productWeight: 60,
        productDimensions: "20x10",
      },
    ];
    
    request.productDetails = defaultDetail;
    const url = `${urlProduct}/Create`;
    const response = await axios.post<ApiResulResponse>(url, request, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": true,
      },
    });

    const { succeeded, message, errors, data } = response.data;

    console.log("message", message);

    if (!succeeded) {
      console.log("errors", errors);
      return new ProductGridItem();
    }

    const products = data as ProductGridItem;

    return products;
  } catch (error) {
    console.error(error);
    return new ProductGridItem();
  }
};

export const fetchEditProduct = async (
  request: AddEditProductDTO
): Promise<ProductGridItem> => {
  try {
    const url = `${urlProduct}/Update`;
    const response = await axios.put<ApiResulResponse>(url, request, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": true,
      },
    });

    const { succeeded, message, errors, data } = response.data;

    console.log("message", message);

    if (!succeeded) {
      console.log("errors", errors);
      return new ProductGridItem();
    }

    const products = data as ProductGridItem;

    return products;
  } catch (error) {
    console.error(error);
    return new ProductGridItem();
  }
};

export const fetchGetProductById = async (
  id: number
): Promise<GetAllByIdProductsDTO> => {
  try {
    const url = `${urlProduct}/GetAllById?ProductId=${id}`;
    const response = await axios.get<ApiResulResponse>(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": true,
      },
    });

    const { succeeded, message, errors, data } = response.data;

    console.log("message", message);

    if (!succeeded) {
      console.log("errors", errors);
      return new GetAllByIdProductsDTO();
    }

    const products = data as GetAllByIdProductsDTO;

    return products;
  } catch (error) {
    console.error(error);
    return new GetAllByIdProductsDTO();
  }
};

export const fetchGetDetailByProductId = async (
  idProduct: number
): Promise<GetProductsDetailDTO[]> => {
  try {
    const url = `${urlProductDetail}/GetDetailByProductId?ProductId=${idProduct}`;
    const response = await axios.get<ApiResulResponse>(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": true,
      },
    });

    const { succeeded, message, errors, data } = response.data;

    console.log("message", message);

    if (!succeeded) {
      console.log("errors", errors);
      return [];
    }

    const products = data as GetProductsDetailDTO[];

    return products;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchGetDetailById = async (
  id: number
): Promise<GetProductsDetailDTO> => {
  try {
    const url = `${urlProductDetail}/GetDetailById?DetailId=${id}`;
    const response = await axios.get<ApiResulResponse>(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": true,
      },
    });

    const { succeeded, message, errors, data } = response.data;

    console.log("message", message);

    if (!succeeded) {
      console.log("errors", errors);
      return new GetProductsDetailDTO();
    }

    const products = data as GetProductsDetailDTO;

    return products;
  } catch (error) {
    console.error(error);
    return new GetProductsDetailDTO();
  }
};
