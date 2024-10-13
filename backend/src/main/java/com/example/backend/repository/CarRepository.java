package com.example.backend.repository;

import com.example.backend.entity.Car;
import com.example.backend.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface CarRepository extends JpaRepository<Car, UUID> {
//    @Query(value = "SELECT * FROM product where ORDER BY p.top_product DESC LIMIT :count ")
//    List<Product> findTopProducts(Integer count);

    @Query(value = "SELECT * FROM product ORDER BY top_product DESC LIMIT :count", nativeQuery = true)
    List<Product> findTopProducts(Integer count);

}