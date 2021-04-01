class ChangeBoardsIdColumnName < ActiveRecord::Migration[6.1]
  def change
    rename_column :posts, :boards_id, :board_id
  end
end
