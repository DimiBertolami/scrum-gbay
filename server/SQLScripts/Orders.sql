create table orders
(
    id        int auto_increment
        primary key,
    userID    int  not null,
    productID int  not null,
    Quantity  int  not null,
    date      date null,
    constraint orders_id_uindex
        unique (id),
    constraint orders_products_id_fk
        foreign key (productID) references products (id),
    constraint orders_users_ID_fk
        foreign key (userID) references users (ID)
);

