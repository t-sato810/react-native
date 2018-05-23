class RenameCommentToRooms < ActiveRecord::Migration[5.1]
  def change
    rename_column :rooms, :comment, :text
  end
end
