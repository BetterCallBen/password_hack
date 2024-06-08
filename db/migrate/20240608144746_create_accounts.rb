class CreateAccounts < ActiveRecord::Migration[7.0]
  def change
    create_table :accounts do |t|
      t.string :password
      t.string :name

      t.timestamps
    end
  end
end
