create table quiz (
    id serial primary key,
    name text not null,
    description text not null,
    created_at timestamp not null default now()
);

create table question (
    id serial primary key,
    quiz_id integer not null references quiz(id),
    question text not null,
    correct_answer text not null,
    created_at timestamp not null default now()
);





