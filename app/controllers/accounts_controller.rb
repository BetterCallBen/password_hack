class AccountsController < ApplicationController
  def create
    @account = Account.create(password: params[:password])

    redirect_to account_path(@account)
  end

  def show
  end
end
