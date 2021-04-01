class ChangeUsersIdColumnName < ActiveRecord::Migration[6.1]
  def change
    rename_column :boards, :users_id, :user_id
  end
end
