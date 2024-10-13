package com.example.backend.repository;

import com.example.backend.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.UUID;

public interface ProductRepository extends JpaRepository<Product, UUID> {
    Page<Product> findByNameContainingIgnoreCaseOrderByCreatedAt(Pageable pageable, String name);
    @Query(value = "SELECT * FROM product p ORDER BY p.top_product ASC LIMIT :count", nativeQuery = true)
    List<Product> findTopProducts(Integer count);


    @Query(value = "SELECT * FROM product p ORDER BY p.created_at DESC LIMIT :count", nativeQuery = true)
    List<Product> findNewProducts(@Param("count") Integer count);


    @Query(value = "SELECT * FROM product p LIMIT :count", nativeQuery = true)
    List<Product> findAllByCount( Integer count);

}