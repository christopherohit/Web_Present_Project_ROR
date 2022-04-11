class ContactItemsController < ApplicationController
  before_action :set_contact_item, only: [:show, :edit, :update, :destroy]

  def index
    @contact_items = ContactItem.all
  end

  def show
  end

  def new
    @contact_item = ContactItem.new
  end

  def edit
  end

  def create
    @contact_item = ContactItem.new(contact_item_params)

    respond_to do |format|
      if @contact_item.save

        name = params[:contact_item][:name]
        email = params[:contact_item][:email]
        comments = params[:contact_item][:comments]
        ContactMailer.contact_email(name, email, comments).deliver
        format.html { redirect_to '/', notice: 'Comments sent!' }
        format.json { render :show, status: :created, location: @contact_item }
      else
        format.html { render :new }
        format.json { render json: @contact_item.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @contact_item.update(contact_item_params)
        format.html { redirect_to @contact_item, notice: 'Contact item was successfully updated.' }
        format.json { render :show, status: :ok, location: @contact_item }
      else
        format.html { render :edit }
        format.json { render json: @contact_item.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @contact_item.destroy
    respond_to do |format|
      format.html { redirect_to contact_items_url, notice: 'Contact item was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def set_contact_item
      @contact_item = ContactItem.find(params[:id])
    end
    # This is just to only allow the white list through.
    def contact_item_params
      params.require(:contact_item).permit(:name, :email, :comments)
    end
end
