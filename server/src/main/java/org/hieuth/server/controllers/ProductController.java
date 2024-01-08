package org.hieuth.server.controllers;

import lombok.RequiredArgsConstructor;
import org.hieuth.server.model.Product;
import org.hieuth.server.service.Impl.IProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Hoàng Hiếu
 */
@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
public class ProductController {
    private final IProductService iProductService;

    @GetMapping
    public ResponseEntity<List<Product>> getProducts() {
        return new ResponseEntity<>(iProductService.getProducts(), HttpStatus.OK);
    }

    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return iProductService.addProduct(product);
    }

    @PutMapping("/update/{id}")
    public Product updateProduct(@RequestBody Product product, @PathVariable Long id) {
        return iProductService.updateProduct(product, id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteProduct(@PathVariable Long id) {
        iProductService.deleteProduct(id);
    }

    @GetMapping("getProduct/{id}")
    public Product getProductById(@PathVariable Long id) {
        return iProductService.getProductById(id);
    }
}
