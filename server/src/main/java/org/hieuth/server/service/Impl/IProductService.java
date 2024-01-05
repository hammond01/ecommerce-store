package org.hieuth.server.service.Impl;

import org.hieuth.server.model.Product;

import java.util.List;

/**
 * @author Hoàng Hiếu
 */
public interface IProductService {
    Product addProduct(Product product);

    List<Product> getProducts();

    Product updateProduct(Product product, Long id);

    Product getProductById(Long id);

    void deleteProduct(Long id);
}
