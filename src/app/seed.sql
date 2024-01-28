CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
)

CREATE TABLE IF NOT EXISTS recipes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  recipe TEXT NOT NULL,
  category_id INTEGER REFERENCES categories(id),
  like_count INTEGER NOT NULL DEFAULT 0
)

CREATE TABLE IF NOT EXISTS tags (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
)

CREATE TABLE IF NOT EXISTS recipes_tags (
  recipe_id INTEGER REFERENCES recipes(id),
  tag_id INTEGER REFERENCES tags(id),
  PRIMARY KEY (recipe_id, tag_id)
)

CREATE TABLE IF NOT EXISTS comments(
  id SERIAL PRIMARY KEY,
  content VARCHAR(255) NOT NULL
)

CREATE TABLE IF NOT EXISTS recipes_comments (
  recipe_id INTEGER REFERENCES recipes(id),
  comment_id INTEGER REFERENCES comments(id),
  PRIMARY KEY (recipe_id, comment_id)
)

INSERT INTO categories(name) VALUES('Cakes');
INSERT INTO categories(name) VALUES('Main Dishes');
INSERT INTO categories(name) VALUES('Starters');

INSERT INTO recipes(name, recipe, category_id) VALUES('Red Velvet', 'Make the cake: Whisk the flour, baking soda, cocoa powder, and salt together in a large bowl. Set aside.
Using a handheld or stand mixer fitted with a paddle attachment, beat the butter and sugar together on medium-high speed until combined, about 1 minute. Scrape down the sides and up the bottom of the bowl with a rubber spatula as needed. Add the oil, egg yolks, vanilla extract, and vinegar and beat on high for 2 minutes. (Set the egg whites aside.) Scrape down the sides and up the bottom of the bowl with a rubber spatula as needed.

', 1);
INSERT INTO recipes(name, recipe, category_id) VALUES('Chiken Roast', 'STEP 1
Heat oven to 190C/fan 170C/gas 5. Have a shelf ready in the middle of the oven without any shelves above it.

STEP 2
Scatter 1 roughly chopped onion and 2 roughly chopped carrots over the base of a roasting tin that fits the whole 1 ½ kg chicken, but doesn’t swamp it.

STEP 3
Season the cavity of the chicken liberally with salt and pepper, then stuff with 2 lemon halves and a small bunch of thyme, if using.

STEP 4
Sit the chicken on the vegetables, smother the breast and legs all over with 25g softened butter, then season the outside with salt and pepper.

STEP 5
Place in the oven and leave, undisturbed, for 1 hr 20 mins – this will give you a perfectly roasted chicken. To check, pierce the thigh with a skewer and the juices should run clear.

STEP 6
Carefully remove the tin from the oven and, using a pair of tongs, lift the chicken to a dish or board to rest for 15-20 mins. As you lift the dish, let any juices from the chicken pour out of the cavity into the roasting tin.

STEP 7
While the chicken is resting, make the gravy. Place the roasting tin over a low flame, then stir in 1 tbsp flour and sizzle until you have a light brown, sandy paste.

STEP 8
Gradually pour in 250ml chicken stock, stirring all the time, until you have a thickened sauce.

STEP 9
Simmer for 2 mins, using a wooden spoon to stir, scraping any sticky bits from the tin.

STEP 10
Strain the gravy into a small saucepan, then simmer and season to taste. When you carve the bird, add any extra juices to the gravy.

', 2);
INSERT INTO recipes(title, recipe, category_id) VALUES('Onion Soup', 'STEP 1
Melt the butter with the olive oil in a large heavy-based pan. Add the onions and fry with the lid on for 10 mins until soft.

STEP 2
Sprinkle in the sugar and cook for 20 mins more, stirring frequently, until caramelised. The onions should be really golden, full of flavour and soft when pinched between your fingers. Take care towards the end to ensure that they don’t burn.

STEP 3
Add the garlic cloves for the final few minutes of the onions’ cooking time, then sprinkle in the plain flour and stir well.

STEP 4
Increase the heat and keep stirring as you gradually add the wine, followed by the beef stock. Cover and simmer for 15-20 mins.

STEP 5
To serve, turn on the grill, and toast the bread. Ladle the soup into heatproof bowls.

STEP 6
Put a slice or two of toast on top of the bowls of soup, and pile on the gruyère. Grill until melted. Alternatively, you can cook the toasts under the grill, then add them to the soup to serve.', 3);

INSERT INTO recipes(name, recipe, category_id) VALUES('Choclate Cake', 'Make the cake: Whisk the flour, baking soda, cocoa powder, and salt together in a large bowl. Set aside.
Using a handheld or stand mixer fitted with a paddle attachment, beat the butter and sugar together on medium-high speed until combined, about 1 minute. Scrape down the sides and up the bottom of the bowl with a rubber spatula as needed. Add the oil, egg yolks, vanilla extract, and vinegar and beat on high for 2 minutes. (Set the egg whites aside.) Scrape down the sides and up the bottom of the bowl with a rubber spatula as needed.

', 1);

INSERT INTO comments(content) VALUES('i love the recipe');
INSERT INTO comments(content) VALUES('this is very delicious');
INSERT INTO comments(content) VALUES('thanks for this recipe will try it tonight');

INSERT INTO recipes_comments(recipe_id, comment_id) VALUES(5, 1);
INSERT INTO recipes_comments(recipe_id, comment_id) VALUES(6, 2);
INSERT INTO recipes_comments(recipe_id, comment_id) VALUES(7, 3);