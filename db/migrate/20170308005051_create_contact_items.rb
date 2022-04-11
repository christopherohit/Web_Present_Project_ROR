class CreateContactItems < ActiveRecord::Migration[5.0]
  def change
    create_table :contact_items do |t|
      t.string :name
      t.string :email
      t.text :comments

      t.timestamps
    end
  end
end
