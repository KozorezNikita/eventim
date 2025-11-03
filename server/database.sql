create TABLE countries(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

create TABLE segments(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

create TABLE brands(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    picture TEXT NOT NULL,
    country_id INTEGER NOT NULL,
    FOREIGN KEY (country_id) REFERENCES countries (id),
    segment_id INTEGER NOT NULL,
    FOREIGN KEY (segment_id) REFERENCES segments (id)
);

create TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL NOT NULL,
    strength JSONB NOT NULL,
    weakness JSONB NOT NULL,
    term_of_use TEXT NOT NULL,
    positive_review TEXT NOT NULL,
    negative_review TEXT NOT NULL,
    cheap_alternative VARCHAR(255) NOT NULL,
    expensive_alternative VARCHAR(255) NOT NULL,
    own_experience TEXT NOT NULL,
    is_core BOOLEAN NOT NULL,
    is_quiet_hero BOOLEAN NOT NULL,
    picture TEXT NOT NULL,
    brand_id INTEGER NOT NULL,
    FOREIGN KEY (brand_id) REFERENCES brands (id)
);


create TABLE concerts(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    date TEXT NOT NULL,
    price DECIMAL NOT NULL,
    picture  TEXT NOT NULL, 
    gumroad TEXT NOT NULL
);