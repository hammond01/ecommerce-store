package org.hieuth.server.service;

import lombok.RequiredArgsConstructor;
import org.hieuth.server.exception.ProductAlreadyExistsException;
import org.hieuth.server.exception.ProductNotFoundException;
import org.hieuth.server.model.Product;
import org.hieuth.server.repository.ProductRepository;
import org.hieuth.server.service.Impl.IProductService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Hoàng Hiếu
 */
@Service
@RequiredArgsConstructor
public class ProductServices implements IProductService {
    private final ProductRepository productRepository;

    @Override
    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product addProduct(Product product) {
        if (productAlreadyExists(product.getName())) {
            throw new ProductAlreadyExistsException("Product name is not exist!");
        }
        return productRepository.save(product);
    }

    @Override
    public Product updateProduct(Product product, Long id) {
        return productRepository.findById(id).map(h -> {
            h.setName(product.getName());
            h.setCategory(product.getCategory());
            h.setImage(product.getImage());
            h.setAvailable(product.isAvailable());
            h.setOld_price(product.getOld_price());
            h.setNew_price(product.getNew_price());
            return productRepository.save(h);
        }).orElseThrow(() ->
                new ProductNotFoundException("Product is not exist!")
        );
    }

    @Override
    public Product getProductById(Long id) {
        return productRepository.findById(id).orElseThrow(() -> new ProductNotFoundException("Product not found with the id: " + id));
    }

    @Override
    public void deleteProduct(Long id) {
        if (!productRepository.existsById(id)) {
            throw new ProductNotFoundException("Could not find the product with id: " + id);
        }
    }

    private boolean productAlreadyExists(String name) {
        return productRepository.findByName(name).isPresent();
    }

}
