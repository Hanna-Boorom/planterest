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


@board1 = Board.create!(name: 'Houseplants', description: 'These are some houseplants I would love to have around.')


puts "#{Board.count} boards created"


@post1 = Post.create!(name: 'Cactus', description: 'The spikier the better!', image_url: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=709&q=80')

@post2 = Post.create!(name: 'ZZ Plant', description: 'A super easy, low maintenence houseplant that looks cool!', image_url: 'https://images.unsplash.com/photo-1606256419855-d72ce8675863?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')

puts "#{Post.count} posts created"

@board1.posts.push(@post1, @post2)



