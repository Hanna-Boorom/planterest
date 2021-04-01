class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :name
      t.text :description
      t.text :image_url
      t.references :boards, null: false, foreign_key: true

      t.timestamps
    end
  end
end
