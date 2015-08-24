class CreateCarpools < ActiveRecord::Migration
  def change
    create_table :carpools do |t|
      t.datetime :time
      t.string :fromplace
      t.string :toplace
      t.integer :price
      t.string  :contact
      t.text :notes
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
    add_index :carpools, [:user_id, :created_at,:time]
  end
end

