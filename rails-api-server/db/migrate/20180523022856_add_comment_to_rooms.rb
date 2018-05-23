class AddCommentToRooms < ActiveRecord::Migration[5.1]
  def change
    add_column :rooms, :comment, :text
  end
end
