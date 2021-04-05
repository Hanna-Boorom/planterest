# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Post.destroy_all
Board.destroy_all
User.destroy_all

# @board1 = Board.create!()
@admin = User.create!(username: 'admin', email: 'admin@email.com', password: '123456')

puts "#{User.count} users created"


@board1 = Board.create!(name: 'Houseplants', description: 'These are some houseplants I would love to have around.', user: @admin)

@board2 = Board.create!(name: 'Succulents', description: 'The cutest plants with the lowest maintenence.', user: @admin)

puts "#{Board.count} boards created"


@post1 = Post.create!(name: 'Golden Pothos', description: 'Beautiful trailing plant that would look great in a hanging pot', image_url: 'https://images.unsplash.com/photo-1596724878582-76f1a8fdc24f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cG90aG9zfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', board: @board1)

@post2 = Post.create!(name: 'ZZ Plant', description: 'A super easy, low maintenence houseplant that looks cool!', image_url: 'https://images.unsplash.com/photo-1606256419855-d72ce8675863?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', board: @board1)

@post3 = Post.create!(name: 'Cactus', description: 'The spikier the better!', image_url: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=709&q=80', board: @board2)

@post4 = Post.create!(name: 'Aloe', description: 'Alien-looking and medicinal!', image_url: 'https://images.unsplash.com/photo-1569745358610-b01866003860?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80', board: @board2)

@post5 = Post.create!(name: 'Echeveria', description: 'Beautiful, floral-shaped succulents that come in a variety of colors', image_url: 'https://images.unsplash.com/photo-1446071103084-c257b5f70672?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=631&q=80', board: @board2)

puts "#{Post.count} posts created"

# # @board1.posts.push(@post1, @post2)



