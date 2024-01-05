package org.hieuth.server.exception;

/**
 * @author Hoàng Hiếu
 */
public class ProductNotFoundException extends RuntimeException {
    public ProductNotFoundException(String message) {
        super(message);
    }
}
