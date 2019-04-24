class Pages::ECommerceController < ApplicationController
  def order_detail
    @title = 'Order detail - Pages'
  end

  def order_list
    @title = 'Order list - Pages'
  end

  def product_edit
    @title = 'Product edit - Pages'
  end

  def product_item
    @title = 'Product item - Pages'
  end

  def product_list
    @title = 'Product list - Pages'
  end

end
