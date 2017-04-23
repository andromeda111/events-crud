
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events').then(() => {
      // Inserts seed entries
      return knex('events').insert([
        {
          id: 1,
          title: 'Sonata Arctica',
          description: 'Symphonic metal',
          over_21: true,
          start_datetime: '5/14/2017',
          end_datetime: '5/14/2017',
          img_url: 'http://www.t-shirtzone.co.uk/images/detailed_images/hf_sonata_grays_LRG.jpg',
          venues_id: 1
        },
        {
          id: 2,
          title: 'Halestorm',
          description: 'Rock',
          over_21: true,
          start_datetime: '7/10/2017',
          end_datetime: '7/10/2017',
          img_url: 'http://cdn.ticketfly.com/i/00/01/58/04/21-ejmbo.jpg',
          venues_id: 2
        },
        {
          id: 3,
          title: 'Nightwish',
          description: 'Symphonic metal',
          over_21: true,
          start_datetime: '6/05/2017',
          end_datetime: '6/05/2017',
          img_url: 'https://s-media-cache-ak0.pinimg.com/originals/fd/cd/fd/fdcdfdb4d5879af657b1d8afccfc86bd.jpg',
          venues_id: 3
        }
      ])
    })
}
