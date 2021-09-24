
create table players (
  id serial primary key, 
  name varchar(100) not null,
  score int
);

INSERT INTO players(name) VALUES('Harrison Ford');