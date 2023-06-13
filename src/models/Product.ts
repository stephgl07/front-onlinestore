export class ProductGridItem {
  productId = 0;
  productName?: string = "";
  productDescription?: string = "";
  //   categoryId?: number;
  stockThreshold?: number = 0;
  //   category?: GetProductCategoryDTO;
  creationDate?: Date = new Date();
  creationUser?: string = "";
  creationTimeZone?: string = "";
  lastUpdate?: Date = new Date();
}

export class GetProductsDTO {
  productId = 0;
  productName?: string = "";
  productDescription?: string = "";
  categoryId?: number = 0;
  isActive?: boolean = false;
  creationDate?: Date = new Date();
  creationUser?: string = "";
  creationTimeZone?: string = "";
  lastUpdate?: Date = new Date();
  stockThreshold?: number = 0;
  category?: GetProductCategoryDTO;
  productDetails: GetProductsDetailDTO[] = [];
  productSuppliers: GetProductSupplierDTO[] = [];
}

export class GetProductsDetailDTO {
  detailId = 0;
  productPrice?: number = 0;
  stock?: number = 0;
  warrantyPeriod?: number = 0;
  modelName?: string = "";
  imageUrl?: string = "";
  reviewRating?: number = 0;
  reviewCount?: number = 0;
  productWeight?: number = 0;
  productDimensions?: string = "";
  promotions?: PromotionDTO[];
}

export class GetProductSupplierDTO {
  productId = 0;
  supplierId = 0;
  supplyDate?: Date = new Date();
  supplyQuantity?: number = 0;
  purchasePrice?: number = 0;
  expiryDate?: Date = new Date();
  batchNumber?: string = "";
  supplier?: GetSupplierDTO;
}

class GetSupplierDTO {
  supplierId = 0;
  supplierName?: string = "";
  supplierContact?: string = "";
  creationDate?: Date = new Date();
  creationUser?: string = "";
  lastUpdate?: Date = new Date();
  isActive?: boolean = false;
  address?: string = "";
  email?: string = "";
  phoneNumber?: string = "";
  websiteUrl?: string = "";
}

class GetProductCategoryDTO {
  categoryId = 0;
  categoryName?: string;
  categoryDescription?: string;
  parentCategoryId?: number;
  creationDate?: Date = new Date();
  creationUser?: string = "";
  lastUpdate?: Date = new Date();
  isActive?: boolean = false;
}

export class PromotionDTO {
  promotionName = "";
  discountPercentage?: number = 0;
  shippingCost?: number = 0;
  productDiscount?: number = 0;
  quantityThreshold?: number = 0;
}

export class AddEditProductDTO {
  productId = 0;
  productName?: string = "";
  productDescription?: string = "";
  categoryId?: number = 0;
  isActive?: boolean = false;
  creationUser?: string = "";
  creationDateUtc?: string = "";
  creationTimeZone?: string = "";
  stockThreshold?: number = 0;
  productDetails: AddEditProductDetailDTO[] = [];
}

export class AddEditProductDetailDTO {
  detailId?: number = 0;
  productPrice?: number = 0;
  stock?: number = 0;
  warrantyPeriod?: number = 0;
  modelName?: string = "";
  imageUrl?: string = "";
  reviewRating?: number = 0;
  reviewCount?: number = 0;
  productWeight?: number = 0;
  productDimensions?: string = "";
}

export class GetAllByIdProductsDTO {
  productId: number = 0;
  productName?: string;
  productDescription?: string;
  categoryId?: number;
  isActive?: boolean;
  creationDate?: Date;
  creationUser?: string;
  creationTimeZone?: string;
  lastUpdate?: Date;
  stockThreshold?: number;
  productDetails: GetProductsDetailDTO[] = [];
}