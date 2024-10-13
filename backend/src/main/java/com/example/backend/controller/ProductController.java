package com.example.backend.controller;

import com.example.backend.dto.CartPartDTO;
import com.example.backend.dto.ProductDTO;
import com.example.backend.service.productService.ProductService;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/product")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;
    private final ObjectMapper objectMapper = new ObjectMapper();

    @SneakyThrows
    @PostMapping
    public HttpEntity<?> addProduct(@Valid @RequestParam String data,
                                    @RequestParam(required = false) MultipartFile photo,
                                    @RequestParam String prefix) {
        ProductDTO productDTO = objectMapper.readValue(data, ProductDTO.class);
        return productService.addProduct(productDTO, photo, prefix);
    }

    @GetMapping("/top")
    public HttpEntity<?> getTopProduct(@RequestParam Integer count, @RequestParam(defaultValue = "all") String type) {
        return productService.getTopProduct(count, type);
    }

    @GetMapping
    public HttpEntity<?> getProducts(@RequestParam(defaultValue = "") String name,
                                     @RequestParam(defaultValue = "1") Integer page,
                                     @RequestParam(defaultValue = "5") Integer size) {

        return productService.getProducts(name, page, size);
    }


    @SneakyThrows
    @PutMapping
    public HttpEntity<?> editProduct(@Valid @RequestParam String data,
                                     @RequestParam(required = false) MultipartFile photo,
                                     @RequestParam String prefix) {
        ProductDTO productDTO = objectMapper.readValue(data, ProductDTO.class);
        return productService.editProduct(productDTO, photo, prefix);
    }

    @DeleteMapping
    public void deleteProduct(@RequestParam UUID id, @RequestParam String attachmentName) {
        productService.deleteProduct(id, attachmentName);
    }
}
