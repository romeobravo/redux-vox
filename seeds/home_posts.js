
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('home_posts').del(), 

    // Inserts seed entries
    knex('home_posts').insert({id: 1, title: 'Post1', content: 'Lorum Ipsum'}),
    knex('home_posts').insert({id: 2, title: 'Post2', content: 'Lorum Ipsum'}),
    knex('home_posts').insert({id: 3, title: 'Post3', content: 'Lorum Ipsum'})
  );
};
