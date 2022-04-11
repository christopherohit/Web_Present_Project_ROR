json.extract! contact_item, :id, :name, :email, :comments, :created_at, :updated_at
json.url contact_item_url(contact_item, format: :json)
