class PagesController < ApplicationController
  def index
    @contact_item = ContactItem.new
  end
end
