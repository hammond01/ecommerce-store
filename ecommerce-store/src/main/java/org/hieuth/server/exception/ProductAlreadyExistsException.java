package org.hieuth.server.exception;

/**
 * @author Hoàng Hiếu
 */
public class ProductAlreadyExistsException extends RuntimeException {
    public ProductAlreadyExistsException(String message) {
        super(message);
    }
}
