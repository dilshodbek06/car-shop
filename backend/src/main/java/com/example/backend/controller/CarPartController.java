package com.example.backend.controller;

import com.example.backend.dto.CartPartDTO;
import com.example.backend.service.carPartService.CartPartService;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/carPart")
@RequiredArgsConstructor
public class CarPartController {
    private final CartPartService cartPartService;
    private final ObjectMapper objectMapper = new ObjectMapper();

    @GetMapping("/top")
    public HttpEntity<?> getTopCarPart(@RequestParam Integer count) {
        return cartPartService.getTopCarPart(count);
    }

    @SneakyThrows
    @PostMapping
    public HttpEntity<?> addCarPart(@Valid @RequestParam String data,
                                    @RequestParam(required = false) MultipartFile photo,
                                    @RequestParam String prefix) {
        CartPartDTO cartPartDTO = objectMapper.readValue(data, CartPartDTO.class);
        return cartPartService.addCarPart(cartPartDTO, photo, prefix);
    }

    @SneakyThrows
    @PutMapping
    public HttpEntity<?> editCarPart(@Valid @RequestParam String data,
                                     @RequestParam(required = false) MultipartFile photo,
                                     @RequestParam String prefix) {
        CartPartDTO cartPartDTO = objectMapper.readValue(data, CartPartDTO.class);
        return cartPartService.editCarPart(cartPartDTO, photo, prefix);
    }

    @PutMapping("/archive/{id}")
    public HttpEntity<?> changeActive(@PathVariable UUID id) {
        return cartPartService.changeActive(id);
    }

    @GetMapping
    public HttpEntity<?> getCarPart(@RequestParam(defaultValue = "") String name,
                                    @RequestParam(defaultValue = "1") Integer page,
                                    @RequestParam(defaultValue = "5") Integer size) {
        return cartPartService.getCarParts(name, page, size);
    }

    @DeleteMapping("/delete/{id}")
    public HttpEntity<?> deleteCarPart(@PathVariable UUID id) {
        return cartPartService.deleteCarPart(id);
    }
}
