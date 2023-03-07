create table users (
    id serial primary key,
    firstname text not null,
    lastname text not null,
    role text not null,
    phone text not null,
    email text not null,
    password text not null,
    created_at timestamp not null default now()
);




